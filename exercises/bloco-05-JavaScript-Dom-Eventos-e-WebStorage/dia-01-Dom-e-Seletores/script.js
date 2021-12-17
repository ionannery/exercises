const header = document.getElementById("header-container");
header.style.background = "green";

const section1 = document.getElementsByClassName("emergency-tasks")[0];
section1.style.background = "orange";

const emergencyTasks = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasks.length; index++) {
    emergencyTasks[index].style.backgroundColor = "purple";
}

const section2 = document.querySelector('.no-emergency-tasks');
section2.style.backgroundColor = "red";

const noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTasks.length; index++) {
    noEmergencyTasks[index].style.backgroundColor = "yellow";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "#123"
