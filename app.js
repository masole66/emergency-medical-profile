/*
Emergency Medical Profile
Release 0.4.0
*/

let profile=null;

document.addEventListener("DOMContentLoaded",init);

function init(){
  profile=loadProfile();
  renderProfile();
  registerEvents();
  if(typeof initialiseEditor==="function"){initialiseEditor();}
  console.log("EMP Release 0.4.0");
}

function registerEvents(){
  bind("btnMedication",()=>scrollToElement("cardMedication"));
  bind("btnProtocol",showProtocol);
  bind("btnContacts",()=>scrollToElement("cardContact"));
  bind("btnRecord",()=>scrollToElement("cardHistory"));
  bind("btnEdit",openEditor);
}

function bind(id,fn){
 const el=document.getElementById(id);
 if(el) el.addEventListener("click",fn);
}

function renderProfile(){
 if(!profile) return;
 setText("patientName",`${profile.patient.firstName} ${profile.patient.lastName}`.trim());
 setText("diagnosis",profile.patient.diagnosis);
 setText("bloodGroup",profile.patient.bloodGroup);
 setText("contactName",profile.emergencyContact.name);
 setText("contactPhone",profile.emergencyContact.phone);
 renderList("medicationList",profile.medication);
 renderList("allergyList",profile.allergies);
 renderList("historyList",profile.history);
}

function setText(id,v){
 const e=document.getElementById(id);
 if(e) e.textContent=v||"—";
}

function renderList(id,data){
 const ul=document.getElementById(id);
 if(!ul) return;
 ul.innerHTML="";
 (data||[]).forEach(item=>{
   const li=document.createElement("li");
   li.textContent=item;
   ul.appendChild(li);
 });
}

function scrollToElement(id){
 const e=document.getElementById(id);
 if(e) e.scrollIntoView({behavior:"smooth",block:"start"});
}

function showProtocol(){
 alert("Emergency protocol\n\n• Inform emergency staff.\n• Assess hypocalcaemia.\n• Review medication.");
}
