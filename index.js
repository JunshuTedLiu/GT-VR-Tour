// Get Geolocation.
// Reference: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

//var x = document.getElementById("demo");
var lat;
var lon;

var latToAFrame = 4;
var lonToAFrame = 8.5;

function getLocation() {
    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(showPosition);
        navigator.geolocation.watchPosition(showPosition);
//        console.log(`Latitute: ${lat}, Longitude: ${lon}`);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    console.log(`Latitute: ${lat}, Longitude: ${lon}`)
}

//function displayLocation() {
//    if (lat === undefined && lon === undefined) {
//        document.getElementById("display-coord").innerHTML = `Location retrieving. Please wait...`;
//    } else {
//        document.getElementById("display-coord").innerHTML = `Latitute: ${lat}, Longitude: ${lon}`;
//    }
//}

//function updatePositionWhenItChanged(oldValueLat, oldValueLon, newValueLat, newValueLon) {
//    console.log(`The location data has been changed. OLD: Latitute: ${oldValueLat}, Longitude: ${oldValueLon}; NEW: Latitute: ${newValueLat}, Longitude: ${newValueLon}`);
//}

//Object.defineProperty(x, "prop", {
//    get() {
//        return lat, lon;
//    },
//    set(latNew, lonNew){
//        lat = latNew;
//        lon = lonNew;
//        fn(lat, lon, latNew, lonNew);
//    }
//});

//    //proxy
//
//    var targetObj = {lat};
//    var targetProxy = new Proxy(targetObj, {
//        set: function (target, key, value) {
//            console.log(`${key} set to ${value}`);
//            target[key] = value;
//            return true;
//        }
//    })
//
//    targetProxy.lat="69";

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
    noLocationAlert();
    //    document.querySelector("#cameraWrapper").object3D.position.set(lonToAFrame, -1, latToAFrame);

    //     document.querySelector("#cameraWrapper").object3D.position.set(0, -1, 0);

    //    document.getElementById('cameraWrapper').setAttribute('position', {x:lonToAFrame, y:0, z:latToAFrame});

    //    ONLY WORKS ONCE
    document.querySelector('#cameraWrapper').setAttribute('position', {x:lonToAFrame, y:-2.3, z:latToAFrame});

    //    document.querySelector('#cameraWrapper').setAttribute('position', {x:0, y:0, z:0});

    console.log("Camera updated.");
}

function noLocationAlert() {
    if (lat === undefined && lon === undefined)  {
        alert("Location retrieving. Please wait.")
    }
}

function birdView() {
    noLocationAlert();
    document.querySelector('#cameraWrapper').setAttribute('position', {x:lonToAFrame, y:-2, z:latToAFrame});
}

function POVView() {
    noLocationAlert();
    document.querySelector('#cameraWrapper').setAttribute('position', {x:lonToAFrame, y:-3.25, z:latToAFrame});
}

//change sky
function changeSkyToClassic() {
//    $("#sky").attr("src", "assets/sky/purple-cyan-linear-gradient-1920x1080-c2-27b3b6-ff00ff-a-90-f-14.png")
    
    
    console.log("Changing the sky color.")
    

    document.querySelector('sky').setAttribute('src', '/assets/sky/purple-cyan-linear-gradient-1920x1080-c2-27b3b6-ff00ff-a-90-f-14.png');
}


//navbar

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}