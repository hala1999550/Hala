
//Hala Alwash assig 2
let p; 

$(document).ready(function () {
  
 let planet = JSON.parse(localStorage.getItem("planet"));

 console.log("planet is "+planet);
     
    $("img")[0].src = `../images/${planet.image}`;

    p = planet;
    // get planets value and display them 
    $("#name").append(planet.name);
    $("#color").append(planet.color);
    $("#radius").append(planet.radiusKM);
    $("#fromEarth").append(planet.distanceMKM.fromEarth);
    $("#fromSun").append(planet.distanceMKM.fromSun);
});

/// print my info at the header and footer
function displayMyInfo() {
    let personal = JSON.parse(localStorage.getItem("personal"));
    $("header").html("Solar System, Assignment #2, ");
    for (let p in personal) {
      $("header").append(`${personal[p]} |`);
    }
      $("footer").html(`${personal.myCampus} | ${personal.myLoginName}`);
  }