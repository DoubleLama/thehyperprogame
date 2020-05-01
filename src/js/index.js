let pageArgument;
const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  let header = document.getElementById("header")
  let pageContent = document.getElementById("pageContent");
  window.scrollTo(0, 0);
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

import {routes} from "./routes"
import "../sass/styles.scss";