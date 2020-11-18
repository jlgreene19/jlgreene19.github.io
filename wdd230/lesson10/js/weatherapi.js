const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=014fa4af92532fb406ce8595701f9194';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });