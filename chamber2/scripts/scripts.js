function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    document.querySelector("#hamburgerBtn").classList.remove("open");
    document.querySelector("#primaryNav").classList.remove("open");
  })
);

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

const d = new Date();
const year = d.getFullYear();
// console.log(year);
document.getElementById("year").innerHTML = year;

let lastmodif = new Date(document.lastModified);
const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  time: "numeric",
};

document.getElementById("lastupdate").innerHTML = lastmodif.toLocaleDateString(
  "en-US",
  options
);
document.getElementById("time").innerHTML =
  lastmodif.toLocaleTimeString("en-US");

document.getElementById("lastupdate1").innerHTML = lastmodif.toLocaleDateString(
  "en-US",
  options
);
document.getElementById("time1").innerHTML =
  lastmodif.toLocaleTimeString("en-US");

document.getElementById("lastupdate2").innerHTML = lastmodif.toLocaleDateString(
  "en-US",
  options
);
document.getElementById("time2").innerHTML =
  lastmodif.toLocaleTimeString("en-US");

// Day today with week day name

const date1 = document.querySelector("#today");
try {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  date1.innerHTML = `<span class="highlight">${new Date().toLocaleDateString(
    "en-UK",
    options
  )}</span>`;
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}

// TEMPORAL BANNER
if (new Date().getDay() == 1 || new Date().getDay() == 2) {
  document.querySelector("#bannertemp").style.display = "block";} 


// -----JOIN PAGE HIDDEN INPUT-----

let joinDate;
function getDate(){
document.getElementById("date").value = new Date();
}














