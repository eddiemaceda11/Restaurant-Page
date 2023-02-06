import homePageContent from "./home.js";
import menuPageContent from "./menu.js";
import aboutPageContent from "./about.js";

// Display home page on load
homePageContent();

// listen for clicks on navbar items
// (Home, Menu, About);
document.addEventListener("click", (e) => {
  const contentHome = document.querySelector("#content-home");
  const contentAbout = document.querySelector("#content-about");
  const contentMenu = document.querySelector("#content-menu");

  // If user clicks 'Home', reset page content
  // and display Home page
  if (e.target.textContent === "Home" && contentHome.classList.contains("hidden")) {
    contentHome.innerHTML = "";
    contentMenu.innerHTML = "";
    contentAbout.innerHTML = "";

    contentAbout.classList.add("hidden");

    contentMenu.classList.add("hidden");

    contentHome.classList.remove("hidden");

    homePageContent();
  }

  // If user clicks 'Menu', reset page content
  // and display Menu page
  if (e.target.textContent === "Menu" && contentMenu.classList.contains("hidden")) {
    contentHome.innerHTML = "";
    contentMenu.innerHTML = "";
    contentAbout.innerHTML = "";
    contentHome.classList.add("hidden");

    contentAbout.classList.add("hidden");

    contentMenu.classList.remove("hidden");
    menuPageContent();
  }

  // If user clicks 'About', reset page content
  // and display About page
  if (e.target.textContent === "About" && contentAbout.classList.contains("hidden")) {
    contentHome.innerHTML = "";
    contentMenu.innerHTML = "";
    contentAbout.innerHTML = "";
    contentHome.classList.add("hidden");

    contentMenu.classList.add("hidden");

    contentAbout.classList.remove("hidden");
    aboutPageContent();
  }

  // If user selects the "Ver el
  // Menu" btn, display Menu page
  if (e.target.textContent === "View Menu") {
    contentHome.innerHTML = "";
    contentMenu.innerHTML = "";
    contentAbout.innerHTML = "";
    contentHome.classList.add("hidden");

    contentAbout.classList.add("hidden");

    contentMenu.classList.remove("hidden");
    menuPageContent();
  }
});
