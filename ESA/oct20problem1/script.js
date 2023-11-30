let grades = [];
const today = new Date().toLocaleDateString("en-GB", {
	day: "numeric",
	month: "long",
	year: "numeric",
});

let dateDisplay = document.getElementById("todaysDate");

dateDisplay.innerHTML = today;

//generate row template
const tableRowTemplate = (subject, grade) => {
	if (!(subject && grade)) {
		alert("Please Enter some Values");
		return;
	}
	return `
    <tr>
      <td>${subject}</td>
      <td>${grade}</td>
      <td><button class="btn-info">Edit
        </button></td>
      <td>
        <button class="btn-close">
        </button>
      </td>
    </tr>
  `;
};

const gradeTable = document.getElementById("gradeTableBody");

const addBtn = document.getElementById("subjectAddButton");
addBtn.addEventListener("click", () => {
	const subject = document.getElementById("subjectName").value;
	const grade = document.getElementById("subjectGrade").value;
	gradeTable.innerHTML += tableRowTemplate(subject, grade);
	grades.push(Number.parseInt(grade));
});

//event listener for the submit button

const studentCardGenerator = (total, fullName) => {
	let alertMode;
	let alertMessage;
	const avg = total / grades.length;
	if (grades.length < 3) {
		alert("Please enter at least 3 subjects");
		return;
	}
	if (!fullName) {
		alert("please enter the student's name");
		return;
	}
	if (avg > 80) {
		alertMode = "success";
		alertMessage = "Congratulations, you've achieved an excellent score";
	} else if (avg > 60) {
		alertMode = "primary";
		alertMessage = "Congratulations, you've succeeded";
	} else if (avg > 50) {
		alertMode = "warning";
		alertMessage = "Congratulations, you passed but you have to work better";
	} else {
		alertMode = "danger";
		alertMessage = "Unfortunately you've failed";
	}
	let cardContent = `<div class="form-group col-md-4">
  <div class="alert alert-${alertMode}" id="studentCard" role="alert">
    <span style="color: "red"">Full Name:</span> <span style="color: "green"">${fullName}</span>
    <span style="color: "gold">|</span> <span style="color: "red"">Total: </span> <span style="color: "green">${total}</span>
    <span style="color: "gold"">|</span> <span style="color: "red"">Average: </span><span style="color: "green"">${avg}</span>
    <br>
    ${alertMessage}
  </div>
  `;
	const card = document.getElementById("studentCard");
	card.innerHTML = cardContent;
};

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
	const total = grades.reduce((acc, val) => acc + val, 0);
	const name = document.getElementById("studentNameInput").value;
	studentCardGenerator(total, name);
});

//good to haves
//event listener for the delete button on each row
