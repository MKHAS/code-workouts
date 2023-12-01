let getItemTemplate = (name, type) => {
	let tag = type == "fruit" ? "fruits-item" : "legumes-item";
	let pre = type == "fruit" ? "Fruits" : "Legumes";

	return `				
  			<li class="list-group-item bg-primary px-3 border-0 rounded-3 mb-2 ${tag}">
					${pre}! - ${name} 
				</li>`;
};

let itemAddType = "fruit";

const toggleAddItemType = (value) => {
	itemAddType = value;
};

let addGeneralBtn = document.getElementById("addGeneralBtn");
let combinedList = document.getElementById("combinedList");

//Add event Listener on General Button
addGeneralBtn.addEventListener("click", () => {
	let name = document.getElementById("inputBar").value;
	combinedList.innerHTML += getItemTemplate(name, itemAddType);
});
