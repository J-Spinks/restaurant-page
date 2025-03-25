
export const generateHomePage = () => {
  const contentDiv = document.getElementById("content");
  const homePageDiv = document.createElement("div");
  const overviewHeadingDiv = document.createElement("h2");
  const overviewParaDiv = document.createElement("p");
  const promiseHeadingDiv = document.createElement("h3");
  const promiseParaDiv = document.createElement("p");

  overviewHeadingDiv.textContent = "Who We Are";
  overviewParaDiv.textContent = "At The Joe's Bistro, we serve fresh,locally sourced ingredients to create flavorful dishes that will delight your taste buds.";

  promiseHeadingDiv.textContent = "Our Promise";
  promiseParaDiv.textContent = "We promise an unforgettable dining experience. With great food, a warm ambiance, and excellent service, every visit is special. Whether you're here for a casual meal or a celebration, we will make it memorable!";

  homePageDiv.classList.add("home");

  homePageDiv.appendChild(overviewHeadingDiv);
  homePageDiv.appendChild(overviewParaDiv);
  homePageDiv.appendChild(promiseHeadingDiv);
  homePageDiv.appendChild(promiseParaDiv);

  contentDiv.appendChild(homePageDiv);

};

export const homeTabHighlighted = () => {
  const homeBtn = document.getElementById("home-btn");
  homeBtn.style.backgroundColor = "rgb(249, 151, 4)";
  homeBtn.style.cursor = "default";
};

export const clearContentDiv = () => {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = ""
};
