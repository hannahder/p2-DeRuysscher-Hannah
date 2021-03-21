// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// Click to Reveal Content

var histLinks = document.getElementsByClassName('history-content');

function toggleDropdown() {
  this.children[1].classList.toggle('show');
}

for(i=0; i < histLinks.length; i++) {
  histLinks[i].addEventListener('click', toggleDropdown);
};


//for Color change

var colorChange = document.getElementsByClassName('color');

function myFunction() {
  document.getElementById('color-change').style.color = "#d9cfba";
};


for(i=0; i<colorChange.length; i++) {
colorChange[i].addEventListener('click', myFunction);
};


var colorChange1 = document.getElementsByClassName('color1');

function myFunction1() {
  document.getElementById('color-change1').style.color = "#d9cfba";
};


for(i=0; i<colorChange1.length; i++) {
colorChange1[i].addEventListener('click', myFunction1);
};



var colorChange2 = document.getElementsByClassName('color2');

function myFunction2() {
  document.getElementById('color-change2').style.color = "#d9cfba";
};


for(i=0; i<colorChange2.length; i++) {
colorChange2[i].addEventListener('click', myFunction2);
};

// National Weather API

var weatherState = document.getElementById('state');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        function showMessage() {
        var message = document.createElement('p');
        weatherState.appendChild(message);
        var text = document.createTextNode(apiResult.properties.periods[0].temperature);
        message.appendChild(text);
        };
        showMessage();

        let tooHot = () => {
          let temperature = apiResult.properties.periods[0].temperature;
          let hotTemp = document.getElementById("too-hot");
          if (Number(temperature) > 90) {
            hotTemp.classList.remove("hide");
            } else {
          }
        }
        setTimeout(tooHot, 1000);

        let tooCold = () => {
          let temperature = apiResult.properties.periods[0].temperature;
          console.log(temperature);
          let coldTemp = document.getElementById("too-cold");
          if (Number(temperature) < 50) {
            coldTemp.classList.remove("hide");
            } else {
          }
        }
        setTimeout(tooCold, 1000);


        let justOptimal = () => {
          let temperature = apiResult.properties.periods[0].temperature;
          let optimalTemp = document.getElementById("optimal");
          if (Number(temperature) >= 74 && Number(temperature) <= 86) {
            optimalTemp.classList.remove("hide");
            } else {
          }
        }
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

//API temp for sea turtle hatchlings
