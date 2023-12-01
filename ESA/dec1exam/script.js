let getItemTemplate = (name, type) => {
	let tag = type == "fruit" ? "fruits-item" : "legumes-item";
	let pre = type == "fruit" ? "Fruits" : "Legumes";

	return `				
  			<li class="list-group-item px-3 border-0 rounded-3 mb-2 ${tag}">
					${pre}! - ${name} 
				</li>`;
};

let itemAddType = "fruit";

const toggleAddItemType = (value) => {
	itemAddType = value;
};

let addGeneralBtn = document.getElementById("addGeneralBtn");
let combinedList = document.getElementById("combinedList");
let addSpecificBtn = document.getElementById("addSpecificBtn");

//Add event Listener on General Button
addGeneralBtn.addEventListener("click", () => {
	let name = document.getElementById("inputBar").value;
	if (!name) {
		alert("Please Enter a name");
		return;
	}
	combinedList.innerHTML += getItemTemplate(name, itemAddType);
});

//Add event Listener on Specific Button
addSpecificBtn.addEventListener("click", () => {
	let name = document.getElementById("inputBar").value;
	if (!name) {
		alert("Please Enter a name");
		return;
	}
	document.getElementById(`${itemAddType}sList`).innerHTML += getItemTemplate(
		name,
		itemAddType
	);
});

//highlight selected
const listEntries = document.querySelectorAll("li");
listEntries.forEach((item) => {
	item.addEventListener("click", () => {
		item.style.backgroundColor = "#dc3545";
	});
});
