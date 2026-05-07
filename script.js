const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const aboutInput = document.getElementById("about");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const skillsInput = document.getElementById("skills");


nameInput.addEventListener("input", () => {
  document.getElementById("preview-name").textContent =
    nameInput.value || "Your Name";
});

titleInput.addEventListener("input", () => {
  document.getElementById("preview-title").textContent =
    titleInput.value || "Professional Title";
});

aboutInput.addEventListener("input", () => {
  document.getElementById("preview-about").textContent =
    aboutInput.value || "Your professional summary will appear here.";
});

emailInput.addEventListener("input", () => {
  document.getElementById("preview-email").textContent =
    emailInput.value || "Email";
});

phoneInput.addEventListener("input", () => {
  document.getElementById("preview-phone").textContent =
    phoneInput.value || "Phone";
});

skillsInput.addEventListener("input", () => {

  const skills = skillsInput.value.split(",");

  const skillsContainer = document.getElementById("preview-skills");

  skillsContainer.innerHTML = "";

  skills.forEach(skill => {

    if(skill.trim() !== ""){

      const span = document.createElement("span");

      span.textContent = skill.trim();

      skillsContainer.appendChild(span);

    }

  });

});

const addEducationBtn = document.getElementById("addEducationBtn");

const educationInputs =
  document.getElementById("educationInputs");

const educationPreview =
  document.getElementById("educationPreview");


// ADD NEW EDUCATION FIELD
addEducationBtn.addEventListener("click", () => {

  const newGroup = document.createElement("div");

  newGroup.classList.add("education-group");

  newGroup.innerHTML = `
  
    <input type="text" class="school" placeholder="School Name">

    <input type="text" class="course" placeholder="Course / Program">

    <input type="text" class="year" placeholder="Year">

  `;

  educationInputs.appendChild(newGroup);

  attachEducationListeners();

});


// UPDATE CV PREVIEW
function updateEducationPreview(){

  educationPreview.innerHTML = "";

  const groups =
    document.querySelectorAll(".education-group");

  groups.forEach(group => {

    const school =
      group.querySelector(".school").value;

    const course =
      group.querySelector(".course").value;

    const year =
      group.querySelector(".year").value;

    const div = document.createElement("div");

    div.classList.add("education-item");

    div.innerHTML = `
    
      <h3>${school || "University Name"}</h3>

      <p>${course || "Course / Program"}</p>

      <span>${year || "2020 - 2024"}</span>

    `;

    educationPreview.appendChild(div);

  });

}


// ATTACH INPUT LISTENERS
function attachEducationListeners(){

  const inputs =
    document.querySelectorAll(".education-group input");

  inputs.forEach(input => {

    input.addEventListener(
      "input",
      updateEducationPreview
    );

    input.addEventListener(
      "input",
      saveData
    );

  });

}


attachEducationListeners();

updateEducationPreview();

const addExperienceBtn =
  document.getElementById("addExperienceBtn");

const experienceInputs =
  document.getElementById("experienceInputs");

const experiencePreview =
  document.getElementById("experiencePreview");


// ADD EXPERIENCE FIELD
addExperienceBtn.addEventListener("click", () => {

  const newGroup = document.createElement("div");

  newGroup.classList.add("experience-group");

  newGroup.innerHTML = `
  
    <input type="text"
      class="company"
      placeholder="Company Name">

    <input type="text"
      class="position"
      placeholder="Job Title">

    <input type="text"
      class="experience-year"
      placeholder="Year">

    <textarea
      class="job-description"
      placeholder="Job Description"></textarea>

  `;

  experienceInputs.appendChild(newGroup);

  attachExperienceListeners();

});


