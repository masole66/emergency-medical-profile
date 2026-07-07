/*
==========================================================
Emergency Medical Profile
Version 0.2.2
Application Controller
==========================================================
*/

let profile = null;

document.addEventListener("DOMContentLoaded", init);

function init() {

    profile = loadProfile();

    renderProfile();

    registerButtons();

    console.log("Emergency Medical Profile v0.2.2");

}

/*=========================================================
RENDER
=========================================================*/

function renderProfile() {

    updateHeader();

    updateCritical();

    updateMedication();

    updateAllergies();

    updateHistory();

    updateEmergencyContact();

}

function updateHeader() {

    const h2 = document.querySelector(".hero h2");

    if(h2){

        h2.textContent =
            profile.patient.firstName +
            " " +
            profile.patient.lastName;

    }

}

function updateCritical() {

    const section = document.querySelector(".critical");

    if(!section) return;

    const paragraphs = section.querySelectorAll("p");

    if(paragraphs.length < 2) return;

    paragraphs[0].textContent =
        profile.patient.diagnosis;

    paragraphs[1].innerHTML =
        "<strong>Blood Group:</strong> " +
        profile.patient.bloodGroup;

}

function updateMedication(){

    fillList(

        "Essential Medication",

        profile.medication

    );

}

function updateAllergies(){

    fillList(

        "Known Allergies",

        profile.allergies

    );

}

function updateHistory(){

    fillList(

        "Relevant Medical History",

        profile.history

    );

}

function updateEmergencyContact(){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        const title = card.querySelector("h3");

        if(!title) return;

        if(title.textContent !== "Emergency Contact") return;

        const p = card.querySelectorAll("p");

        if(p.length<2) return;

        p[0].innerHTML =
            "<strong>Name:</strong> " +
            profile.emergencyContact.name;

        p[1].innerHTML =
            "<strong>Telephone:</strong> " +
            profile.emergencyContact.phone;

    });

}

function fillList(title,data){

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        const h3 = card.querySelector("h3");

        if(!h3) return;

        if(h3.textContent!==title) return;

        const ul = card.querySelector("ul");

        if(!ul) return;

        ul.innerHTML="";

        data.forEach(item=>{

            const li=document.createElement("li");

            li.textContent=item;

            ul.appendChild(li);

        });

    });

}

/*=========================================================
BUTTONS
=========================================================*/

function registerButtons(){

    connectButton("btnMedication",showMedication);

    connectButton("btnProtocol",showProtocol);

    connectButton("btnContacts",showContacts);

    connectButton("btnRecord",showMedicalRecord);
connectButton("btnEdit",openEditor);
}

function connectButton(id,action){

    const button=document.getElementById(id);

    if(button){

        button.addEventListener("click",action);

    }

}

function showMedication(){

    scrollToCard("Essential Medication");

}

function showContacts(){

    scrollToCard("Emergency Contact");

}

function showMedicalRecord(){

    scrollToCard("Relevant Medical History");

}

function showProtocol(){

    alert(
`Emergency protocol

• Inform emergency physician.

• Check calcium symptoms.

• Review medication.

• Follow local protocol.`
    );

}

/*=========================================================
UTILITIES
=========================================================*/

function scrollToCard(title){

    document.querySelectorAll(".card").forEach(card=>{

        const h3=card.querySelector("h3");

        if(!h3) return;

        if(h3.textContent!==title) return;

        card.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

        highlight(card);

    });

}

function highlight(card){

    card.style.transition="0.3s";

    card.style.transform="scale(1.02)";

    setTimeout(()=>{

        card.style.transform="scale(1)";

    },500);

}
