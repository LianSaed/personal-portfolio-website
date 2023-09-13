const home = document.getElementById("home");
const aboutMe = document.getElementById("about-me");
const contact = document.getElementById("contact");
const moreLink = document.getElementById("more-link");
const more = document.getElementById("more");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");


//initial states
home.style.display = "block";
moreLink.style.display = "block";
aboutMe.style.display = "none";
contact.style.display = "none";
more.style.display = "none";
nav1.style.color = "#D1884F";

//arrow function that controls which block to display on screen
const display = (disBlock, disNone1, disNone2) => {
    disBlock.style.display = "block";
    disNone1.style.display = "none";
    disNone2.style.display = "none";
}

//arrow function that controls which element of the navbar that will be colored 
const colorLinks = (active, inactive1, inactive2) => {
    active.style.color = "#D1884F";
    inactive1.style.color = "#000000";
    inactive2.style.color = "#000000";
}

const showHome = (e) => {
    e.preventDefault(); //prevent unnecessary reloading
    display(home, aboutMe, contact);
    colorLinks(nav1, nav2, nav3);
}

const showAboutMe = (e) => {
    e.preventDefault();
    display(aboutMe, home, contact);
    colorLinks(nav2, nav1, nav3)
}

const showContact = (e) => {
    e.preventDefault();
    display(contact, aboutMe, home);
    colorLinks(nav3, nav1, nav2)
}

const showMore = (e) => {
    e.preventDefault();
    more.style.display = "block";
    moreLink.style.display = "none";
}