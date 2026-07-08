/*
==========================================================
Emergency Medical Profile
Visual Editor
Version 0.3.1
==========================================================
*/

function openEditor() {

    document.getElementById("editorPanel").hidden = false;

    document.getElementById("firstName").value =
        profile.patient.firstName;

    document.getElementById("lastName").value =
        profile.patient.lastName;

    document.getElementById("bloodGroup").value =
        profile.patient.bloodGroup;

    document.getElementById("diagnosis").value =
        profile.patient.diagnosis;

    document.getElementById("contactName").value =
        profile.emergencyContact.name;

    document.getElementById("contactPhone").value =
        profile.emergencyContact.phone;

    document.getElementById("medication").value =
        profile.medication.join("\n");

    document.getElementById("allergies").value =
        profile.allergies.join("\n");

    document.getElementById("history").value =
        profile.history.join("\n");

}

function closeEditor(){

    document.getElementById("editorPanel").hidden = true;

}

function saveEditor(){

    profile.patient.firstName =
        document.getElementById("firstName").value.trim();

    profile.patient.lastName =
        document.getElementById("lastName").value.trim();

    profile.patient.bloodGroup =
        document.getElementById("bloodGroup").value.trim();

    profile.patient.diagnosis =
        document.getElementById("diagnosis").value.trim();

    profile.emergencyContact.name =
        document.getElementById("contactName").value.trim();

    profile.emergencyContact.phone =
        document.getElementById("contactPhone").value.trim();

    profile.medication =
        textareaToArray("medication");

    profile.allergies =
        textareaToArray("allergies");

    profile.history =
        textareaToArray("history");

    saveProfile(profile);

    renderProfile();

    closeEditor();

}

function textareaToArray(id){

    return document
        .getElementById(id)
        .value
        .split("\n")
        .map(item => item.trim())
        .filter(item => item.length > 0);

}

function initialiseEditor(){

    const save =
        document.getElementById("btnSave");

    const cancel =
        document.getElementById("btnCancel");

    if(save){

        save.onclick = saveEditor;

    }

    if(cancel){

        cancel.onclick = closeEditor;

    }

}
