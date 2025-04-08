export const generateAboutPage = () => {
  const contentDiv = document.getElementById("content");
  const aboutPageDiv = document.createElement("div");
  const overviewHeadingDiv = document.createElement("h2");
  const overviewParaDiv = document.createElement("p");



  overviewHeadingDiv.textContent = "About Us";
  overviewParaDiv.textContent = "Our dedicated team of chefs and staff work tirelessly to ensure that every guest has an exceptional dining experience. Led by our head chef, who has over 20 years of culinary experience, our kitchen team prepares each dish with passion and precision. Our friendly service staff is here to make sure you feel at home from the moment you step through our doors.";

  aboutPageDiv.classList.add("about");

  aboutPageDiv.appendChild(overviewHeadingDiv);
  aboutPageDiv.appendChild(overviewParaDiv);

  contentDiv.appendChild(aboutPageDiv);

};

export const aboutTabHighlighted = () => {
  const homeBtn = document.getElementById("home-btn");
  homeBtn.style.backgroundColor = "rgb(249, 151, 4)";
  homeBtn.style.cursor = "default";
};
