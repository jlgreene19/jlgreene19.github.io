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