// UPDATE EXPERIENCE PREVIEW
function updateExperiencePreview(){

  experiencePreview.innerHTML = "";

  const groups =
    document.querySelectorAll(".experience-group");

  groups.forEach(group => {

    const company =
      group.querySelector(".company").value;

    const position =
      group.querySelector(".position").value;

    const year =
      group.querySelector(".experience-year").value;

    const description =
      group.querySelector(".job-description").value;

    const div = document.createElement("div");

    div.classList.add("experience-item");

    div.innerHTML = `
    
      <h3>${company || "Company Name"}</h3>

      <h4>${position || "Job Title"}</h4>

      <span>${year || "2022 - Present"}</span>

      <p>
        ${description || "Your job description will appear here."}
      </p>

    `;

    experiencePreview.appendChild(div);

  });

}


// ATTACH LISTENERS
function attachExperienceListeners(){

  const inputs =
    document.querySelectorAll(
      ".experience-group input, .experience-group textarea"
    );

  inputs.forEach(input => {

    input.addEventListener(
  "input",
  saveData
  );

    input.addEventListener(
      "input",
      updateExperiencePreview
    );


  });

}


attachExperienceListeners();

updateExperiencePreview();

const addReferenceBtn =
  document.getElementById("addReferenceBtn");

const referenceInputs =
  document.getElementById("referenceInputs");

const referencePreview =
  document.getElementById("referencePreview");


// ADD REFERENCE FIELD
addReferenceBtn.addEventListener("click", () => {

  const newGroup = document.createElement("div");

  newGroup.classList.add("reference-group");

  newGroup.innerHTML = `
  
    <input type="text"
      class="reference-name"
      placeholder="Reference Name">

    <input type="text"
      class="reference-position"
      placeholder="Position">

    <input type="text"
      class="reference-company"
      placeholder="Company">

    <input type="text"
      class="reference-contact"
      placeholder="Phone or Email">

  `;

  referenceInputs.appendChild(newGroup);

  attachReferenceListeners();

});


// UPDATE REFERENCE PREVIEW
function updateReferencePreview(){

  referencePreview.innerHTML = "";

  const groups =
    document.querySelectorAll(".reference-group");

  groups.forEach(group => {

    const name =
      group.querySelector(".reference-name").value;

    const position =
      group.querySelector(".reference-position").value;

    const company =
      group.querySelector(".reference-company").value;

    const contact =
      group.querySelector(".reference-contact").value;

    const div = document.createElement("div");

    div.classList.add("reference-item");

    div.innerHTML = `
    
      <h3>${name || "Reference Name"}</h3>

      <h4>${position || "Position"}</h4>

      <p>${company || "Company Name"}</p>

      <p>${contact || "Phone or Email"}</p>

    `;

    referencePreview.appendChild(div);

  });

}


// ATTACH LISTENERS
function attachReferenceListeners(){

  const inputs =
    document.querySelectorAll(
      ".reference-group input"
    );

  inputs.forEach(input => {

    input.addEventListener(
      "input",
      updateReferencePreview
    );

    input.addEventListener(
      "input",
      saveData
    );

  });

}


attachReferenceListeners();

updateReferencePreview();

const downloadBtn =
  document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {

  const cv =
    document.getElementById("cv-preview");

  const options = {

    margin:0,

    filename:"My_CV.pdf",

    image:{
      type:"jpeg",
      quality:0.98
    },

    html2canvas:{
      scale:2,
      useCORS:true,
      scrollY:0
    },

    jsPDF:{
      unit:"mm",
      format:"a4",
      orientation:"portrait"
    },

    pagebreak:{
      mode:["avoid-all","css","legacy"]
    }

  };

  html2pdf()
    .set(options)
    .from(cv)
    .save();

});

