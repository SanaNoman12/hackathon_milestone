// Get form elements
const nameField = document.getElementById("nameField") as HTMLInputElement;
const emailField = document.getElementById("emailField") as HTMLInputElement;
const phoneField = document.getElementById("contactField") as HTMLInputElement;
const professionField = document.getElementById("professionField") as HTMLInputElement;
const addressField = document.getElementById("addressField") as HTMLTextAreaElement;
const liveField = document.getElementById("currently_live") as HTMLInputElement;
const dobField = document.getElementById("dateField") as HTMLInputElement;
const aboutField = document.getElementById("aboutField") as HTMLTextAreaElement;
const skillsField = document.getElementById("skills") as HTMLTextAreaElement;

const degreeField = document.getElementById("degree") as HTMLInputElement;
const institutionField = document.getElementById("institution") as HTMLInputElement;
const degreeStartField = document.getElementById("graduation-date-start") as HTMLInputElement;
const degreeEndField = document.getElementById("graduation-date-end") as HTMLInputElement;

const jobTitleField = document.getElementById("job-title") as HTMLInputElement;
const companyField = document.getElementById("company") as HTMLInputElement;
const jobDescriptionField = document.getElementById("job-description") as HTMLInputElement;
const startDateField = document.getElementById("start-date") as HTMLInputElement;
const endDateField = document.getElementById("end-date") as HTMLInputElement;

const generateButton = document.querySelector("button") as HTMLButtonElement;

// Output elements for the template
const nameT = document.getElementById("nameT")!;
const professionT = document.getElementById("professionT")!;
const DOBT = document.getElementById("DOBT")!;
const addressT = document.getElementById("addressT")!;
const currentlyT = document.getElementById("currentlyT")!;
const aboutT = document.getElementById("aboutT")!;
const contactT = document.getElementById("contactT")!;
const displayDegree = document.getElementById("display-degree")!;
const displayInstitution = document.getElementById("display-institution")!;
const displayGraduationStart = document.getElementById("display-graduation-start")!;
const displayGraduationEnd = document.getElementById("display-graduation-end")!;
const displayJobTitle = document.getElementById("display-job-title")!;
const displayCompany = document.getElementById("display-company")!;
const displayDescription = document.getElementById("display-discription")!;
const displayStartDate = document.getElementById("display-start-date")!;
const displayEndDate = document.getElementById("display-end-date")!;
const skillT = document.getElementById("skillT")!;

generateButton.addEventListener("click", () => {
  // Personal Information
  nameT.textContent = nameField.value;
  professionT.textContent = professionField.value;
  DOBT.textContent = dobField.value;
  addressT.textContent = addressField.value;
  currentlyT.textContent = liveField.value;
  contactT.textContent = phoneField.value;
  aboutT.textContent = aboutField.value;

  // Education
  displayDegree.textContent = degreeField.value;
  displayInstitution.textContent = institutionField.value;
  displayGraduationStart.textContent = degreeStartField.value;
  displayGraduationEnd.textContent = degreeEndField.value;

  // Work Experience
  displayJobTitle.textContent = jobTitleField.value;
  displayCompany.textContent = companyField.value;
  displayDescription.textContent = jobDescriptionField.value;
  displayStartDate.textContent = startDateField.value;
  displayEndDate.textContent = endDateField.value;

  // Skills
  const skills = skillsField.value.split(",").map(skill => skill.trim());
  skillT.innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");
});
