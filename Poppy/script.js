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


