// Get Geolocation.
// Reference: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

//var x = document.getElementById("demo");
var lat;
var lon;

var latToAFrame = 2.35;
var lonToAFrame = -4.95;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
//  x.innerHTML = "Latitude: " + position.coords.latitude + 
//  "<br>Longitude: " + position.coords.longitude;
    
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    
    //Convert coordinate to a-frame position.
    //Equation:
    //1 geographical length (coord) = -5005.32491491 A-Frame length (for our model, rescaled & repositioned)
//    latToAFrame = (lat-33.775200)/(33.774000-33.775200)*(2.35-(-5.75))+(-5.75);
//    lonToAFrame = -((lon-(-84.397805))/(-84.396866-(-84.397805))*(0.25-4.95)+4.95);
    
    //z
    latToAFrame = (lat-33.775933)/(33.774124-33.775933)*(2.35-(-11.65))+(-11.65);
    //x
    lonToAFrame = (lon-(-84.394961))/(-84.397759-(-84.394961))*((-4.95)-12.3)+12.3;
}

function setCamera() {
//    document.querySelector("#cameraWrapper").object3D.position.set(lonToAFrame, -1, latToAFrame);
    
//     document.querySelector("#cameraWrapper").object3D.position.set(0, -1, 0);
    
//    document.getElementById('cameraWrapper').setAttribute('position', {x:lonToAFrame, y:0, z:latToAFrame});
    
//    ONLY WORKS ONCE
    document.querySelector('#cameraWrapper').setAttribute('position', {x:lonToAFrame, y:-2, z:latToAFrame});
    
//    document.querySelector('#cameraWrapper').setAttribute('position', {x:0, y:0, z:0});
    
    console.log("Camera updated.");
}