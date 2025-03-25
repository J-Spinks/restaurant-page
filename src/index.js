import { generateHomePage, homeTabHighlighted, clearContentDiv} from "./home";

import "./styles.css";

const homeBtn = document.getElementById("home-btn");


homeBtn.addEventListener("click", (e) => {
  console.log(e)
  clearContentDiv()
  generateHomePage()
  homeTabHighlighted()
});
