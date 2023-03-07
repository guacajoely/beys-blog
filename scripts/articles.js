import { getArticles } from "./database.js"
const allArticles = getArticles()

export const Articles = () => {
    
    let HTML = "<ul>"

    for (const article of allArticles) {
        HTML += `<li id="article--${article.id}">${article.headline}</li>`
    }

    HTML += "</ul>"

    return HTML
}

//When an article title is clicked, the content of the article and the author of the article should be displayed in an alert

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF AUTHORS BECAUSE THAT IS WHERE THEIR NAMES ARE STORED
import { getAuthors } from "./database.js"
const allAuthors = getAuthors()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON AN ARTICLE?
        if (itemClicked.id.startsWith("article")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED ARTICLE?
            const [,PrimaryKey] = itemClicked.id.split("--")


            //GRAB THE WHOLE ARTICLE OBJECT TO GET THE CONTENT
            let matchingArticle = null
            let matchingAuthor = null
            for (const article of allArticles){
                if (parseInt(PrimaryKey) === article.id){
                    matchingArticle = article

                    //WHILE YOU"RE HERE, LOOP THROUGH THE AUTHORS ALSO TO FIND THE RELATED AUTHOR OBJECT SO WE CAN GET THEIR NAME
                    for (const author of allAuthors){
                        if (article.authorId === author.id){
                            matchingAuthor = author
                        }
                    }
                }
            }



            // INSERT THE MATCHED ARTICLES CONTENT AND THE MATCHED AUTHOR"S NAME INTO ALERT
            window.alert(`${matchingArticle.body}\n -${matchingAuthor.name}`)

        }
    }
)