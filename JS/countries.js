const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        //.then(data => console.log(data));
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    // for (country of countries) {
    //     const countryDiv = document.createElement('div');
    //     countryDiv.classList.add('country');
    //     countryDiv.innerHTML = `
    //         <h3>Name: ${country.name.common}</h3>
    //         <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
    //     `;
    //     countriesContainer.appendChild(countryDiv);
    // }

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;
        countriesContainer.appendChild(countryDiv);

    });
}
loadCountries();