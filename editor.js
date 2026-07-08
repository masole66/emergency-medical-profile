/*
==========================================================
Emergency Medical Profile
Visual Editor
Release 0.4
==========================================================
*/

function openEditor() {

    document.getElementById("editorPanel").hidden = false;

    document.getElementById("firstName").value =
        profile.patient.firstName;

    document.getElementById("lastName").value =
        profile.patient.lastName;

    document.getElementById("bloodGroupInput").value =
        profile.patient.bloodGroup;

    document.getElementById("diagnosisInput").value =
        profile.patient.diagnosis;

    document.getElementById("contactNameInput").value =
        profile.emergencyContact.name;

    document.getElementById("contactPhoneInput").value =
        profile.emergencyContact.phone;

    document.getElementById("medicationInput").value =
        profile.medication.join("\n");

    document.getElementById("allergiesInput").value =
        profile.allergies.join("\n");

    document.getElementById("historyInput").value =
        profile.history.join("\n");

}

function closeEditor() {

    document.getElementById("editorPanel").hidden = true;

}

function saveEditor() {

    profile.patient.firstName =
        document.getElementById("firstName").value.trim();

    profile.patient.lastName =
        document.getElementById("lastName").value.trim();

    profile.patient.bloodGroup =
        document.getElementById("bloodGroupInput").value.trim();

    profile.patient.diagnosis =
        document.getElementById("diagnosisInput").value.trim();

    profile.emergencyContact.name =
        document.getElementById("contactNameInput").value.trim();

    profile.emergencyContact.phone =
        document.getElementById("contactPhoneInput").value.trim();

    profile.medication =
        textAreaToArray("medicationInput");

    profile.allergies =
        textAreaToArray("allergiesInput");

    profile.history =
        textAreaToArray("historyInput");

    saveProfile(profile);

    renderProfile();

    closeEditor();

}

function textAreaToArray(id) {

    return document
        .getElementById(id)
        .value
        .split("\n")
        .map(item => item.trim())
        .filter(item => item.length > 0);

}

function initialiseEditor() {

    document
        .getElementById("btnSave")
        .addEventListener(
            "click",
            saveEditor
        );

    document
        .getElementById("btnCancel")
        .addEventListener(
            "click",
            closeEditor
        );

}
