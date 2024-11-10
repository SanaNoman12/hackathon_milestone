// Get form elements
var nameField = document.getElementById("nameField");
var emailField = document.getElementById("emailField");
var phoneField = document.getElementById("contactField");
var professionField = document.getElementById("professionField");
var addressField = document.getElementById("addressField");
var liveField = document.getElementById("currently_live");
var dobField = document.getElementById("dateField");
var aboutField = document.getElementById("aboutField");
var skillsField = document.getElementById("skills");
var degreeField = document.getElementById("degree");
var institutionField = document.getElementById("institution");
var degreeStartField = document.getElementById("graduation-date-start");
var degreeEndField = document.getElementById("graduation-date-end");
var jobTitleField = document.getElementById("job-title");
var companyField = document.getElementById("company");
var jobDescriptionField = document.getElementById("job-description");
var startDateField = document.getElementById("start-date");
var endDateField = document.getElementById("end-date");
var generateButton = document.querySelector("button");
// Output elements for the template
var nameT = document.getElementById("nameT");
var professionT = document.getElementById("professionT");
var DOBT = document.getElementById("DOBT");
var addressT = document.getElementById("addressT");
var currentlyT = document.getElementById("currentlyT");
var aboutT = document.getElementById("aboutT");
var contactT = document.getElementById("contactT");
var displayDegree = document.getElementById("display-degree");
var displayInstitution = document.getElementById("display-institution");
var displayGraduationStart = document.getElementById("display-graduation-start");
var displayGraduationEnd = document.getElementById("display-graduation-end");
var displayJobTitle = document.getElementById("display-job-title");
var displayCompany = document.getElementById("display-company");
var displayDescription = document.getElementById("display-discription");
var displayStartDate = document.getElementById("display-start-date");
var displayEndDate = document.getElementById("display-end-date");
var skillT = document.getElementById("skillT");
generateButton.addEventListener("click", function () {
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
    var skills = skillsField.value.split(",").map(function (skill) { return skill.trim(); });
    skillT.innerHTML = skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join("");
});
