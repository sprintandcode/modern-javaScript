function replaceFirstItem () {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem () {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second Item</li>';
}

replaceSecondItem ();

function replaceAllItem () {
    const lis = document.querySelectorAll('li');

    lis.forEach((item, index) => {
        item.outerHTML = '<li>Replaced All</li>';
    });
}

replaceAllItem ();