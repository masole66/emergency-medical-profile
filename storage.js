*
Emergency Medical Profile
Release 0.4.0
Storage
*/

const STORAGE_KEY="emp_profile_v04";

const defaultProfile={
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
 allergies:["No drug allergies reported"],
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

function cloneProfile(obj){
 return JSON.parse(JSON.stringify(obj));
}

function loadProfile(){
 try{
   const raw=localStorage.getItem(STORAGE_KEY);
   if(!raw){
      saveProfile(defaultProfile);
      return cloneProfile(defaultProfile);
   }
   return Object.assign(cloneProfile(defaultProfile),JSON.parse(raw));
 }catch(e){
   console.error(e);
   return cloneProfile(defaultProfile);
 }
}

function saveProfile(profile){
 localStorage.setItem(STORAGE_KEY,JSON.stringify(profile));
}

function resetProfile(){
 localStorage.removeItem(STORAGE_KEY);
 saveProfile(defaultProfile);
 return cloneProfile(defaultProfile);
}
