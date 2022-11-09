const tempC = 10   ;
const speedkh = 5;

document.querySelector('.degrees').textContent = tempC;
document.querySelector('.speed').textContent = speedkh;

const tempF = tempC * (9/5) + 32;
const speedmH = speedkh / 1.609;

console.log(tempF);
console.log(speedmH);


if (tempF <= 50 && speedmH > 3) {
    const f = 35.74 + 0.6215 * tempF - 35.75 * (speedmH ** 0.16) + 0.4275 * tempF * (speedmH ** 0.16)
    document.querySelector('.wind').textContent = f.toFixed(1);
    }
else {
  document.querySelector('.wind').textContent = 'N/A';
}