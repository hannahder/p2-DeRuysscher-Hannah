'use strict';

// National Weather API

var weatherState = document.getElementById('state');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

    //Code Dealing With The API Data Goes Here
    var showMessage = function showMessage() {
      var message = document.createElement('span');
      weatherState.appendChild(message);
      var text = document.createTextNode(apiResult.properties.periods[0].temperature);
      message.appendChild(text);
    };

    var apiResult = JSON.parse(this.responseText);;
    showMessage();

    var tooHot = function tooHot() {
      var temperature = apiResult.properties.periods[0].temperature;
      var hotTemp = document.getElementById("too-hot");
      if (Number(temperature) > 90) {
        hotTemp.classList.remove("hide");
      } else {}
    };
    setTimeout(tooHot, 1000);

    var tooCold = function tooCold() {
      var temperature = apiResult.properties.periods[0].temperature;
      console.log(temperature);
      var coldTemp = document.getElementById("too-cold");
      if (Number(temperature) < 50) {
        coldTemp.classList.remove("hide");
      } else {}
    };
    setTimeout(tooCold, 1000);

    var justOptimal = function justOptimal() {
      var temperature = apiResult.properties.periods[0].temperature;
      var optimalTemp = document.getElementById("optimal");
      if (Number(temperature) >= 51 && Number(temperature) <= 89) {
        optimalTemp.classList.remove("hide");
      } else {}
    };
    setTimeout(justOptimal, 1000);
  }
};
xmlhttp.open("GET", "https://api.weather.gov/gridpoints/MFL/109,98/forecast", true);
xmlhttp.send();

// req.headers({
// 	"x-rapidapi-key": "865836419bmshb3e9c373ff30073p15bae6jsnea5e6f9edc6c",
// 	"x-rapidapi-host": "national-weather-service.p.rapidapi.com",
// 	"useQueryString": true
// });
//
//
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
//
// 	console.log(res.body);
// });