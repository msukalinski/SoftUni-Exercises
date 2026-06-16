function getInfo() {
    const submitBtnElement = document.getElementById('submit');
    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    const url = 'http://localhost:3030/jsonstore/bus/businfo';

    busesElement.innerHTML = '';

    fetch(`${url}/${stopIdElement.value}`)
        .then(response => response.json())
        .then(data => {
            stopNameElement.textContent = data.name;

            Object.keys(data.buses).forEach(busId => {
                const newLiElement = document.createElement('li');
                newLiElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                busesElement.appendChild(newLiElement);
            });
        })
        .catch(err => {
            stopNameElement.textContent = 'Error';
        });
}