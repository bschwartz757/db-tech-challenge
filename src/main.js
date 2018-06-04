import App from "./App.html";
// import "./utils/jquery-global";
import $ from "jquery";
window.$ = $;
import Popper from "popper.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
// import "fontawesome";

// const apiKey = fetch("/get-key")
//   .then(res => res.json())
//   .then(result => {
//     window.apiKey = result.key;
//   })
//   .catch(err => {
//     console.error(`Error fetching key: ${err}`);
//   });

const app = new App({
  target: document.querySelector("head")
});

export default app;
