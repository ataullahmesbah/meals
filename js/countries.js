const loadCountries = () =>{
    const URL = 'https://restcountries.com/v3.1/all';
    fetch(URL)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('all-countries');

    // for(const country of countries){
    //     console.log(country); 
    // }

    countries.forEach(country =>{
        console.log(country.cca2);

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
             <h3>Name: ${country.name.common} </h3>
             <h3 class="capital">Capital: ${country.capital ? country.capital[0] : 'No Capital'} </h3>
             <button class="btn-details" onclick="displayCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })

}
const displayCountryDetails = code=>{
    const URL = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(URL)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}

const showCountryDetails = country =>{
    
    const detailsContainer = document.getElementById('country-details');
     detailsContainer.innerHTML = `
     <h2>country Details</h2>
     <h3>Name: ${country.name.common} </h3>
     <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
     <img src="${country.flags.png}" alt="">
     `
}

loadCountries();