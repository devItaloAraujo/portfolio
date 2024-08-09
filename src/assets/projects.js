//List of Srcs for images of works in order
const srcs = [
    "https://github.com/user-attachments/assets/0658c051-31d3-405e-be8f-ac45b179d7b4",
    "https://raw.githubusercontent.com/devItaloAraujo/api-back-end-java-mysql-farms-manager/5269635fc50bb8c7ade589ed0c4e81370276a806/Captura%20de%20tela%20de%202024-08-07%2015-10-45.png",
    "https://raw.githubusercontent.com/devItaloAraujo/landingPagePsychologist/main/overview.png",
    "https://raw.githubusercontent.com/devItaloAraujo/funcionarios/main/frontendfuncionarios.png"
]

//List of links to github repositories in order
const githubLinks = [
    "https://github.com/devItaloAraujo/project-app-de-receitas",
    "https://github.com/devItaloAraujo/api-back-end-java-mysql-farms-manager",
    "https://github.com/devItaloAraujo/landingPagePsychologist",
    "https://github.com/devItaloAraujo/funcionarios/"
]

//List of links to deployed projects that have them
const deployedLinks = ["https://psicologathatiaraujo.fly.dev/"]

//List of Projects in portuguese
const listOfWorksPtBr = [
    {
        id: 0,
        title: "App de Compartilhar Receitas",
        src: srcs[0],
        description: "Uma aplicação front-end que consome dados de uma API pública, permitindo aos usuários pesquisar e armazenar receitas culinárias. Os usuários podem favoritar e compartilhar receitas. A aplicação inclui páginas para login, seguir receitas, favoritar receitas, receitas concluídas e mais.",
        skills: [1, 2, 4, 6, 7, 9, 14],
        links: [githubLinks[0]]
    },
    {
        id: 1,
        title: "Farms Manager (Back-end)",
        src: srcs[1],
        description: "Uma aplicação back-end Java desenvolvida utilizando o ecossistema Spring, especificamente o Spring Boot Web e o Spring Data com um banco de dados MySQL. Este projeto é uma API RESTful que gerencia fazendas e suas plantações, seguindo uma arquitetura em camadas para garantir a separação de escopos e a fácil manutenção do código.",
        skills: [20, 23, 24, 13, 12, 21],
        links: [githubLinks[1]]
    },
    {
        id: 2,
        title: "Website para Psicóloga autônoma",
        src: srcs[2],
        description: "Este projeto é uma landing page para uma psicóloga, construída utilizando React e Vite.",
        skills: [2, 8, 12, 29, 30],
        links: [githubLinks[2], deployedLinks[0]]
    },
    // {
    //     id: 3,
    //     title: "Loja E-commerce completa",
    //     src: srcs[0],
    //     description: "placeholder",
    //     skills: [],
    //     links: []
    // },
    {
        id: 4,
        title: "Gerenciador de base de dados de Funcionários",
        src: srcs[3],
        description: "Este projeto é uma API RESTful com interface gráfica desenvolvida usando Spring Boot (Java) e Node. Foi projetado para gerenciar dados de funcionários para um sistema ERP (Enterprise Resource Planning). A API fornece vários endpoints para interagir com os dados do funcionário.",
        skills: [0, 2, 8, 7, 30, 12, 20, 23, 24, 31, 25, 16],
        links: [githubLinks[3]]
    },
    {
        id: 5,
        title: "Armazenador de Emails",
        src: srcs[0],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 6,
        title: "Esse Portfólio",
        src: srcs[0],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 7,
        title: "Carteira de gastos com Redux",
        src: srcs[0],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 8,
        title: "Gerenciador com segurança de estoque e pedidos de loja (Back-end)",
        src:srcs[1],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 9,
        title: "Gerenciador de estoque e pedidos de loja (Back-end)",
        src: srcs[1],
        description: "placeholder",
        skills: [],
        links: []
    }
];

//List of Projects in english
const listOfWorks = [
    {
        id: 0,
        title: "Recipe Sharing App",
        src: srcs[0],
        description: "A front-end application that consumes data from a public API, allowing users to search for and store culinary recipes. Users can favorite and share recipes. The application includes pages for logging in, following recipes, favoriting recipes, completed recipes, and more.",
        skills: [1, 2, 4, 6, 7, 9, 14],
        links: [githubLinks[0]]
    },
    {
        id: 1,
        title: "Farms Manager (Back-end)",
        src: srcs[1],
        description: "A Java back-end application developed using the Spring ecosystem, specifically Spring Boot Web and Spring Data with a MySQL database. This project is a RESTful API that manages farms and their crops, following a layered architecture to ensure scope separation and easy code maintenance.",
        skills: [20, 23, 24, 13, 12, 21],
        links: [githubLinks[1]]
    },
    {
        id: 2,
        title: "Website for Independent Psychologist",
        src: srcs[2],
        description: "This project is a landing page for a psychologist, built using React and Vite.",
        skills: [2, 8, 12, 29, 30],
        links: [githubLinks[2], deployedLinks[0]]
    },
    // {
    //     id: 3,
    //     title: "Complete E-commerce Store",
    //     src: srcs[0],
    //     description: "placeholder",
    //     skills: [],
    //     links: []
    // },
    {
        id: 4,
        title: "Employee Database Manager",
        src: srcs[3],
        description: "This project is a RESTful API plus graphic interface developed using Spring Boot (Java) and Node. It is designed to manage employee data for an ERP (Enterprise Resource Planning) system. The API provides various endpoints to interact with the employee data.",
        skills: [0, 2, 8, 7, 30, 12, 20, 23, 24, 31, 25, 16],
        links: [githubLinks[3]]
    },
    {
        id: 5,
        title: "Email Storage",
        src: srcs[0],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 6,
        title: "This Portfolio",
        src: srcs[0],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 7,
        title: "Expense Tracker with Redux",
        src: srcs[0],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 8,
        title: "Secure Inventory and Order Manager for Store (Back-end)",
        src:  srcs[1],
        description: "placeholder",
        skills: [],
        links: []
    },
    {
        id: 9,
        title: "Inventory and Order Manager for Store (Back-end)",
        src:  srcs[1],
        description: "placeholder",
        skills: [],
        links: []
    }
];

export { listOfWorks, listOfWorksPtBr };