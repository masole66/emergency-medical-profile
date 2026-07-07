/*
==========================================================
Emergency Medical Profile
Editor
Version 0.2.3
==========================================================
*/

function openEditor(){

    const firstName =
        prompt(
            "Patient name",
            profile.patient.firstName
        );

    if(firstName===null)
        return;

    profile.patient.firstName = firstName;

    const lastName =
        prompt(
            "Patient surname",
            profile.patient.lastName
        );

    if(lastName!==null){

        profile.patient.lastName = lastName;

    }

    const blood =
        prompt(
            "Blood group",
            profile.patient.bloodGroup
        );

    if(blood!==null){

        profile.patient.bloodGroup = blood;

    }

    saveProfile(profile);

    renderProfile();

}
