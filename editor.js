/*
==========================================================
Emergency Medical Profile
Visual Editor
Version 0.3.0
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

    saveProfile(profile);

    renderProfile();

    closeEditor();

}

function initialiseEditor(){

    const saveButton =
        document.getElementById("btnSave");

    const cancelButton =
        document.getElementById("btnCancel");

    if(saveButton){

        saveButton.addEventListener(
            "click",
            saveEditor
        );

    }

    if(cancelButton){

        cancelButton.addEventListener(
            "click",
            closeEditor
        );

    }

}
