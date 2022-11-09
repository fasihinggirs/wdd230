const day = new Date();

const lastVisit = localStorage.getItem('date');
localStorage.setItem('date', day);

const lastDay = Date.parse(lastVisit);
let days = (day - lastDay)/86400000;

if (!days) {
    document.querySelector("#last-visit-message").textContent = "This your first visit! Welcome to the page.";
}
else {
    document.querySelector("#last-visit").textContent = days.toFixed(0);
}