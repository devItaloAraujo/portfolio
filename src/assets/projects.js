//Images of the works. Local files live in /public, the rest are hosted on GitHub.
const srcs = {
    ibar: "/works/ibar.webp",
    ibarDelivery: "/works/ibar-delivery.webp",
    batePonto: "/works/bate-ponto.webp",
    thatiane: "/works/thatiane.webp",
    popeye: "/Popeye.PNG",
    farms: "https://raw.githubusercontent.com/devItaloAraujo/api-back-end-java-mysql-farms-manager/5269635fc50bb8c7ade589ed0c4e81370276a806/Captura%20de%20tela%20de%202024-08-07%2015-10-45.png",
    funcionarios: "https://raw.githubusercontent.com/devItaloAraujo/funcionarios/main/frontendfuncionarios.png",
    receitas: "https://github.com/user-attachments/assets/0658c051-31d3-405e-be8f-ac45b179d7b4"
}

//Links by project. "github" is omitted for closed-source client work, so the card only shows the live site.
const links = {
    ibar: { site: "https://www.ibarsistema.com.br" },
    ibarDelivery: { site: "https://www.ibarsistema.com.br/delivery" },
    batePonto: { site: "https://bate-ponto-2.vercel.app" },
    thatiane: { site: "https://psicologathatiaraujo.fly.dev/" },
    popeye: { site: "https://popeye-atacado.fly.dev/" },
    farms: { github: "https://github.com/devItaloAraujo/api-back-end-java-mysql-farms-manager" },
    funcionarios: { github: "https://github.com/devItaloAraujo/funcionarios/" },
    receitas: { github: "https://github.com/devItaloAraujo/project-app-de-receitas" }
}

//List with objects containing skills, srcs and links by id
const commonDataList = [
    { id: 0, skills: [1, 2, 30, 33, 34, 32, 31, 36, 38, 40], links: links.ibar, src: srcs.ibar },
    { id: 1, skills: [1, 2, 30, 32, 31, 17, 36, 37], links: links.ibarDelivery, src: srcs.ibarDelivery },
    { id: 2, skills: [1, 2, 30, 33, 34, 32, 39, 36, 37], links: links.batePonto, src: srcs.batePonto },
    { id: 3, skills: [6, 7, 0, 14, 15, 12], links: links.thatiane, src: srcs.thatiane },
    { id: 4, skills: [14, 2, 8, 12, 29, 30], links: links.popeye, src: srcs.popeye },
    { id: 5, skills: [20, 21, 23, 24, 13, 12], links: links.farms, src: srcs.farms },
    { id: 6, skills: [14, 0, 2, 8, 7, 30, 12, 20, 21, 23, 24, 31, 25, 16], links: links.funcionarios, src: srcs.funcionarios },
    { id: 7, skills: [14, 1, 2, 4, 6, 7, 9], links: links.receitas, src: srcs.receitas }
]

//List of Projects in english
const listOfWorks = [
    {
        id: 0,
        title: "iBar — Management SaaS for Bars & Restaurants",
        description: "Subscription SaaS in production at a commercial venue. React and TypeScript PWA covering tabs, tables, quick sales, store credit, menu and reporting, with offline operation and cloud sync across multiple devices on a shared account. Also distributed as a desktop application.",
        ...commonDataList[0]
    },
    {
        id: 1,
        title: "iBar Delivery — Online Ordering Store",
        description: "Customer-facing ordering storefront for iBar. React and TypeScript web application where customers browse the menu, choose delivery, pickup or table service, pay by Pix, cash or card, and track the order until it arrives. Integrated with the venue's catalogue and point of sale.",
        ...commonDataList[1]
    },
    {
        id: 2,
        title: "Bate Ponto — Time-Clock PWA",
        description: "Time-tracking PWA built with React 19 and TypeScript. Records clock-in and clock-out, configurable weekly schedules, absences and a running hour balance, with offline use, cloud sync and push reminders. Business rules covered by unit tests.",
        ...commonDataList[2]
    },
    {
        id: 3,
        title: "Website for Independent Psychologist",
        description: "Live site for an independent psychologist, presenting her practice, specialties and patient testimonials, with WhatsApp as the booking channel. Static front-end served by a Node/Express container and deployed on Fly.io.",
        ...commonDataList[3]
    },
    {
        id: 4,
        title: "Electronics Store Website",
        description: "Promotional website for a local retailer of toys, electronics and phone accessories, built to support product sales and brand presence. React front-end with Vite and Tailwind CSS, containerised with Docker.",
        ...commonDataList[4]
    },
    {
        id: 5,
        title: "Farms Manager (Back-end)",
        description: "RESTful back-end for managing farms and their crops. Java with Spring Boot Web and Spring Data JPA over a MySQL database, organised in a layered architecture and run under Docker.",
        ...commonDataList[5]
    },
    {
        id: 6,
        title: "Employee Database Manager",
        description: "RESTful API with a web interface for employee records in an ERP context. Spring Boot back-end over PostgreSQL with unit and integration tests, and a React front-end built with Vite and Tailwind CSS.",
        ...commonDataList[6]
    },
    {
        id: 7,
        title: "Recipe Sharing App",
        description: "Front-end application consuming a public recipes API, with search, favourites and sharing across login, recipe detail and completed-recipe views. React with hooks and TypeScript, covered by unit tests.",
        ...commonDataList[7]
    }
];

