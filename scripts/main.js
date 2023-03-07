import { BeyBlog } from "./BeyBlog.js";

const container = document.querySelector("#container");

const render = () => {
  container.innerHTML = BeyBlog();
};

render();
