let grades = [];

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
	grades.push(grade);
});

//event listener for the submit button
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
	const average = grades.reduce((acc, val) => acc + val, 0) / grades.length;
	if (isNaN(average)) {
		alert("You need to enter some grades first");
	}
});

//good to haves
//event listener for the delete button on each row
