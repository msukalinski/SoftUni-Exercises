import { post, get, getStorage } from "./api.js";
import { renderProducts } from "./utility.js";

const tableBody = document.querySelector('.table>tbody');
const orders = document.querySelector('.orders');

const logoutButton = document.querySelector('#logoutBtn');
logoutButton?.addEventListener('click', onLogout);

const buyButton = document.querySelector('.col-md-12>button');
buyButton?.addEventListener('click', onBuy);

const allOrdersButton = orders?.querySelector('button');
allOrdersButton?.addEventListener('click', onAllOrders);

document.addEventListener('DOMContentLoaded', () => {
    get('/data/furniture')
        .then(data => {
            if (data) {
                renderProducts(data, tableBody);
            }
        })
        .catch(error => {
            alert(error.message);
        });
})

const formElement = document.querySelector('.col-md-12>form');
formElement?.addEventListener('submit', onCreate);

function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { name, price, factor, img } = Object.fromEntries(formData);

    if (!name || !price || !factor || !img) {
        return alert('All fields are required!');
    }

    post('/data/furniture', { name, price, factor, img })
        .then(data => {
            if (data) {
                const addedProduct = [data];
                renderProducts(addedProduct, tableBody);
                formElement.reset();
            }
        })
        .catch(error => {
            alert(error.message);
            formElement.reset();
        });
}

function onBuy(e) {
    e.preventDefault();

    const tableRowCheckbox = e.currentTarget.parentNode.querySelectorAll('input[type="checkbox"]');
    let filteredBox = Array.from(tableRowCheckbox).filter(box => box.checked);

    filteredBox.forEach(box => {
        const tableRow = box.parentNode.parentNode;

        const img = tableRow.querySelector('td:nth-of-type(1)>img').src;
        const name = tableRow.querySelector('td:nth-of-type(2)>p').textContent;
        const price = tableRow.querySelector('td:nth-of-type(3)>p').textContent;
        const factor = tableRow.querySelector('td:nth-of-type(4)>p').textContent;

        post('/data/orders', { img, name, price, factor });
    });
}

function onAllOrders(e) {
    const userId = getStorage('userData')._id;

    get(`/data/orders?${userId}`)
        .then(data => {
            const ownerProducts = data.filter(product => product._ownerId === userId);
            const products = ownerProducts.map(p => p.name);
            const totalPrice = ownerProducts.map(p => p.price).reduce((a, b) => (Number(a) + Number(b)));
            showAllOrders(products, totalPrice);
        })
}

function showAllOrders(products, price) {
    const orders = document.querySelector('.orders');
    orders.innerHTML = ''

    const boughtFurniParagraph = document.createElement('p');
    boughtFurniParagraph.textContent = 'Bought furniture: ';

    const productNames = document.createElement('span');
    productNames.textContent = products.join(', ');

    const totalPriceParagraph = document.createElement('p');
    totalPriceParagraph.textContent = 'Total price: ';

    const totalPrice = document.createElement('span');
    totalPrice.textContent = price;

    const allOrdersButton = document.createElement('button');
    allOrdersButton.textContent = 'All orders';
    allOrdersButton.addEventListener('click', onAllOrders);

    boughtFurniParagraph.appendChild(productNames);
    totalPriceParagraph.appendChild(totalPrice);

    orders.appendChild(boughtFurniParagraph);
    orders.appendChild(totalPriceParagraph);
    orders.appendChild(allOrdersButton);
}

function onLogout(e) {
    get('/users/logout')
    localStorage.clear();
    window.location = 'home.html'
}