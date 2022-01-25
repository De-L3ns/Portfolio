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

const project = document.getElementById("projects");


for (let i = 0; i < projects.length; i++) {

    // divs for project info
    let projectInfo = document.createElement("div");
    projectInfo.classList.add("project-info");
    project.appendChild(projectInfo);
    
    // text inside project info
    let title = document.createElement("h2");
    let projectContent = document.createElement("p");
    title.textContent = projects[i];
    projectContent.textContent = information[i];
    projectInfo.appendChild(title);
    projectInfo.appendChild(projectContent);

    // div for code and link
    let linkWrapper = document.createElement("div");
    linkWrapper.classList.add("link-wrapper");
    projectInfo.appendChild(linkWrapper);

    // Create div for projectlink and add code link
    let projectLink = document.createElement("div");
    projectLink.classList.add("project-link");
    linkWrapper.appendChild(projectLink);
    let code = document.createElement("a");
    code.textContent = "Code";
    code.title = "Code";
    code.href = codeLinks[i];
    projectLink.appendChild(code);

    // Create div for projectlink and add live link
    projectLink = document.createElement("div");
    projectLink.classList.add("project-link");
    linkWrapper.appendChild(projectLink);
    let live = document.createElement("a");
    live.textContent = "Live";
    live.title = "Live";
    live.href = liveLinks[i];
    projectLink.appendChild(live);

}