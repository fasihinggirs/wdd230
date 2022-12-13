jQuery(document).ready(function(){
    //   insert back to top button dynamicly
     $( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
      var $window = $(window);
      var distance = 400;
        // scroll
      $window.scroll(function() {
        // header
        if($window.scrollTop() >= distance) {
          $(".backToTop").fadeIn();
        }else{
          $(".backToTop").fadeOut();
        }
      });
      
      $('.backToTop').click(function() {
        $('html, body').animate({
                scrollTop: 0
            }, 1000);
     });
    })

    // -----Store the resource, the URL of the JSON file into a const variable--------

const requestURL = "scripts/JSON/data.json";
// const companies = document.querySelector('.companies');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // ----Store the results of the converted response into an array-----
  const companies = jsonObject['companies'];
    // console.log(jsonObject);  // temporary checking for valid response and data parsing
    companies.forEach(displayCompanies);
});

//   Build the HTML of the prophet card using the createElement() and appendChild() methods on the document
  function displayCompanies(company) {
    // Create elements to add to the document
    let brand = document.createElement('section');
    let logo = document.createElement('img');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let url = document.createElement('p');
    let a = document.createElement('a')
    let phone = document.createElement('p');
    let level = document.createElement('p');
    name.textContent = company.name;
    address.textContent = company.address;
    a.textContent = company.website;
    phone.textContent = company.phone;
    level.textContent = company.level;

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. 
    logo.setAttribute('src', company.icon);
    logo.setAttribute('alt', 'Logo image');
    logo.setAttribute('loading', 'lazy');
    name.setAttribute('class', 'name');
    a.setAttribute('href', '#');
    // Add/append the section(card) with the h2 element
    url.appendChild(a)
    brand.appendChild(logo);
    brand.appendChild(name);
    brand.appendChild(address);
    brand.appendChild(phone);
    brand.appendChild(url);
    brand.appendChild(level);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#companies').appendChild(brand);
  }

  // TOGGLE DIRECTORY VIEW
  // Add active class to the current button (highlight it)
  const display = document.querySelector("#companies");

  function listView(){
    display.classList.add("dirlist");
    display.classList.remove("dirgrid");
    document.getElementById("listbtn").classList.add("active");
    document.getElementById("gridbtn").classList.remove("active");
  }

  function gridView(){
    display.classList.add("dirgrid");
    display.classList.remove("dirlist");
    document.getElementById("listbtn").classList.remove("active");
    document.getElementById("gridbtn").classList.add("active")
  }
  // DISCOVER, LAST VISIT
