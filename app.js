//Variables//
let contact = document.getElementById("contact");
let hobby = document.getElementById("hobbies");
let language = document.getElementById("talen");
let education = document.getElementById("onderwijs");
let qwerty = document.getElementById("qwerty");
let qwerty3 = document.getElementById("qwerty3");
let qwerty4 = document.getElementById("qwerty4");
let qwerty6 = document.getElementById("qwerty6");

//Arrays
let contactList = [
  "+31 649724206", 
  "h.yilmaz.cor@hotmail.com"
];

let hobbyList = [
  "Kickboksen",
  "Fitness",
  "Gaming",
  "Programeer talen leren",
  "Auto's spotten",
  "Verdiepen in PC hardware",
];
let talenList = [
  "Turks", 
  "Engels", 
  "Nederlands"
];

let educationList = [
  "Mavo Schravenlant. Economie en Onderemen, diploma behaald in 2023",
  "Mavo Schravenlant. Anglia certificate of English ESOL international, Advanced (CEFR B2) level behaald in 2023",
  "Techniek College Rotterdam. Software Developer Niveau 4, Heden",
];

//Functions
function showContact() {
  let cLen = contactList.length;
  let text = "<ul>";
  let email = "E-maiL:";
  let telefoon = "Telefoon:";
  for (let i = 0; i < cLen; i++) {
    text += "<li>" + contactList[i] + "</li>";
  }
  text += "</ul>";

  if (qwerty.innerHTML === text) {
    qwerty.innerHTML = "";
  } else {
    qwerty.innerHTML = text;
  }
}

function showHobbies() {
  let hLen = hobbyList.length;
  let text = "<ul>";
  for (let i = 0; i < hLen; i++) {
    text += "<li>" + hobbyList[i] + "</li>";
  }
  text += "</ul>";

  if (qwerty3.innerHTML === text) {
    qwerty3.innerHTML = "";
  } else {
    qwerty3.innerHTML = text;
  }
}

function showTalen() {
  let tLen = talenList.length;
  let text = "<ul>";
  for (let i = 0; i < tLen; i++) {
    text += "<li>" + talenList[i] + "</li>";
  }
  text += "</ul>";

  if (qwerty4.innerHTML === text) {
    qwerty4.innerHTML = "";
  } else {
    qwerty4.innerHTML = text;
  }
}

function showEd() {
  let edLen = educationList.length;
  let text = "<ul>";
  for (let i = 0; i < edLen; i++) {
    text += "<li>" + educationList[i] + "</li>";
  }
  text += "</ul>";

  if (qwerty6.innerHTML === text) {
    qwerty6.innerHTML = "";
  } else {
    qwerty6.innerHTML = text;
  }
}


//Navbar
function toggleContent(contentId) {
  let dropdownContent = document.getElementById(contentId);
  if (
    dropdownContent.style.display === "none" ||
    dropdownContent.style.display === ""
  ) {
    dropdownContent.style.display = "flex";
  } else {
    dropdownContent.style.display = "none";
  }
}