//List of Projects in portuguese
const listOfWorksPtBr = [
    {
        id: 0,
        title: "iBar — SaaS de gestão para bares e restaurantes",
        description: "SaaS por assinatura, em produção em estabelecimento comercial. PWA em React e TypeScript que cobre comandas, mesas, venda rápida, fiado, cardápio e relatórios, com operação offline e sincronização em nuvem entre vários aparelhos na mesma conta. Também distribuído como aplicativo de desktop.",
        ...commonDataList[0]
    },
    {
        id: 1,
        title: "iBar Delivery — Loja online de pedidos",
        description: "Loja de pedidos online do iBar. Aplicação web em React e TypeScript na qual o cliente consulta o cardápio, escolhe entrega, retirada ou mesa, paga com Pix, dinheiro ou cartão e acompanha o pedido até a entrega. Integrada ao catálogo e ao caixa da loja.",
        ...commonDataList[1]
    },
    {
        id: 2,
        title: "Bate Ponto — PWA de controle de ponto",
        description: "PWA de controle de ponto em React 19 e TypeScript. Registra entrada e saída, expediente configurável por dia da semana, faltas e banco de horas, com uso offline, sincronização em nuvem e lembretes por push. Regras de negócio cobertas por testes unitários.",
        ...commonDataList[2]
    },
    {
        id: 3,
        title: "Website para Psicóloga autônoma",
        description: "Site no ar de psicóloga autônoma, apresentando a profissional, suas especialidades e depoimentos de pacientes, com o WhatsApp como canal de agendamento. Front-end estático servido por contêiner Node/Express, com deploy na Fly.io.",
        ...commonDataList[3]
    },
    {
        id: 4,
        title: "Website de Loja de Eletrônicos",
        description: "Website de divulgação para varejista local de brinquedos, eletrônicos e acessórios para celular, voltado a apoiar a venda de produtos e a presença da marca. Front-end React com Vite e Tailwind CSS, containerizado com Docker.",
        ...commonDataList[4]
    },
    {
        id: 5,
        title: "Farms Manager (Back-end)",
        description: "Back-end RESTful para gestão de fazendas e suas plantações. Java com Spring Boot Web e Spring Data JPA sobre banco MySQL, organizado em arquitetura em camadas e executado sob Docker.",
        ...commonDataList[5]
    },
    {
        id: 6,
        title: "Gerenciador de base de dados de Funcionários",
        description: "API RESTful com interface web para dados de funcionários em contexto de ERP. Back-end em Spring Boot sobre PostgreSQL com testes unitários e de integração, e front-end React construído com Vite e Tailwind CSS.",
        ...commonDataList[6]
    },
    {
        id: 7,
        title: "App de Compartilhar Receitas",
        description: "Aplicação front-end que consome uma API pública de receitas, com busca, favoritos e compartilhamento, além de telas de login, detalhe da receita e receitas concluídas. React com hooks e TypeScript, coberta por testes unitários.",
        ...commonDataList[7]
    }
];

export { listOfWorks, listOfWorksPtBr };
