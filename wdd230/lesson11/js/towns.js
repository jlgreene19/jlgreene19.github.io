const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){

        let card = document.createElement('section');
        let info = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name
        motto.textContent = ' ' + towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
        averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

        info.appendChild(h2);
        info.appendChild(motto);
        info.appendChild(yearFounded);
        info.appendChild(currentPopulation);
        info.appendChild(averageRainfall);

        card.appendChild(info);
        /* card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);
        card.appendChild(image); */
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name + ' with photo');
    }}
  });