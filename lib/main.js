"use strict";

// Hamburger Menu

var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
  links.forEach(function (link) {
    link.classList.toggle("fade");
  });
});

// Click to Reveal Content

var histLinks = document.getElementsByClassName('history-content');

function toggleDropdown() {
  this.children[1].classList.toggle('show');
}

for (i = 0; i < histLinks.length; i++) {
  histLinks[i].addEventListener('click', toggleDropdown);
};

//for Color change

var colorChange = document.getElementsByClassName('color');

function myFunction() {
  document.getElementById('color-change').style.color = "#d9cfba";
};

for (i = 0; i < colorChange.length; i++) {
  colorChange[i].addEventListener('click', myFunction);
};

var colorChange1 = document.getElementsByClassName('color1');

function myFunction1() {
  document.getElementById('color-change1').style.color = "#d9cfba";
};

for (i = 0; i < colorChange1.length; i++) {
  colorChange1[i].addEventListener('click', myFunction1);
};

var colorChange2 = document.getElementsByClassName('color2');

function myFunction2() {
  document.getElementById('color-change2').style.color = "#d9cfba";
};

for (i = 0; i < colorChange2.length; i++) {
  colorChange2[i].addEventListener('click', myFunction2);
};