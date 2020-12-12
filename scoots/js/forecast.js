const apiURL4 = 'http://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=minutely,hourly&units=imperial&APPID=014fa4af92532fb406ce8595701f9194';

fetch(apiURL4)
  .then((response) => response.json())
  .then((jsObject) => {

    const forecast = jsObject.list(x => x.dt_txt);
    /* example of viewing filtered results in the console:
    console.log(forecast); */
    
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