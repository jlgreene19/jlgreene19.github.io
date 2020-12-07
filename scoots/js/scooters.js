const requestURL = 'data/scooters.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const scooters = jsonObject['scooters'];
    for (let i = 0; i < scooters.length; i++ ) {
      if (scooters[i].name == "Preston" || scooters[i].name == "Soda Springs" || scooters[i].name == "Fish Haven"){

        let card = document.createElement('section');
        let info = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = scooters[i].name
        motto.textContent = ' ' + scooters[i].motto;
        yearFounded.textContent = 'Year Founded: ' + scooters[i].yearFounded;
        currentPopulation.textContent = 'Population: ' + scooters[i].currentPopulation;
        averageRainfall.textContent = 'Annual Rain Fall: ' + scooters[i].averageRainfall;

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
        image.setAttribute('src', 'images/' + scooters[i].photo);
        image.setAttribute('alt', scooters[i].name + ' with photo');
    }}
  });