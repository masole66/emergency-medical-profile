/*
==========================================================
Emergency Medical Profile
Version 0.2.2
Storage Manager
==========================================================
*/

const STORAGE_KEY = "emp_profile_v02";

/*
---------------------------------------
Default profile
---------------------------------------
*/

const defaultProfile = {

    patient:{

        firstName:"Mónica",

        lastName:"Solé Rojo",

        bloodGroup:"O+",

        diagnosis:"Severe postsurgical hypoparathyroidism"

    },

    medication:[

        "Yorvipath 12 μg SC — 23:00",

        "Eutirox 100 μg — 06:45",

        "Rosuvastatin 10 mg — 21:00"

    ],

    allergies:[

        "No drug allergies reported"

    ],

    history:[

        "Postsurgical hypoparathyroidism",

        "Hypothyroidism",

        "Dyslipidemia"

    ],

    emergencyContact:{

        name:"Pending",

        phone:"Pending"

    }

};

/*
---------------------------------------
Load profile
---------------------------------------
*/

function loadProfile(){

    try{

        const data = localStorage.getItem(STORAGE_KEY);

        if(!data){

            saveProfile(defaultProfile);

            return structuredClone(defaultProfile);

        }

        return JSON.parse(data);

    }

    catch(error){

        console.error(error);

        return structuredClone(defaultProfile);

    }

}

/*
---------------------------------------
Save profile
---------------------------------------
*/

function saveProfile(profile){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(profile)

    );

}

/*
---------------------------------------
Reset profile
---------------------------------------
*/

function resetProfile(){

    localStorage.removeItem(STORAGE_KEY);

    saveProfile(defaultProfile);

}
