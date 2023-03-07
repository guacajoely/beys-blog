const database = {

    authors: [
      { id: 1, 
        name: "Tyler", 
        bio: "I make things, but sometimes I create" },
      {
        id: 2,
        name: "Aja",
        bio: "Queen Bey's biggest, and hardest working, fan"},
      { id: 3, 
        name: "Theo", 
        bio: "I've got Bey's back" }
    ],

    articles: [
      {
        id: 1,
        date_created: "2021-02-22",
        authorId: 2,
        headline: "Pollen is the enemy",
        body:
          "Non voluptas delectus earum voluptatem tempore culpa suscipit. Numquam nesciunt sint nemo velit sint tenetur voluptatem ipsum. Eligendi repellendus non exercitationem error unde incidunt corrupti et.",
        categoryId: 1
      },
      {
        id: 2,
        date_created: "2021-03-19",
        authorId: 1,
        headline: "Creating the awesome",
        body:
          "Ea ut ut dolorem numquam quo quia asperiores. Voluptas sunt ducimus consequuntur fugit. Voluptas quaerat est est velit non cupiditate aut molestiae. Aut ad ut enim assumenda expedita sit maiores. Aut enim quod sunt aut non et cum sit.",
        categoryId: 3
      },
      {
        id: 3,
        date_created: "2021-04-27",
        authorId: 3,
        headline: "Listening for the beat",
        body:
          "Natus explicabo fugiat est vero dolorum non dolor. Neque est adipisci ipsum quasi corporis quidem esse.",
        categoryId: 2
      },
      {
        id: 4,
        date_created: "2021-05-19",
        authorId: 3,
        headline: "Mondays are Awesome",
        body:
          "Sequi nam placeat voluptatem eum voluptatem. Vero explicabo veritatis eos est nisi reprehenderit. Aut libero qui. Quis sapiente non rerum aliquam.",
        categoryId: 1
      },
      {
        id: 5,
        date_created: "2021-06-01",
        authorId: 2,
        headline: "Breaking the Internet",
        body:
          "Sequi nam placeat voluptatem eum voluptatem. Vero explicabo veritatis eos est nisi reprehenderit. Aut libero qui. Quis sapiente non rerum aliquam.",
        categoryId: 2
      }
    ],

    categories: [
      { id: 1, name: "Personal" },
      { id: 2, name: "Work" },
      { id: 3, name: "Music" }
    ]

  };


// EXPORT ARRAYS FROM DB


export const getAuthors = () => {
    return database.authors.map(authorObject => ({...authorObject}))
}

export const getArticles = () => {
    return database.articles.map(articleObject => ({...articleObject}))
}

export const getCategories = () => {
    return database.categories.map(categoryObject => ({...categoryObject}))
}