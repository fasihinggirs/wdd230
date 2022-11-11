const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".listcontainer");

button.addEventListener("click", () => {
	const myChap = input.value;
	input.value = "";

	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listButton = document.createElement("button");

	listItem.appendChild(listText);
	listText.textContent = myChap;
	listItem.appendChild(listButton);
	listButton.textContent = "X";
	list.appendChild(listItem);

	listButton.addEventListener("click", () => {
		list.removeChild(listItem);
	});

	input.focus();
});