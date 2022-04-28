/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */



for (let i = 0; i < 1; i++) {
    // get the navbar__list id
    let getUlNavbarLists = document.getElementById("navbar__list");

    // create li element
    let createLiNavbar = document.createElement("li");
    // apend the li that was created to getUlNavbarLists
    getUlNavbarLists.appendChild(createLiNavbar);
    // add navbar__menu class to createLiNavbar
    createLiNavbar.classList.add("navbar__menu");
    // creat and append and add the navbar__menu  class to the a elment

    // create the a elmment and add its #
    let creatALinks = document.createElement("a");


    // creatALinks.href = "#section1"

    // create the text in the a elment
    let createAText = document.createTextNode("Section 1");

    // add class menu__link to a elment
    creatALinks.classList.add("menu__link");

    // append the # to the a elment
    creatALinks.appendChild(createAText);

    // append the a elment to createLiNavbar
    createLiNavbar.appendChild(creatALinks);


    creatALinks.onclick = function smoothScroll() {
        document.querySelector('#section1').scrollIntoView({
            behavior: 'smooth'
        })
    };



};

for (let i = 0; i < 1; i++) {
    // get the navbar__list id
    let getUlNavbarLists2 = document.getElementById("navbar__list");

    // create li element
    let createLiNavbar2 = document.createElement("li");
    // apend the li that was created to getUlNavbarLists
    getUlNavbarLists2.appendChild(createLiNavbar2);
    // add navbar__menu class to createLiNavbar
    createLiNavbar2.classList.add("navbar__menu");
    // creat and append and add the navbar__menu  class to the a elment

    // create the a elmment and add its #
    let creatALinks2 = document.createElement("a");


    // creatALinks.href = "#section1"

    // create the text in the a elment
    let createAText2 = document.createTextNode("Section 2");

    // add class menu__link to a elment
    creatALinks2.classList.add("menu__link");

    // append the # to the a elment
    creatALinks2.appendChild(createAText2);

    // append the a elment to createLiNavbar
    createLiNavbar2.appendChild(creatALinks2);

    creatALinks2.onclick = function smoothScroll() {
        document.querySelector('#section2').scrollIntoView({
            behavior: 'smooth'
        })
    };
};

for (let i = 0; i < 1; i++) {
    // get the navbar__list id
    let getUlNavbarLists3 = document.getElementById("navbar__list");

    // create li element
    let createLiNavbar3 = document.createElement("li");
    // apend the li that was created to getUlNavbarLists
    getUlNavbarLists3.appendChild(createLiNavbar3);
    // add navbar__menu class to createLiNavbar
    createLiNavbar3.classList.add("navbar__menu");
    // creat and append and add the navbar__menu  class to the a elment

    // create the a elmment and add its #
    let creatALinks3 = document.createElement("a");


    // creatALinks.href = "#section1"

    // create the text in the a elment
    let createAText3 = document.createTextNode("Section 3");

    // add class menu__link to a elment
    creatALinks3.classList.add("menu__link");

    // append the # to the a elment
    creatALinks3.appendChild(createAText3);

    // append the a elment to createLiNavbar
    createLiNavbar3.appendChild(creatALinks3);

    creatALinks3.onclick = function smoothScroll() {
        document.querySelector('#section3').scrollIntoView({
            behavior: 'smooth'
        })
    };
};
// 

for (let i = 0; i < 1; i++) {
    // get the navbar__list id
    let getUlNavbarLists4 = document.getElementById("navbar__list");

    // create li element
    let createLiNavbar4 = document.createElement("li");
    // apend the li that was created to getUlNavbarLists
    getUlNavbarLists4.appendChild(createLiNavbar4);
    // add navbar__menu class to createLiNavbar
    createLiNavbar4.classList.add("navbar__menu");
    // creat and append and add the navbar__menu  class to the a elment

    // create the a elmment and add its #
    let creatALinks4 = document.createElement("a");


    // creatALinks.href = "#section1"

    // create the text in the a elment
    let createAText4 = document.createTextNode("Section 4");

    // add class menu__link to a elment
    creatALinks4.classList.add("menu__link");

    // append the # to the a elment
    creatALinks4.appendChild(createAText4);

    // append the a elment to createLiNavbar
    createLiNavbar4.appendChild(creatALinks4);

    creatALinks4.onclick = function smoothScroll() {
        document.querySelector('#section4').scrollIntoView({
            behavior: 'smooth'
        })
    }
};
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
window.onscroll = function() {

    if (this.scrollY <= 550) {

        section1.classList.add("your-active-class");

        section2.classList.remove("your-active-class");

    } else if (this.scrollY >= 551 && this.scrollY <= 1109) {
        section1.classList.remove("your-active-class")

        section3.classList.remove("your-active-class");

        section2.classList.add("your-active-class");

    } else if (this.scrollY >= 1110 && this.scrollY <= 1780) {
        section1.classList.remove("your-active-class");

        section2.classList.remove("your-active-class");

        section4.classList.remove("your-active-class");

        section3.classList.add("your-active-class");
    } else if (this.scrollY >= 1790 && this.scrollY <= 2359) {
        section1.classList.remove("your-active-class");

        section2.classList.remove("your-active-class");

        section3.classList.remove("your-active-class");

        section4.classList.add("your-active-class");

    }
}








/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active