const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=014fa4af92532fb406ce8595701f9194';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wSpeed').textContent = jsObject.wind.speed;
  

  function output() {
    let temp = parseFloat(document.getElementById("temp").textContent);
    let wSpeed = parseFloat(document.getElementById("wSpeed").textContent);
    let output = windChill(temp, wSpeed);

    document.getElementById("windChill").textContent = output.toFixed(0);
}

function windChill(temp, wSpeed) {
    if (temp <= 50 && wSpeed > 3) {
        let te = temp;
        let ws = wSpeed;
        let windChill = 35.74 + (0.6215 * te) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * te * Math.pow(ws, 0.16));

        return windChill;
    }
    else {
        
        document.getElementById("windChill").textContent = "N/A";
    }
}
output()

});