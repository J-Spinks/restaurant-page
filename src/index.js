import { generateHomePage, homeTabHighlighted, clearContentDiv} from "./home";
import { generateMenuPage, menuTabHighlighted} from "./menu";
import {generateAboutPage, aboutTabHighlighted} from "./about"

import "./styles.css";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

homeBtn.addEventListener("click", (e) => {
  console.log(e)
  clearContentDiv()
  generateHomePage()
  homeTabHighlighted()
});


menuBtn.addEventListener("click", () => {
  clearContentDiv()
  generateMenuPage()
  menuTabHighlighted()
});

aboutBtn.addEventListener("click", () => {
  clearContentDiv()
  generateAboutPage()
  aboutTabHighlighted()
})
