function map() {
  var mapProp = {
      center:new google.maps.LatLng(51.501571017547484, -0.1417612556744865),
      zoom:6,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function user(){   
  username=document.getElementById("userName").value;
  password=document.getElementById("passWord").value;
  if(username!="" && password!="")
  {
    sessionStorage.setItem("login", username);
    top.window.location.href="Index.html";
  }
  else
    alert("Invalid sign in details"); 
}

function register()
{
  username=document.getElementById("userName").value;
  password=document.getElementById("passWord").value;
  email=document.getElementById("eMail").value;
  if(username!="" && password!="" && email!="")
  {
    sessionStorage.setItem("login", username);
    top.window.location.href="Index.html";
    welcome();
  }
  else
    alert("Invalid sign in details"); 
  
}

function getUser(){
  var logDet=sessionStorage.getItem("login");
  if(!!logDet)
  {
    document.getElementById("userSession").innerHTML="Hello again, " + logDet;
    document.getElementById("login").style.visibility="hidden";
    document.getElementById("register").style.visibility="hidden";
  }
  else{
    document.getElementById("login").style.visibility="visible";
    document.getElementById("register").style.visibility="visible";
  }
}

function welcome(){
  alert("Your account has been saved. Welcome to our website!");
  top.window.location.href="Index.html";
}

function selectedAnimal(elem){   
  selectedAnimal=document.getElementById(elem.id).src;
  sessionStorage.setItem("image", selectedAnimal);
  location.href="Animal.html";
}

function getSelectedAnimal(){
  var animal=sessionStorage.getItem("image");
  if(!!animal)
  {
      document.getElementById("animalImage").src=animal;
  }
}

function getAnimalDescription(){
  var fullpath=sessionStorage.getItem("image");
  var myname=fullpath.toString().split('/').pop().replace(/\.\w+$/, '');
  if(!!fullpath)
  {
    document.getElementById("animalName").innerHTML=myname;

    var arr = JSON.parse(JSON.stringify(data));
    let filtered=arr.animals.filter(item => item.name==myname);
    document.getElementById("animalDescription").innerHTML=filtered[0].description;
  }
}

function resetForm(){
  document.getElementById("userName").reset();
  document.getElementById("email").reset();
  document.getElementById("phone").reset()
}

function adoptionRequest(){
  if(!!sessionStorage.getItem("login")){
    alert("Thank you for your interest. An email has been sent to you with details.")
  }
  else{
    alert("Please register or sign in first.")
  }
}

function validateContactForm(){
  var name = document.forms["ContactForm"]["userName"].value;
  var email= document.forms["ContactForm"]["email"].value;
  var phone= document.forms["ContactForm"]["phone"].value;
  if (name == "") {
    alert("Name must be filled out!");
    return false;
  }
  else if
    (email == "") {
      alert("Email address must be filled out!");
      return false;
  }
  else if
    (phone == ""){
      alert("Telephone number must be filled out!");
      return false;
  }
  else if(!validRadios())
  {
    alert("Must check some option!");
    return false;
  }
  else
   alert("Thank you for your enquiry!");
}

function validRadios(){
  var radios = document.getElementsByName("radiobutton");
  var formValid = false;
  var i = 0;
  while (!formValid && i < radios.length) {
      if (radios[i].checked)
        formValid = true;
      i++;        
  }

  return formValid;
}