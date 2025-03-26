export const generateAboutPage = () => {
  const contentDiv = document.getElementById("content");
  const aboutPageDiv = document.createElement("div");
  const overviewHeadingDiv = document.createElement("h2");
  const overviewParaDiv = document.createElement("p");
  const locationHeadingDiv = document.createElement("h3");



  overviewHeadingDiv.textContent = "About Us";
  overviewParaDiv.textContent = "Our dedicated team of chefs and staff work tirelessly to ensure that every guest has an exceptional dining experience. Led by our head chef, who has over 20 years of culinary experience, our kitchen team prepares each dish with passion and precision. Our friendly service staff is here to make sure you feel at home from the moment you step through our doors.";

  promiseHeadingDiv.textContent = "Our Promise";
  promiseParaDiv.textContent = "We promise an unforgettable dining experience. With great food, a warm ambiance, and excellent service, every visit is special. Whether you're here for a casual meal or a celebration, we will make it memorable!";

  homePageDiv.classList.add("home");

  homePageDiv.appendChild(overviewHeadingDiv);
  homePageDiv.appendChild(overviewParaDiv);
  homePageDiv.appendChild(promiseHeadingDiv);
  homePageDiv.appendChild(promiseParaDiv);

  contentDiv.appendChild(homePageDiv);

};

export const aboutTabHighlighted = () => {
  const homeBtn = document.getElementById("home-btn");
  homeBtn.style.backgroundColor = "rgb(249, 151, 4)";
  homeBtn.style.cursor = "default";
};
