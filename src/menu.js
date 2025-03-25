export const generateMenuPage = () => {
  const contentDiv = document.getElementById("content");
  const menuDiv = document.createElement("div");
  const menuHeaderDiv = document.createElement("h2");
  const startersHeaderDiv = document.createElement("h3");
  const startersContentDiv = document.createElement("p");
  const wingsDiv = document.createElement("p");
  const saladDiv = document.createElement("p");
  const hummusDiv = document.createElement("p");

  const mainsHeaderDiv = document.createElement("h3");
  const mainsContentDiv = document.createElement("p");
  const roastBeefDiv = document.createElement("p");
  const jerkChickenDiv = document.createElement("p");


  menuHeaderDiv.textContent = "Menu";

  startersHeaderDiv.textContent = "Starters";
  wingsDiv.textContent = "Chicken Wings";
  saladDiv.textContent = "BBQ Salad";
  hummusDiv.textContent = "Bread and fresh Hummus"

  startersContentDiv.appendChild(wingsDiv);
  startersContentDiv.appendChild(saladDiv);
  startersContentDiv.appendChild(hummusDiv);

  mainsHeaderDiv.textContent = "Mains";
  roastBeefDiv.textContent = "Roast Beef with Trimmings";
  jerkChickenDiv.textContent = "Jerk Chicken";

  mainsContentDiv.appendChild(roastBeefDiv);
  mainsContentDiv.appendChild(jerkChickenDiv);


  menuDiv.appendChild(menuHeaderDiv);
  menuDiv.appendChild(startersHeaderDiv);
  menuDiv.appendChild(startersContentDiv);
  menuDiv.appendChild(mainsHeaderDiv);
  menuDiv.appendChild(mainsContentDiv);


  menuDiv.classList.add("menu");

  contentDiv.appendChild(menuDiv);

};

export const menuTabHighlighted = () => {
  const menuBtn = document.getElementById("menu-btn");
  menuBtn.style.backgroundColor = "rgb(249, 151, 4)";
  menuBtn.style.cursor = "default";

};
