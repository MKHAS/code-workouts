let getItemTemplate = (name, type) => {
	let tag = type == "fruit" ? "fruits-item" : "legumes-item";
	let pre = type == "fruit" ? "Fruits" : "Legumes";

	return `				
  			<li class="list-group-item p-3 bg-primary border-0 rounded-3 m-2 ${tag}">
					${pre}! - ${name} 
				</li>`;
};

document.querySelector("li").forEach((element) => {
	element.addEventListener("transitionend", () => {
		element.remove();
	});
});

//this toggles whether the item added is a fruit or legume when the appropriate radio is clicked
let itemAddType = "fruit";

const toggleAddItemType = (value) => {
	itemAddType = value;
};

//
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
	combinedList.lastChild.addEventListener("click", () => {
		item.classList.contains("li-selected")
			? item.classList.remove("li-selected")
			: item.classList.add("li-selected");
	});
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
		item.classList.contains("li-selected")
			? item.classList.remove("li-selected")
			: item.classList.add("li-selected");
	});
});

//search for an item
const searchItem = () => {
	const queryString = document.getElementById("searchBar").value.toLowerCase();
	if (!queryString) {
		alert("Please enter a value");
		return;
	}
	document.querySelectorAll("li").forEach((item) => {
		if (item.innerHTML.toLowerCase().includes(queryString)) {
			item.classList.add("li-selected");
		}
	});
};

//delete items
const deleteItems = () => {
	searchItem();
	document.querySelectorAll("li.li-selected").forEach((item) => {
		item.classList.add("removed");
	});
};
