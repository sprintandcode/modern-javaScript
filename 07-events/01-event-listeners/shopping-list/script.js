function onClear() {
    const itemList = document.querySelector('ul');

    // itemList.innerHTML = '';
    
    const items = itemList.querySelectorAll('li');
    items.forEach((item) => item.remove());
}

// addEventListener

const clearBtn = document.querySelector('#clear');

// clearBtn.addEventListener('click', () => alert('clear items'));

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

setTimeout(() => clearBtn.click(), 5000);
