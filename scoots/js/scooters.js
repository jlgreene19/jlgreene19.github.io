const requestURLscoot = 'data/scooters.json';

fetch(requestURLscoot)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const scooters = jsonObject['scooters'];
    for (let i = 0; i < scooters.length; i++ ) {
      if (scooters[i].name == "~Honda Metro Scooter" || scooters[i].name == "~Honda Dio Scooter" || scooters[i].name == "~Honda PCX150 Scooter" || scooters[i].name == "Honda Pioneer ATV" || scooters[i].name == "Jeep Wrangler - 4 door with a/c" || scooters[i].name == "Jeep Wrangler - 2 door") {

        let card = document.createElement('section');
        let info = document.createElement('div');
        let h2 = document.createElement('h2');
        let e1 = document.createElement('p');
        let e2 = document.createElement('p');
        let e3 = document.createElement('p');
        let e4 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = scooters[i].name
        e1.textContent = scooters[i].events[0];
        e2.textContent = scooters[i].events[1];
        e3.textContent = scooters[i].events[2];
        e4.textContent = scooters[i].events[3];

        info.appendChild(h2);
        info.appendChild(e1);
        info.appendChild(e2);
        info.appendChild(e3);
        info.appendChild(e4);

        card.appendChild(info);
        /* card.appendChild(h2);
        card.appendChild(image); */
        card.appendChild(image);

        document.querySelector('div.scooters').appendChild(card);
        image.setAttribute('src', 'images/' + scooters[i].photo);
        image.setAttribute('alt', scooters[i].name + ' with photo');
    }}
  });