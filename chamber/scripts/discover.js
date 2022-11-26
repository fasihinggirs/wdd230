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