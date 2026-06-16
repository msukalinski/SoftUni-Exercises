import { getStorage } from "./api";

function renderProducts(data, parentElement) {
    data.forEach(curProduct => {
        const tableRow = createTableRow(
            curProduct.name,
            curProduct.price,
            curProduct.factor,
            curProduct.img
        );

        tableRow.setAttribute('data-id', curProduct._ownerId);

        parentElement.appendChild(tableRow);
    });
}

function createTableRow(name, price, factor, img) {
    const tableRow = document.createElement('tr');

    const image = document.createElement('img');
    image.src = img;
    const imageElement = createTableData(image);

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = name;
    const nameElement = createTableData(nameParagraph);

    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = price;
    const priceElement = createTableData(priceParagraph);

    const factorParagraph = document.createElement('p');
    factorParagraph.textContent = factor;
    const factorElement = createTableData(factorParagraph);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    if (!getStorage('userData')) {
        checkBox.setAttribute('disabled', 'disabled');
    }
    const checkBoxElement = createTableData(checkBox);

    const elements = [
        imageElement,
        nameElement,
        priceElement,
        factorElement,
        checkBoxElement
    ];

    elements.forEach(e => tableRow.appendChild(e));

    return tableRow;
}

function createTableData(child) {
    const tableData = document.createElement('td');
    tableData.appendChild(child);

    return tableData;
}

export { renderProducts };