// ==UserScript==
// @name         Google Docs Collapse
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/*
// @match        https://doc.new/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


let origw = document.getElementById("docs-chrome").offsetHeight;
document.querySelector("#docs-chrome").style.transition = "height 0.2s";
document.querySelector(".docs-titlebar-buttons").style.transition = "opacity 0.2s";
document.querySelector("#docs-branding-container").style.transition = "opacity 0.2s";
document.getElementById("docs-chrome").style.height = 0+'px';
document.querySelector(".docs-titlebar-buttons").style.opacity = 0;
document.querySelector("#docs-branding-container").style.opacity = 0;


window.onmousemove = (event) => {
if (event.pageY<10) {
document.querySelector("#docs-chrome").style.height=origw+'px';
    document.querySelector(".docs-titlebar-buttons").style.opacity=1;
    document.querySelector("#docs-branding-container").style.opacity = 1;
}
}

document.querySelector("#docs-chrome").onmouseleave = () => {
    document.querySelector("#docs-chrome").style.height=0+'px';
    document.querySelector(".docs-titlebar-buttons").style.opacity=0;
    document.querySelector("#docs-branding-container").style.opacity = 0;
}
