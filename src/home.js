const homePageContent = () => {
  const contentHome = document.querySelector("#content-home");

  // Header //
  const header = document.createElement("header");
  header.classList.add("header");

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const li1 = document.createElement("li");
  li1.textContent = "Home";
  li1.classList.add("li");

  const li2 = document.createElement("li");
  li2.textContent = "Menu";
  li2.classList.add("li");

  const li3 = document.createElement("li");
  li3.textContent = "About";
  li3.classList.add("li");

  contentHome.appendChild(header);
  header.appendChild(nav);
  nav.appendChild(li1);
  nav.appendChild(li2);
  nav.appendChild(li3);

  // Main

  const main = document.createElement("main");
  main.classList.add("main");

  const mainInner = document.createElement("div");
  mainInner.classList.add("main-inner");

  const mainBigText = document.createElement("div");
  mainBigText.classList.add("big-text");

  const h2 = document.createElement("h2");
  h2.classList.add("cursive-text");
  h2.textContent = "Ven a saboriar";
  const h1 = document.createElement("big-text");
  h1.classList.add("big-text");
  h1.textContent = "Nuestro Pan Dulce";

  contentHome.appendChild(main);
  main.appendChild(mainInner);
  mainInner.appendChild(mainBigText);
  mainBigText.appendChild(h2);
  mainBigText.appendChild(h1);

  const mainBorderLine = document.createElement("div");
  mainBorderLine.classList.add("border-line");
  const h4 = document.createElement("h4");
  h4.classList.add("main-subtext");
  h4.textContent = "Tenemos Pan, Cafe, Elados, y mucho mas!";
  const mainButton = document.createElement("button");
  mainButton.classList.add("main-button");
  mainButton.textContent = " Ver El Menu";
  mainButton.textContent = " Ver El Menu";

  mainInner.appendChild(mainBorderLine);
  mainInner.appendChild(h4);
  mainInner.appendChild(mainButton);

  // Footer
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const footerText = document.createElement("p");
  footerText.textContent = "Website Design By Eddie Maceda";
  footerText.classList.add("footer-text");

  contentHome.appendChild(footer);
  footer.appendChild(footerText);

  return homePageContent;
};

export default homePageContent;
