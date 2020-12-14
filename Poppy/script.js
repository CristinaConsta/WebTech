function map() {
  var mapProp = {
      center:new google.maps.LatLng(51.501571017547484, -0.1417612556744865),
      zoom:6,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }


function user(){   
  username=document.getElementById("userName").value;
  sessionStorage.setItem("login", username);
  top.window.location.href="Index.html";
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
  var name=fullpath.replace(/^.*[\\\/]/, '');
  if(!!fullpath)
  {
      document.getElementById("animalDescription").innerHTML=name;
  }
}



function validName(){
  var username=document.getElementById("userName").value;
  if(username==""){
      alert("Please insert an user name!");
      document.getElementById("userName").focus();
  }
}

function validNo(){
  var ph=document.getElementById("phone").value;
  var numbersOnly = "";
  var chars = "";
  var phoneNo = document.getElementById("phone").value;
  if(ph==""){
  //if(!document.userSurvey.phone.value){
      alert("Please insert a phone number in the requested format");
  //    document.userSurvey.phone.focus();
      return false;
  }
  else
  {
  
  for (i = 0; i < phoneNo.length; i++)
  {
  chars = phoneNo.substring(i,i+1);

  if (chars >= "0" && chars <= "9")
  
  {
  numbersOnly = numbersOnly + chars;
  }
  }
if (numbersOnly.length != 13)
{
  alert("Incorrect phone number format. You must enter 13 numbers!");
  document.getElementById("phone").focus();
  return false;
}
else
{
  var areacode = numbersOnly.substring(0,2);
  var leading0 = numbersOnly.substring(2,3);
  var exchange = numbersOnly.substring(3,5);
  var ext1 = numbersOnly.substring(5,9);
  var ext2 = numbersOnly.substring(9);
  var newNumber =( "+" + areacode + " " +"(" + leading0+ ")" + exchange + " " + ext1 + "-" + ext2);
  document.getElementById("phone").value = newNumber;
  return true;
      }
  }
}


function validEmail(){
  var email=document.getElementById("email").value;
if (email==""){
  alert("E-mail Address missing. Please enter a valid E-mail address to continue.");
  document.getElementById("email").focus();
  return false;
}
else
{
var emailAddress = document.getElementById("email").value;
var atLoc = emailAddress.indexOf("@",1);
var dotLoc = emailAddress.indexOf(".",atLoc+2);
var len = emailAddress.length;
if (atLoc > 0 && dotLoc > 0 && len > dotLoc+2)
{
return true;
}
else
{
alert("Invalid E-mail address! Please enter your e-mail address again.");
document.getElementById("email").focus();
return false;
}
}
}

function emailSent(){
  alert("An email has been sent to your email address. Thank you for your message.")
}