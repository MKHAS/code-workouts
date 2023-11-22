let tableRows = [
	{ subject: "Math", grade: 90 },
	{ subject: "Physics", grade: 80 },
	{ subject: "Arabic", grade: 70 },
	{ subject: "French", grade: 60 },
];

//generate row template
const tableRowTemplate = (subject, grade) => {
	if (!(subject && grade)) {
		alert("enter some values");
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

const addBtn = document.getElementById("theBigFatButton");
addBtn.addEventListener("click", () => {
	const subject = document.getElementById("subjectName").value;
	const grade = document.getElementById("subjectGrade").value;
	alert(`Subject is ${subject} and Grade is ${grade}`);
});

//must haves
//event listener for the add button
// const addGrade = () => {
//   subject =
// 	document.getElementById("gradeTableBody").innerHTML += tableRowTemplate(
// 		subject,
// 		grade
// 	);
// };

//event listener for the submit button

//good to haves
//event listener for the delete button on each row
