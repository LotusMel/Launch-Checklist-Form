// Write your JavaScript code here!
fetch("https://handlers.education.launchcode.org/static/planets.json").then(
   function (response) {
      response.json().then(function (json) {
         const div = document.getElementById("missionTarget");
         //let index = 2;
         let planet = Math.floor(Math.random() * json.length);

         div.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${json[planet].name}</li>
         <li>Diameter: ${json[planet].diameter}</li>
         <li>Star: ${json[planet].star}</li>
         <li>Distance from Earth: ${json[planet].distance}</li>
         <li>Number of Moons: ${json[planet].moons}</li>
         </ol>
         <img src="${json[planet].image}"/>
         `;
      });
   });



      let form = document.querySelector("form");
      form.addEventListener("submit", function (event) {
         //alert("All fields required!");
         //event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

         if (!pilotName || !copilotName || !fuelLevel || !cargoMass) {
            alert("All fields required!");
            event.preventDefault(submit);
         };
      /*
This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
<li>Name: ${}</li>
<li>Diameter: ${}</li>
<li>Star: ${}</li>
<li>Distance from Earth: ${}</li>
<li>Number of Moons: ${}</li>
</ol>
<img src="${}">

window.addEventListener("load", function () {

let json = [];
let index = 0;

fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
  response.json().then(function (json) {
      const div = document.getElementById("container");
      for(index = 0; index < json.length; index++){


          div.innerHTML += `
          <div class="astronaut">
          <div class="bio">
          <h3>${json[index].firstName} ${json[index].lastName}</h3>
          <ul>
          <li>Hours in space: ${json[index].hoursInSpace}</li>
          <li>Active: ${json[index].active}</li>
          <li>Skills: ${json[index].skills}</li>
          </ul>
          </div>
          <img class="avatar" src="${json[index].picture}">
          </div>
          `;
      }
  });
});
});

*/