let lastVisit = Number(window.localStorage.getItem("lastVisitDate"));
if (lastVisit !== 0) {
  let date_1 = lastVisit;
  let date_2 = Date.now();
  let difference = date_2 - date_1;
  let result = Math.floor(difference / (1000 * 3600 * 24));
  if (result === 0) {
    document.querySelector("#lastVisit").textContent =
      "You have visited this page less than one day ago.";
  } else if (result === 1) {
    document.querySelector("#lastVisit").textContent =
      "You have visited this page one day ago.";
  } else {
    document.querySelector(
      "#lastVisit"
    ).textContent = `You have visited this page ${result} days ago.`;
  }
} else {
  result = "This is your first visit.";
  document.querySelector("#lastVisit").textContent = result;
}
localStorage.setItem("lastVisitDate", Date.now());
const imagesToLoad = document.querySelectorAll("img[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
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
  
  function getInfo(){
    let fname = document.getElementById("fname").value;
    if(fname===""){
        fname="N/A"
    }
   localStorage.setItem("fname", fname);
    let lname = document.getElementById("lname").value;
    localStorage.setItem("lname", lname);
    let title = document.getElementById("title").value;
    if(title===""){
        title="N/A"
    }
   localStorage.setItem("title", title);
   let email = document.getElementById("email").value;
   localStorage.setItem("email", email);
   let phone = document.getElementById("phone").value;
   if(phone===""){
    phone="N/N"
   }
   localStorage.setItem("phone", phone);
   let bname = document.getElementById("bname").value;
   localStorage.setItem("bname", bname);
   let description = document.getElementById("description1").value;
   if(description===""){
    description="N/A"
   }
   localStorage.setItem("description", description);

//    -------CHECK RADIO BUTTON MEMBERSHIP--------
   if(document.getElementById('np').checked) {   
    localStorage.setItem("membership", document.getElementById("np").value);   
}   
else if(document.getElementById('bronze').checked) {   
    localStorage.setItem("membership", document.getElementById("bronze").value);     
}   
else if(document.getElementById('silver').checked) {   
    localStorage.setItem("membership", document.getElementById("silver").value);     
}   
else if(document.getElementById('gold').checked) {   
    localStorage.setItem("membership", document.getElementById("gold").value);       
}  
else {   
    localStorage.setItem("membership", "not selected")   
}   
   }
   
   document.getElementById("joinFname").innerHTML = (window.localStorage.getItem("fname"));
   document.getElementById("joinLname").innerHTML = (window.localStorage.getItem("lname"));
   document.getElementById("joinTitle").innerHTML = (window.localStorage.getItem("title"));
   document.getElementById("joinEmail").innerHTML = (window.localStorage.getItem("email"));
   document.getElementById("joinPhone").innerHTML = (window.localStorage.getItem("phone"));
   document.getElementById("joinBname").innerHTML = (window.localStorage.getItem("bname"));
   document.getElementById("joinMlevel").innerHTML = (window.localStorage.getItem("membership"));
   document.getElementById("joinDescription").innerHTML = (window.localStorage.getItem("description"));
   
   document.getElementById("joinTime").innerHTML = new Date().toDateString() + ", " + new Date().getHours() + ":" + 
   new Date().getMinutes();
   let temperature = document.querySelector('#weatherTemp');
let image = document.querySelector('.temp img');
let speed = document.querySelector('#windspeed');
let windchill = document.querySelector('.windchill');
let description = document.querySelector('#cloudy');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Veliky Novgorod&units=imperial&appid=6eb57b92da1a81ed613b13a33028117d';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function displayResults(weatherData) {
// TEMPERATURE
  temperature.innerHTML = `${((weatherData.main.temp-32)*5/9).toFixed(0)} &degC`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//   DESCRIPTION AND IMAGE
    const desc = weatherData.weather[0].description;
//   CAPITALIZE FIRST LETTERS OF EACH WORD
const words = desc.split(" ");
let result = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");

  image.setAttribute('src', iconsrc);
  image.setAttribute('alt', result);
description.innerHTML = result;

// WIND SPEED
speed.innerHTML = `${(weatherData.wind.speed*1.60934).toFixed(0)} km/h`;

// WIND CHILL
let t = weatherData.main.temp;
let s = weatherData.wind.speed
let windchill_fahr = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
let windchill_cels = (windchill_fahr - 32)*5/9;
if (t<=50 && s>3){
    windchill.innerHTML = `${windchill_cels.toFixed(0)} &degC`;
} 
    else{
        windchill.innerHTML = ' N/A';
    }

  }

  //  const s = document.querySelector('.windspeed').value/1.609;
// // let windchill_fahr = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
// // let windchill_cels = (windchill_fahr - 32)*5/9;
// // if (t<=50 && s>3){
// //     document.querySelector('.windchill').innerHTML = 'N/A';
// // } 
// //     else{
// //         document.querySelector('.windchill').innerHTML = windchill_cels;
// //     }

// console.log(temperature);
// console.log(s);
function calcchill(){
    let t = document.getElementById("theInputTemp").value*1.8+32;
    let s = document.getElementById("windspeed").value/1.609;
    
    console.log(t);
    
    let windchill_fahr = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
    let windchill_cels = (windchill_fahr - 32)*5/9;
    if (t<=50 && s>3){
        document.querySelector('.windchill').innerHTML = Math.round(windchill_cels) + ' ℃';
    } 
        else{
            document.querySelector('.windchill').innerHTML = ' N/A';
        }
    }



  
  
  
  
  
  
  
  
  
  
  
  
  
  
