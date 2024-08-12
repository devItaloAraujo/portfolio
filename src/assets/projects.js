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

//List with objects containing skills, srcs and links by id
const commonDataList = [
    {
        id: 0,
        skills: [14, 1, 2, 4, 6, 7, 9],
        links: [githubLinks[0]],
        src: srcs[0]
    },
    {
        id: 1,
        skills: [14, 20, 23, 24, 13, 12, 21],
        links: [githubLinks[1]],
        src: srcs[1]
    },
    {
        id: 2,
        skills: [14, 2, 8, 12, 29, 30],
        links: [githubLinks[2], deployedLinks[0]],
        src: srcs[2]
    },
    {
        id: 3,
        skills: [14, 0, 2, 8, 7, 30, 12, 20, 23, 24, 31, 25, 16],
        links: [githubLinks[3]],
        src: srcs[3]
    }
]

//List of Projects in english
const listOfWorks = [
    {
        id: 0,
        title: "Recipe Sharing App",
        description: "A front-end application that consumes data from a public API, allowing users to search for and store culinary recipes. Users can favorite and share recipes. The application includes pages for logging in, following recipes, favoriting recipes, completed recipes, and more.",
        ...commonDataList[0]
    },
    {
        id: 1,
        title: "Farms Manager (Back-end)",
        description: "A Java back-end application developed using the Spring ecosystem, specifically Spring Boot Web and Spring Data with a MySQL database. This project is a RESTful API that manages farms and their crops, following a layered architecture to ensure scope separation and easy code maintenance.",
        ...commonDataList[1]
    },
    {
        id: 2,
        title: "Website for Independent Psychologist",
        description: "This project is a landing page for a psychologist, built using React and Vite.",
        ...commonDataList[2]
    },
    {
        id: 3,
        title: "Employee Database Manager",
        description: "This project is a RESTful API plus graphic interface developed using Spring Boot (Java) and Node. It is designed to manage employee data for an ERP (Enterprise Resource Planning) system. The API provides various endpoints to interact with the employee data.",
        ...commonDataList[3]
    },
    // {
    //     id: 4,
    //     title: "Complete E-Commerce",
    //     description: "placeholder",
    // },
    // {
    //     id: 5,
    //     title: "Email Storage",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[0]
    // },
    // {
    //     id: 6,
    //     title: "This Portfolio",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[0]
    // },
    // {
    //     id: 7,
    //     title: "Expense Tracker with Redux",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[0]
    // },
    // {
    //     id: 8,
    //     title: "Secure Inventory and Order Manager for Store (Back-end)",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[1]
    // },
    // {
    //     id: 9,
    //     title: "Inventory and Order Manager for Store (Back-end)",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[1]
    // }
];

//List of Projects in portuguese
const listOfWorksPtBr = [
    {
        id: 0,
        title: "App de Compartilhar Receitas",
        description: "Uma aplicação front-end que consome dados de uma API pública, permitindo aos usuários pesquisar e armazenar receitas culinárias. Os usuários podem favoritar e compartilhar receitas. A aplicação inclui páginas para login, seguir receitas, favoritar receitas, receitas concluídas e mais.",
        ...commonDataList[0]
    },
    {
        id: 1,
        title: "Farms Manager (Back-end)",
        description: "Uma aplicação back-end Java desenvolvida utilizando o ecossistema Spring, especificamente o Spring Boot Web e o Spring Data com um banco de dados MySQL. Este projeto é uma API RESTful que gerencia fazendas e suas plantações, seguindo uma arquitetura em camadas para garantir a separação de escopos e a fácil manutenção do código.",
        ...commonDataList[1]
    },
    {
        id: 2,
        title: "Website para Psicóloga autônoma",
        description: "Este projeto é uma landing page para uma psicóloga, construída utilizando React e Vite.",
        ...commonDataList[2]
    },
    {
        id: 3,
        title: "Gerenciador de base de dados de Funcionários",
        description: "Este projeto é uma API RESTful com interface gráfica desenvolvida usando Spring Boot (Java) e Node. Foi projetado para gerenciar dados de funcionários para um sistema ERP (Enterprise Resource Planning). A API fornece vários endpoints para interagir com os dados do funcionário.",
        ...commonDataList[3]
    },
    // {
    //     id: 4,
    //     title: "E-Commerce Completo",
    //     description: "placeholder",
    // },
    // {
    //     id: 5,
    //     title: "Armazenador de Emails",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[0]
    // },
    // {
    //     id: 6,
    //     title: "Esse Portfólio",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[0]
    // },
    // {
    //     id: 7,
    //     title: "Carteira de gastos com Redux",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[0]
    // },
    // {
    //     id: 8,
    //     title: "Gerenciador com segurança de estoque e pedidos de loja (Back-end)",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[1]
    // },
    // {
    //     id: 9,
    //     title: "Gerenciador de estoque e pedidos de loja (Back-end)",
    //     description: "placeholder",
    //     skills: [],
    //     links: [],
    //     src: srcs[1]
    // }
];

export { listOfWorks, listOfWorksPtBr };