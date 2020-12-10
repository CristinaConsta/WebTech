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
  if(logDet!="")
  {
    document.getElementById("userSession").innerHTML=logDet;
    document.getElementById("login").style.visibility="hidden";
    document.getElementById("register").style.visibility="hidden";
  }
  else{
    document.getElementById("login").style.visibility="visible";
    document.getElementById("register").style.visibility="visible";
  }
}