/*
Emergency Medical Profile
Release 0.4.0
Visual Editor
*/

function openEditor(){
 document.getElementById("editorPanel").hidden=false;

 const map=[
 ["firstName",profile.patient.firstName],
 ["lastName",profile.patient.lastName],
 ["bloodGroupInput",profile.patient.bloodGroup],
 ["diagnosisInput",profile.patient.diagnosis],
 ["contactNameInput",profile.emergencyContact.name],
 ["contactPhoneInput",profile.emergencyContact.phone],
 ["medicationInput",(profile.medication||[]).join("\n")],
 ["allergiesInput",(profile.allergies||[]).join("\n")],
 ["historyInput",(profile.history||[]).join("\n")]
 ];

 map.forEach(([id,val])=>{
   const el=document.getElementById(id);
   if(el) el.value=val||"";
 });
}

function closeEditor(){
 document.getElementById("editorPanel").hidden=true;
}

function lines(id){
 const el=document.getElementById(id);
 if(!el) return [];
 return el.value.split("\n").map(v=>v.trim()).filter(Boolean);
}

function saveEditor(){

 profile.patient.firstName=document.getElementById("firstName").value.trim();
 profile.patient.lastName=document.getElementById("lastName").value.trim();
 profile.patient.bloodGroup=document.getElementById("bloodGroupInput").value.trim();
 profile.patient.diagnosis=document.getElementById("diagnosisInput").value.trim();

 profile.emergencyContact.name=document.getElementById("contactNameInput").value.trim();
 profile.emergencyContact.phone=document.getElementById("contactPhoneInput").value.trim();

 profile.medication=lines("medicationInput");
 profile.allergies=lines("allergiesInput");
 profile.history=lines("historyInput");

 saveProfile(profile);
 renderProfile();
 closeEditor();
}

function initialiseEditor(){
 const s=document.getElementById("btnSave");
 const c=document.getElementById("btnCancel");
 if(s) s.onclick=saveEditor;
 if(c) c.onclick=closeEditor;
}
