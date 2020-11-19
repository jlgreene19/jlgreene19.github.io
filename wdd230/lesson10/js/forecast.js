const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=014fa4af92532fb406ce8595701f9194';

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    
  });