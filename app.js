/*
==========================================================
Emergency Medical Profile
Version 0.2.1
==========================================================
*/

document.addEventListener("DOMContentLoaded", init);

function init() {

    registerButtons();

    console.log("Emergency Medical Profile v0.2.1 loaded");

}

function registerButtons() {

    connectButton("btnMedication", showMedication);

    connectButton("btnProtocol", showProtocol);

    connectButton("btnContacts", showContacts);

    connectButton("btnRecord", showMedicalRecord);

}

function connectButton(id, action) {

    const button = document.getElementById(id);

    if (button) {

        button.addEventListener("click", action);

    }

}

function showMedication() {

    scrollToCard("Essential Medication");

}

function showProtocol() {

    alert(
`EMERGENCY PROTOCOL

1. Inform medical staff that the patient has postsurgical hypoparathyroidism.

2. Check symptoms of hypocalcaemia.

3. Review current medication.

4. Follow local emergency protocol.`
    );

}

function showContacts() {

    scrollToCard("Emergency Contact");

}

function showMedicalRecord() {

    scrollToCard("Relevant Medical History");

}

function scrollToCard(title) {

    const cards = document.querySelectorAll(".card");

    for (const card of cards) {

        const heading = card.querySelector("h3");

        if (!heading) continue;

        if (heading.textContent.trim() === title) {

            card.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

            flash(card);

            return;

        }

    }

}

function flash(element) {

    const original = element.style.boxShadow;

    element.style.boxShadow =
        "0 0 0 4px rgba(11,94,215,.35)";

    setTimeout(() => {

        element.style.boxShadow = original;

    }, 1200);

}
