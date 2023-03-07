import { getCategories } from "./database.js"
const allCategories = getCategories()

export const Categories = () => {
    
    let HTML = "<ul>"

    for (const category of allCategories) {
        HTML += `<li id="category--${category.id}">${category.name}</li>`
    }

    HTML += "</ul>"

    return HTML
}

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF ARTICLES BECAUSE WE NEED TO LOOP THROUGH IT TO COUNT HOW MANY ARTICLES THERE ARE OF EACH CATEGORY
import { getArticles } from "./database.js"
const allArticles = getArticles()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A CATEGORY?
        if (itemClicked.id.startsWith("category")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED CATEGORY?
            const [,PrimaryKey] = itemClicked.id.split("--")


            //WE NEED TO LOOP THROUGH THE ARTICLES MATCHING THE PRIMARYKEY (WHICH IS THE CATEGORIES ID) TO THE CATEGORY ID IN EACH ARTICLE AND COUNTING EACH TIME IT MATCHES
            let articleCount = 0
            for (const article of allArticles){
                if (parseInt(PrimaryKey) === article.categoryId){
                    articleCount++
                }
            }



            // IF ARTICLE COUNT IS ONLY ONE MAKE ALERT SAY "is" and make article singular
            if(articleCount === 1){
                window.alert(`There is only ${articleCount} article in this category `)
            }

            //OTHERWISE USE ARE AND PLURAL
            else{
            window.alert(`There are ${articleCount} articles in this category `)
            }

        }
    }
)
