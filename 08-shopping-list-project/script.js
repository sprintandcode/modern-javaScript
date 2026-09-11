const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formButton = itemForm.querySelector('button');

let isEditMode = false;

// Event Listeners
function displayItems() {
 const itemsFromStorage = getItemFromStorage();
 itemsFromStorage.forEach(item => addItemToDom(item));
 checkUI();
}

function onAddItemSubmit (e) {
    e.preventDefault();

    const newItem = itemInput.value;
    // validate INput
    if (newItem.value === '') {
        alert('Please add an item');
        return;
    }

    // check for edit mode

    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');
        
        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');

        itemToEdit.remove();
        isEditMode = false;
    }

    // create item DOM Element
    addItemToDom(newItem);

    // add Item to localStorage
    addItemToStorage(newItem);

    checkUI();

    itemInput.value = '';
}

function addItemToDom (item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to the DOM
    itemList.appendChild(li);
}

function addItemToStorage (item) {
    const itemsFromStorage = getItemFromStorage();

    itemsFromStorage.push(item);

    // convert to Json and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemFromStorage (item) {
    let itemsFromStorage;
    
    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function createButton (classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon (classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function onClickItem (e) {
    if(e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));
    item.style.color = ('edit-mode');
    formButton.innerHTML = '<i class = "fa-solid fa-pen"></i> Update Item';
     formButton.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}

function removeItem(item) {
    if(confirm('Are you sure?')) {
        // remove item from DOM
    item.remove();

    // remove item from storage
    removeItemFromStorage(item.textContent);
    checkUI();
    }
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemFromStorage();

    // filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // Re Set to localStorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
    checkUI();
}

function clearItems(e) {
    // itemList.innerHTML = '';

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    // clear from localStrorage
    localStorage.removeItem('items');

    checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    
    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();
        
        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}


function checkUI () {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formButton.innerHTML = '<i class="fa-solid fa-plus"><i/> Add Item';
    formButton.style.backgroundColor = '#333';

    isEditMode = false;
}

// Initialize app
function init() {
    // event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearButton.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();
}

init();

