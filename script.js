// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function (response) {
         response.json().then(function (json) {
            const div = document.getElementById("missionTarget");

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
         })
      })

   let form = document.querySelector("form");
   form.addEventListener("submit", function () {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      let fuelStatus;
      let cargoStatus;
      
      if (pilotName == "" || copilotName == "" || fuelLevel == "" || cargoMass == ""){
         alert("All fields required!");
         event.preventDefault();
      }else if (!isNaN(pilotName) || !isNaN(copilotName)) {
         alert("Must enter Pilot and/or Co-pilot name(s). Cannot be a number.");
         event.preventDefault();
      } else if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         alert("Please provide valid numerical value(s) for Fuel Level(L) and/or Cargo Mass(kg).");
         event.preventDefault();
      } else {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName} is ready for launch`;
         if (Number(fuelLevel) < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`;
            document.getElementById("fuelStatus").innerHTML = `Fuel level is too low for launch`;
         } else {
            document.getElementById("fuelStatus").innerHTML = `Fuel level is good`;
            fuelStatus = true;
         }

         if (Number(cargoMass) > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`;
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
         } else {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
            cargoStatus = true;
         }
      }
      if (fuelStatus == true && cargoStatus == true) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = `Shuttle Ready for Launch`;
      }
   });
});