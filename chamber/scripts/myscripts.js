var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var dayOfWeek = today.getDay();
var objToday = new Date(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = mm + "/" + dd + "/" + yyyy + " " + curHour + ":" + curMinute + ":" + curSeconds + curMeridiem;

document.getElementById("currentdate").textContent = today;
document.getElementById("date1").textContent = today;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


if (dayOfWeek == "1") {
	greet = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} else if (dayOfWeek == "2") {
	greet = "🤝🏼 Come join us for the chamber meet and greet tomorrow at 7:00 p.m.";
} else {
	greet = ""
	document.getElementById("pmeetandgreet").style.fontSize = 0;
};

document.getElementById("meetandgreet").innerHTML = greet;