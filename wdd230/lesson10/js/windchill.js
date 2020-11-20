function output() {
    let temp = parseFloat(document.getElementById("temp").textContent);
    let wSpeed = parseFloat(document.getElementById("wSpeed").textContent);
  
    windChill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(wSpeed, 0.16)) + (0.4275 * temp * Math.pow(wSpeed, 0.16)));
  
    if (windChill <= 50 && wSpeed > 3) {
      document.getElementById("windChill").textContent = windChill.toFixed(0) + "\xB0F";
    } else {
      document.getElementById("windChill").textContent = "NA";
    }
  }
  
  output();