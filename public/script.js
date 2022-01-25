// Script for webpage dynamic


// #Navbar sticky on scroll

window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeSticky() {

    if (window.pageYOffset >= sticky) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");
    }


}

// Projects information

let projects = ["Sea Invaders", "MusicScraper", "Calculator"];
let information = ["Remake of a classic video game with Pygame", "Displays scraped data from Ultratop 50 neatly", "Simple Javascript caculator"];
let codeLinks = ["https://github.com/De-L3ns/Sea-Invaders", "https://github.com/De-L3ns/MusicScraper", "https://github.com/De-L3ns/Calculator"];
let liveLinks = ["https://youtu.be/MM0fKFH9UYA","https://music-scraper-node.herokuapp.com", "https://de-l3ns.github.io/Calculator/"];

