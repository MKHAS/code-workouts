//generate an li node using the createElement interface
let generateListItem = (name, type) => {
	let pre = type == "fruit" ? "Fruits" : "Legumes";
	const newItem = document.createElement("li");
	const content = document.createTextNode(`${pre}! - ${name}`);
	newItem.appendChild(content);
	newItem.classList.add(
		"list-group-item",
		"p-3",
		"border-0",
		"rounded-3",
		"m-2"
	);
	newItem.addEventListener("transitionend", () => {
		newItem.remove();
	});
	return newItem;
};

//handle removal for existing list elements
//we create a transition where the opacity is reduced
//then we actually remove the element at the end of the transition
document.querySelectorAll("li").forEach((element) => {
	element.addEventListener("transitionend", () => {
		element.remove();
	});
});

//this toggles whether the item added is a fruit or legume when
// the appropriate radio is clicked
let itemAddType = "fruit";

const toggleAddItemType = (value) => {
	itemAddType = value;
};

//
let addGeneralBtn = document.getElementById("addGeneralBtn");
let combinedList = document.getElementById("combinedList");
let addSpecificBtn = document.getElementById("addSpecificBtn");

//Handle adding an element to General list
addGeneralBtn.addEventListener("click", () => {
	let name = document.getElementById("inputBar").value;
	if (!name) {
		alert("Please Enter a name");
		return;
	}

	combinedList.appendChild(generateListItem(name, itemAddType));
});

//handle adding an element to Specific lists
addSpecificBtn.addEventListener("click", () => {
	let name = document.getElementById("inputBar").value;
	if (!name) {
		alert("Please Enter a name");
		return;
	}
	//this is a bit of a hack, should be a switch statement outside the scope
	let specList = document.getElementById(`${itemAddType}sList`);

	specList.appendChild(generateListItem(name, itemAddType));
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