// SAVE DATA
function saveData(){

  // EDUCATION
  const educationData = [];

  document.querySelectorAll(".education-group")
    .forEach(group => {

      educationData.push({

        school:
          group.querySelector(".school").value,

        course:
          group.querySelector(".course").value,

        year:
          group.querySelector(".year").value

      });

    });


  // EXPERIENCE
  const experienceData = [];

  document.querySelectorAll(".experience-group")
    .forEach(group => {

      experienceData.push({

        company:
          group.querySelector(".company").value,

        position:
          group.querySelector(".position").value,

        year:
          group.querySelector(".experience-year").value,

        description:
          group.querySelector(".job-description").value

      });

    });


  // REFERENCES
  const referenceData = [];

  document.querySelectorAll(".reference-group")
    .forEach(group => {

      referenceData.push({

        name:
          group.querySelector(".reference-name").value,

        position:
          group.querySelector(".reference-position").value,

        company:
          group.querySelector(".reference-company").value,

        contact:
          group.querySelector(".reference-contact").value

      });

    });


  // MAIN DATA
  const data = {

    name: nameInput.value,
    title: titleInput.value,
    about: aboutInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    skills: skillsInput.value,

    education: educationData,
    experience: experienceData,
    references: referenceData

  };


  localStorage.setItem(
    "cvData",
    JSON.stringify(data)
  );

}


// LOAD DATA
function loadData(){

  const savedData =
    JSON.parse(localStorage.getItem("cvData"));

  if(!savedData) return;


  // BASIC INFO
  nameInput.value = savedData.name || "";
  titleInput.value = savedData.title || "";
  aboutInput.value = savedData.about || "";
  emailInput.value = savedData.email || "";
  phoneInput.value = savedData.phone || "";
  skillsInput.value = savedData.skills || "";


  // UPDATE BASIC PREVIEW
  nameInput.dispatchEvent(new Event("input"));
  titleInput.dispatchEvent(new Event("input"));
  aboutInput.dispatchEvent(new Event("input"));
  emailInput.dispatchEvent(new Event("input"));
  phoneInput.dispatchEvent(new Event("input"));
  skillsInput.dispatchEvent(new Event("input"));


  // EDUCATION
  if(savedData.education){

    educationInputs.innerHTML = "";

    savedData.education.forEach(item => {

      const div = document.createElement("div");

      div.classList.add("education-group");

      div.innerHTML = `
      
        <input type="text"
          class="school"
          placeholder="School Name"
          value="${item.school}">

        <input type="text"
          class="course"
          placeholder="Course / Program"
          value="${item.course}">

        <input type="text"
          class="year"
          placeholder="Year"
          value="${item.year}">
      
      `;

      educationInputs.appendChild(div);

    });

    attachEducationListeners();
    updateEducationPreview();

  }


  // EXPERIENCE
  if(savedData.experience){

    experienceInputs.innerHTML = "";

    savedData.experience.forEach(item => {

      const div = document.createElement("div");

      div.classList.add("experience-group");

      div.innerHTML = `
      
        <input type="text"
          class="company"
          placeholder="Company Name"
          value="${item.company}">

        <input type="text"
          class="position"
          placeholder="Job Title"
          value="${item.position}">

        <input type="text"
          class="experience-year"
          placeholder="Year"
          value="${item.year}">

        <textarea
          class="job-description"
          placeholder="Job Description">${item.description}</textarea>
      
      `;

      experienceInputs.appendChild(div);

    });

    attachExperienceListeners();
    updateExperiencePreview();

  }


  // REFERENCES
  if(savedData.references){

    referenceInputs.innerHTML = "";

    savedData.references.forEach(item => {

      const div = document.createElement("div");

      div.classList.add("reference-group");

      div.innerHTML = `
      
        <input type="text"
          class="reference-name"
          placeholder="Reference Name"
          value="${item.name}">

        <input type="text"
          class="reference-position"
          placeholder="Position"
          value="${item.position}">

        <input type="text"
          class="reference-company"
          placeholder="Company"
          value="${item.company}">

        <input type="text"
          class="reference-contact"
          placeholder="Phone or Email"
          value="${item.contact}">
      
      `;

      referenceInputs.appendChild(div);

    });

    attachReferenceListeners();
    updateReferencePreview();

  }

}

const allInputs =
  document.querySelectorAll("input, textarea");

allInputs.forEach(input => {

  input.addEventListener("input", saveData);

});

loadData();

const clearBtn =
  document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {

  localStorage.removeItem("cvData");

  location.reload();

});