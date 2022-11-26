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
