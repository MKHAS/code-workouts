const listItemGenerator = (str) => {
	return `
				<li class="list-group-item">
					<div class="input-group">
						<input
							type="text"
							placeholder="text goes here"
							class="form-control textfield"   
              value = "${str}"           
							disabled />
						<button
							type="button"
							class="btn btn-info">
							Edit
						</button>
						<button
							type="button"
							class="btn btn-danger">
							Delete
						</button>
					</div>
				</li>`;
};

const list = document.querySelector(".list-group");

const addBtn = document.querySelector("#add-note-btn");
addBtn.addEventListener("click", () => {
	const input = document.querySelector("#noteEditor").value;
	const tlist = document.getElementById("taskList");
	tlist.innerHTML += listItemGenerator(input);
});

list.addEventListener("click", function (e) {
	if (e.target.classList.contains("btn-info")) {
		e.target.parentElement
			.querySelector(".textfield")
			.toggleAttribute("disabled");
	} else if (e.target.classList.contains("btn-danger")) {
		e.target.parentElement.parentElement.remove();
	}
});
