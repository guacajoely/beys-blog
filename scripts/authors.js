import { getAuthors } from "./database.js"
const allAuthors = getAuthors()

export const Authors = () => {
    
    let HTML = "<ul>"

    for (const author of allAuthors) {
        HTML += `<li id="author--${author.id}">${author.name}</li>`
    }

    HTML += "</ul>"

    return HTML
}

//When an author's name is clicked, their bio should be displyed in an alert

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON AN AUTHOR?
        if (itemClicked.id.startsWith("author")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED AUTHOR?
            const [,PrimaryKey] = itemClicked.id.split("--")


            //GRAB THE WHOLE AUTHOR OBJECT AND STORE IT IN matchingAuthor
            let matchingAuthor = null
            for (const author of allAuthors){
                if (parseInt(PrimaryKey) === author.id){
                    matchingAuthor = author
                }
            }


            // INSERT THE AUTHOR'S BIO INTO AN ALERT
            window.alert(`${matchingAuthor.bio}`)

        }
    }
)
