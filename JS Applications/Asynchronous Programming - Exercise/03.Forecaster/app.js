function attachEvents() {
    const inputLocationElement = document.getElementById('location');
    const submitButtonElement = document.getElementById('submit');
    const currentConditionsElement = document.getElementById('current');
    const upcomingConditionsElement = document.getElementById('upcoming');
    const forecastSection = document.getElementById('forecast');

    submitButtonElement.addEventListener('click', onSubmitButtonClick);

    const weatherSymbols = {
        Sunny: '&#x2600',
        'Partly sunny': '&#x26C5',
        Overcast: '&#x2601',
        Rain: '&#x2614',
        degree: '&#176',
    };

    function onSubmitButtonClick(e) {
        const locationName = inputLocationElement.value.trim();

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Error');
                }
                
                return response.json();
            })
            .then(data => {
                const submitedTownName = data.find(x => x.name.toLowerCase() === locationName.toLowerCase());

                if (!submitedTownName) {
                    throw new Error('Error');
                }

                forecastSection.style.display = 'block';
                const codeValue = submitedTownName.code;

                return codeValue;
            })
            .then(codeValue => {
                return Promise.all([
                    fetch(`http://localhost:3030/jsonstore/forecaster/today/${codeValue}`)
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error('Error');
                            }

                            return response.json();
                        }),
                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${codeValue}`)
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error('Error');
                            }

                            return response.json();
                        })
                ]);
            })
            .then(([todayData, upcomingData]) => {
                displayCurrentWeather(todayData);
                displayUpcomingWeather(upcomingData);
            })
            .catch(error => {
                forecastSection.style.display = 'block';
                forecastSection.textContent = 'Error';
            });
    }

    function displayCurrentWeather(data) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('forecasts');

        const conditionSymbolElement = document.createElement('span');
        conditionSymbolElement.className = 'condition symbol';
        conditionSymbolElement.innerHTML = weatherSymbols[data.forecast.condition];

        const conditionElement = document.createElement('span');
        conditionElement.classList.add('condition');

        const townNameElement = document.createElement('span');
        townNameElement.classList.add('forecast-data');
        townNameElement.textContent = data.name;

        const degreesElement = document.createElement('span');
        degreesElement.classList.add('forecast-data');
        degreesElement.innerHTML = `${data.forecast.low}${weatherSymbols.degree}/${data.forecast.high}${weatherSymbols.degree}`;

        const conditionDescElement = document.createElement('span');
        conditionDescElement.classList.add('forecast-data');
        conditionDescElement.textContent = data.forecast.condition;

        conditionElement.appendChild(townNameElement);
        conditionElement.appendChild(degreesElement);
        conditionElement.appendChild(conditionDescElement);

        divContainer.appendChild(conditionSymbolElement);
        divContainer.appendChild(conditionElement);

        currentConditionsElement.innerHTML = '<div class="label">Current conditions</div>';
        currentConditionsElement.appendChild(divContainer);
    }

    function displayUpcomingWeather(data) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('forecast-info');

        data.forecast.forEach(curDay => {
            const conditionSymbolElement = document.createElement('span');
            conditionSymbolElement.classList.add('symbol');
            conditionSymbolElement.innerHTML = weatherSymbols[curDay.condition];

            const degreesElement = document.createElement('span');
            degreesElement.classList.add('forecast-data');
            degreesElement.innerHTML = `${curDay.low}${weatherSymbols.degree}/${curDay.high}${weatherSymbols.degree}`;

            const conditionElement = document.createElement('span');
            conditionElement.classList.add('forecast-data');
            conditionElement.textContent = curDay.condition;

            const spanElement = document.createElement('span');
            spanElement.classList.add('upcoming');
            spanElement.appendChild(conditionSymbolElement);
            spanElement.appendChild(degreesElement);
            spanElement.appendChild(conditionElement);

            divContainer.appendChild(spanElement);
        });

        upcomingConditionsElement.innerHTML = '<div class="label">Three-day forecast</div>';
        upcomingConditionsElement.appendChild(divContainer);
    }
}

attachEvents();