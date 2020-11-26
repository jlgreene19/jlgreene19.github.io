const apiURLss = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=014fa4af92532fb406ce8595701f9194';

fetch(apiURLss)
  .then((response) => response.json())
  .then((jsObject) => {

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    
    let day = 0;
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    forecast.forEach(x => {
        const d = new Date(x.dt_txt);
        let icon = document.getElementById(`icon${day+1}`);

        document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0) + "\xB0" + "F";
        
        icon.setAttribute('src', 'http://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png');
        icon.setAttribute('alt', forecast[day].weather[0].description);

        day++
        
    })
  });