import { Authors } from "./authors.js";
import { Articles } from "./articles.js";
import { Categories } from "./categories.js";


export const BeyBlog = () => {
    return `
        <section class="container">

            <article class="authors column">
                <h2>Authors</h2>
                ${Authors()}
            </article>

            <article class="articles column">
                <h2>Articles</h2>
                ${Articles()}
            </article>

        </section>

        <article class="categories column">
            <h2>Categories</h2>
            ${Categories()}
        </article>
        
      `;
  };
  