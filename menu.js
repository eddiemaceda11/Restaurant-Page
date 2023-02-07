const menuPageContent = () => {
  const contentMenu = document.querySelector("#content-menu");

  const header = document.createElement("header");
  header.classList.add("header");

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const li1 = document.createElement("li");
  li1.classList.add("li");
  li1.textContent = "Home";

  const li2 = document.createElement("li");
  li2.classList.add("li");
  li2.textContent = "Menu";

  const li3 = document.createElement("li");
  li3.classList.add("li");
  li3.textContent = "About";

  header.appendChild(nav);
  nav.appendChild(li1);
  nav.appendChild(li2);
  nav.appendChild(li3);

  /**********************************/
  /*********** Main Menu Section************/
  /**********************************/

  const main = document.createElement("main");
  main.classList.add("main-menu");

  const menuCard = document.createElement("div");
  menuCard.classList.add("menu-card");

  const menuHeadingContainer = document.createElement("div");
  menuHeadingContainer.classList.add("menu-heading");

  const welcomeText = document.createElement("p");
  welcomeText.classList.add("welcome");
  welcomeText.textContent = "Welcome";

  const welcomeMenuText = document.createElement("p");
  welcomeMenuText.classList.add("welcome-menu");
  welcomeMenuText.textContent = "Menu";

  const welcomeMenuBorder = document.createElement("div");
  welcomeMenuBorder.classList.add("welcome-menu-border");

  const menuItems = document.createElement("ul");
  menuItems.classList.add("menu-items");

  const menuItemContainer1 = document.createElement("div");
  //
  menuItemContainer1.classList.add("item-div");
  //
  const itemName1 = document.createElement("li");
  itemName1.classList.add("menu-li");
  itemName1.classList.add("cherry");
  itemName1.textContent = "Cherry Lover's Cake";
  //
  const img1 = document.createElement("img");
  img1.classList.add("img-1");
  //
  const itemDesc1 = document.createElement("p");
  itemDesc1.classList.add("menu-p");
  itemDesc1.textContent = `Our signature cake, made with fresh cherries, ice cream frosting, and a smooth buttery crust.`;
  const itemPrice1 = document.createElement("menu-price");
  itemPrice1.classList.add("menu-price");
  itemPrice1.textContent = "$20";

  const menuItemBorder1 = document.createElement("div");
  menuItemBorder1.classList.add("li-border-line");

  const menuItemContainer2 = document.createElement("div");
  //
  menuItemContainer2.classList.add("item-div");
  //
  const itemName2 = document.createElement("li");
  itemName2.classList.add("menu-li");
  itemName2.textContent = "Sweet Blueberry Pie";
  //
  const img2 = document.createElement("img");
  img2.classList.add("img-2");
  //
  const itemDesc2 = document.createElement("p");
  itemDesc2.classList.add("menu-p");
  itemDesc2.textContent = `Sweet, warm, homemade blueberry pie, with a watm cream filling and your choice of ice cream side.`;
  const itemPrice2 = document.createElement("menu-price");
  itemPrice2.classList.add("menu-price");
  itemPrice2.textContent = "$20";

  const menuItemBorder2 = document.createElement("div");
  menuItemBorder2.classList.add("li-border-line");

  const menuItemContainer3 = document.createElement("div");
  //
  menuItemContainer3.classList.add("item-div");
  //
  const itemName3 = document.createElement("li");
  itemName3.classList.add("menu-li");
  itemName3.textContent = " Churros con Fresa";
  //
  const img3 = document.createElement("img");
  img3.classList.add("img-3");
  //
  const itemDesc3 = document.createElement("p");
  itemDesc3.classList.add("menu-p");
  itemDesc3.textContent = `A latin inspired classic, this dish includes freshly fried churros, melted chocolate, and fresh strawberries.`;
  const itemPrice3 = document.createElement("menu-price");
  itemPrice3.classList.add("menu-price");
  itemPrice3.textContent = "$16";

  const menuItemBorder3 = document.createElement("div");
  menuItemBorder3.classList.add("li-border-line");

  ///////////
  const menuItemContainer4 = document.createElement("div");
  menuItemContainer4.classList.add("item-div");
  //
  const itemName4 = document.createElement("li");
  itemName4.classList.add("menu-li");
  itemName4.textContent = "Chocolate Angel Drop";
  //
  const img4 = document.createElement("img");
  img4.classList.add("img-4");
  //
  const itemDesc4 = document.createElement("p");
  itemDesc4.classList.add("menu-p");
  itemDesc4.textContent = `Our award-winning cake, made with our much coveted secret recipe. We promise, you won't be  disappointed.`;
  const itemPrice4 = document.createElement("menu-price");
  itemPrice4.classList.add("menu-price");
  itemPrice4.textContent = "$16";

  main.appendChild(menuCard);
  menuCard.appendChild(menuHeadingContainer);
  menuHeadingContainer.appendChild(welcomeText);
  menuHeadingContainer.appendChild(welcomeMenuText);
  menuCard.appendChild(welcomeMenuBorder);
  menuCard.appendChild(menuItems);

  menuItems.appendChild(menuItemContainer1);
  menuItemContainer1.appendChild(itemName1);
  menuItemContainer1.appendChild(img1);
  menuItemContainer1.appendChild(itemDesc1);
  menuItemContainer1.appendChild(itemPrice1);
  // menuItems.appendChild(menuItemBorder1);

  menuItems.appendChild(menuItemContainer2);
  menuItemContainer2.appendChild(itemName2);
  menuItemContainer2.appendChild(img2);
  menuItemContainer2.appendChild(itemDesc2);
  menuItemContainer2.appendChild(itemPrice2);
  // menuItems.appendChild(menuItemBorder2);

  menuItems.appendChild(menuItemContainer3);
  menuItemContainer3.appendChild(itemName3);
  menuItemContainer3.appendChild(img3);
  menuItemContainer3.appendChild(itemDesc3);
  menuItemContainer3.appendChild(itemPrice3);
  // menuItems.appendChild(menuItemBorder3);

  menuItems.appendChild(menuItemContainer4);
  menuItemContainer4.appendChild(itemName4);
  menuItemContainer4.appendChild(img4);
  menuItemContainer4.appendChild(itemDesc4);
  menuItemContainer4.appendChild(itemPrice4);
  // menuItems.appendChild(menuItemBorder3);

  /**********************************/
  /*********** Footer ************/
  /**********************************/

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const footerText = document.createElement("p");
  footerText.textContent = "Website Design By Eddie Maceda";
  footerText.classList.add("footer-text");
  footer.appendChild(footerText);

  contentMenu.appendChild(header);
  contentMenu.appendChild(main);
  contentMenu.appendChild(footer);

  return menuPageContent;
};

export default menuPageContent;
