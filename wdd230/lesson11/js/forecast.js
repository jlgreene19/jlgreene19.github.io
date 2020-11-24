var apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=014fa4af92532fb406ce8595701f9194';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    
    let day = 0;
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    forecast.forEach(x => {
        const d = new Date(x.dt_txt);
        let icon = document.getElementById(`icon${day+1}`);

        document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp + "\xB0" + "F";
        
        icon.setAttribute('src', 'http://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png');
        icon.setAttribute('alt', forecast[day].weather[0].description);

        day++
        
    })
  });