const jsonFile = "/wdd230/chamber/json/data.json"
const directory = document.querySelector(".directory");

fetch(jsonFile)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject["business"]
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let address = document.createElement("p")
    let phone = document.createElement("p");
    let link = document.createElement("a");
    let img = document.createElement("img");
    let membershiplv = document.createElement("p");
    let info = document.createElement("p");

    name.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = business.phoneNumber;

    link.setAttribute("href", business.url);
    link.setAttribute("target", "__blank");
    link.textContent = "Website Link"
    
    img.setAttribute("src", business.img);
    img.setAttribute("alt", `Logo image of ${business.name}`);
    img.setAttribute("loading", "lazy");

    membershiplv.textContent = `Membership Level: ${business.membershipLevel}`




    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(link);
    card.appendChild(membershiplv);
    card.appendChild(info);



    document.querySelector("div.directory").appendChild(card)
}