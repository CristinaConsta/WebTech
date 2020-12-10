function map() {
  var mapProp = {
      center:new google.maps.LatLng(51.501571017547484, -0.1417612556744865),
      zoom:6,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }


function user(){
    var login=document.getElementById("user");    
    // Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("login", "Smith");
    // Retrieve
    document.getElementById("user").innerHTML = localStorage.getItem("login");
  } else {
    document.getElementById("user").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}


