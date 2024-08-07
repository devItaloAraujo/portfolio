//List of Srcs for images of works in order
const srcs = ["https://live.staticflickr.com/65535/53724012970_054b3fc38a_b.jpg"]

//List of skills used in works in order
const skills = [[1, 2, 4, 6, 7, 9, 14]]

//List of Projects in portuguese
const listOfWorksPtBr = [ {
    title: "App de Receitas",
    src: srcs[0],
    description: "Uma aplicação front-end que consome dados de uma API pública, permitindo aos usuários pesquisar e armazenar receitas culinárias. Os usuários podem favoritar e compartilhar receitas. A aplicação inclui páginas para login, seguir receitas, favoritar receitas, receitas concluídas e mais.",
    skills: skills[0]
},
{
    title: "App de Receitas2",
    src: srcs[0],
    description: "Uma aplicação front-end que consome dados de uma API pública, permitindo aos usuários pesquisar e armazenar receitas culinárias. Os usuários podem favoritar e compartilhar receitas. A aplicação inclui páginas para login, seguir receitas, favoritar receitas, receitas concluídas e mais.",
    skills: []
}
];

//List of Projects in english
const listOfWorks = [ {
    title: "Recipes App",
    src: srcs[0],
    description: "A front-end application that consumes data from a public API, allowing users to search for and store culinary recipes. Users can favorite and share recipes. The application includes pages for logging in, following recipes, favoriting recipes, completed recipes, and more.",
    skills: skills[0]
},
{
    title: "Recipes App2",
    src: srcs[0],
    description: "A front-end application that consumes data from a public API, allowing users to search for and store culinary recipes. Users can favorite and share recipes. The application includes pages for logging in, following recipes, favoriting recipes, completed recipes, and more.",
    skills: [] 
}
];

export { listOfWorks, listOfWorksPtBr };