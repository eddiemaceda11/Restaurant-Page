const aboutPageContent = () => {
  const contentAbout = document.querySelector("#content-about");

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
  /*********** Main ************/
  /**********************************/

  const aboutMainSection = document.createElement("main");
  aboutMainSection.classList.add("main-menu");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("menu-container");
  //
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-section");
  const aboutHeading = document.createElement("div");
  aboutHeading.classList.add("about-heading");
  //
  const aboutWelcome = document.createElement("p");
  aboutWelcome.classList.add("about-welcome");
  aboutWelcome.textContent = "Bienvenidos";
  const ourStory = document.createElement("p");
  ourStory.classList.add("our-story");
  ourStory.textContent = "Nuestra Historia";
  const aboutBorder = document.createElement("div");
  aboutBorder.classList.add("about-border");
  //
  const aboutImgsContainer = document.createElement("div");
  aboutImgsContainer.classList.add("about-imgs-container");
  const aboutImg1 = document.createElement("img");
  aboutImg1.classList.add("about-img-1");
  //
  const ourStoryText = document.createElement("p");
  ourStoryText.classList.add("our-story-text");
  ourStoryText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex
  aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id
  enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis
  rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non
  tempor et, luctus id quam. Nulla bibendum vulputate ante, non
  malesuada eros lobortis euismod`;

  aboutMainSection.appendChild(aboutContainer);
  aboutContainer.appendChild(aboutSection);
  aboutSection.appendChild(aboutHeading);
  aboutHeading.appendChild(aboutWelcome);
  aboutHeading.appendChild(ourStory);
  aboutSection.appendChild(aboutBorder);
  aboutSection.appendChild(aboutImgsContainer);
  aboutImgsContainer.appendChild(aboutImg1);
  aboutSection.appendChild(ourStoryText);

  /**********************************/
  /*********** Footer ************/
  /**********************************/

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const footerText = document.createElement("p");
  footerText.textContent = "Website Design By Eddie Maceda";
  footerText.classList.add("footer-text");
  footer.appendChild(footerText);

  //////////

  contentAbout.appendChild(header);
  contentAbout.appendChild(aboutMainSection);
  contentAbout.appendChild(footer);
};

export default aboutPageContent;
