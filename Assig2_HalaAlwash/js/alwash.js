//Hala Alwash assig 2

let item;
let itemb;

// array to store info of planets 
let planets = new Array();

class Planet {
  constructor(name, color, radiusKM, fromSun, fromEarth, image) {
    this.name = name;
    this.color = color;
    this.radiusKM = radiusKM;
    this.distanceMKM = {fromEarth,fromSun};
    this.image = image;

  }
} // end of class Faculty

$(document).ready(function () {
    $("img").click(function () {
        
        console.log(this.id);
        localStorage.setItem("planet", JSON.stringify(planets[this.id]));
        $("#pages")[0].click();
        
      });


  $.ajax({
    type: "GET",
    url: "data/planetAlwash.json",
    dataType: "JSON",
    success: function (data) {
      myInfo(data.personal);
      displayMyInfo();

      let getPlanets = data.solarSystem.planets;
      getPlanets.forEach(function (item) {
        planet = new Planet(item.planetName, item.planetColor, item.planetRadKM,
          item.distInMillionsKM.fromSun, item.distInMillionsKM.fromEarth, item.image);
        planets.push(planet)
      });

      $("img").map((index, img) => img.src = `images/${planets[index].image}`);

      item = data;

    },
    error: function (data) {
      alert("error" + data);
    }
  });

});

function myInfo(personal) {
  localStorage.setItem("personal", JSON.stringify(personal));
}

// print my info at the header and footer
function displayMyInfo() {
  let personal = JSON.parse(localStorage.getItem("personal"));
  $("header").html("Solar System, Assignment #2, ");
  for (let p in personal) {
    $("header").append(`${personal[p]} |`);
  }
    $("footer").html(`${personal.myCampus} | ${personal.myLoginName}`);
}