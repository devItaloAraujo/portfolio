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
        description: "A subscription product running in a real venue. An offline-first PWA where tabs, tables, quick sales, store credit, menu and reports keep working for days without internet: Dexie (IndexedDB) is the local source of truth and an outbox syncs to Supabase once the network is back, merging by timestamp and pushing updates over Realtime to every device on the same login. Built on a three-layer architecture, covered by Vitest and Playwright, and also packaged as a desktop build with Electron.",
        ...commonDataList[0]
    },
    {
        id: 1,
        title: "iBar Delivery — Online Ordering Store",
        description: "The customer-facing storefront of iBar. Diners browse the menu on their phone, choose delivery, pickup or table service via QR code, pay by Pix, cash or card, and follow the order live until it arrives. Prices and menu always come from the server through Postgres RPCs, so the client is never trusted with pricing. An order only becomes a sale once the cashier completes it, with stock deducted.",
        ...commonDataList[1]
    },
    {
        id: 2,
        title: "Bate Ponto — Time-Clock PWA",
        description: "A progressive web app for clocking in and out from a phone. It records entries and exits, sets the expected schedule per weekday, and tracks absences and the running hour balance. Works offline with Dexie (IndexedDB) and syncs to Supabase, while reminders reach the user with the app closed through Web Push and an Edge Function.",
        ...commonDataList[2]
    },
    {
        id: 3,
        title: "Website for Independent Psychologist",
        description: "A live site for psychologist Thatiane Araújo Souza, currently bringing in patients. It presents her practice, specialties and patient testimonials, and puts booking one click away through WhatsApp. Served by a Node/Express app in a Docker container and deployed on Fly.io.",
        ...commonDataList[3]
    },
    {
        id: 4,
        title: "Electronics Store Website",
        description: "Website built with React for promoting a local store focused on selling toys, electronics, and cell phone accessories. This platform facilitates product sales and brand promotion.",
        ...commonDataList[4]
    },
    {
        id: 5,
        title: "Farms Manager (Back-end)",
        description: "A Java back-end application developed using the Spring ecosystem, specifically Spring Boot Web and Spring Data with a MySQL database. This project is a RESTful API that manages farms and their crops, following a layered architecture to ensure scope separation and easy code maintenance.",
        ...commonDataList[5]
    },
    {
        id: 6,
        title: "Employee Database Manager",
        description: "This project is a RESTful API plus graphic interface developed using Spring Boot (Java) and Node. It is designed to manage employee data for an ERP (Enterprise Resource Planning) system. The API provides various endpoints to interact with the employee data.",
        ...commonDataList[6]
    },
    {
        id: 7,
        title: "Recipe Sharing App",
        description: "A front-end application that consumes data from a public API, allowing users to search for and store culinary recipes. Users can favorite and share recipes. The application includes pages for logging in, following recipes, favoriting recipes, completed recipes, and more.",
        ...commonDataList[7]
    }
];

//List of Projects in portuguese
const listOfWorksPtBr = [
    {
        id: 0,
        title: "iBar — SaaS de gestão para bares e restaurantes",
        description: "Produto por assinatura, em uso real em estabelecimento comercial. PWA offline-first em que comandas, mesas, venda rápida, fiado, cardápio e relatórios continuam funcionando por dias sem internet: o Dexie (IndexedDB) é a fonte da verdade local e uma outbox sincroniza com o Supabase quando a rede volta, resolvendo conflitos pelo timestamp mais novo e propagando as mudanças por Realtime para todos os aparelhos no mesmo login. Arquitetura em três camadas, testes com Vitest e Playwright, e build desktop com Electron.",
        ...commonDataList[0]
    },
    {
        id: 1,
        title: "iBar Delivery — Loja online de pedidos",
        description: "A loja online do iBar. O cliente vê o cardápio pelo celular, escolhe entrega, retirada ou mesa (pelo QR code), paga com Pix, dinheiro ou cartão e acompanha o pedido até chegar. Preço e cardápio vêm sempre do servidor por RPC no Postgres, então o front nunca é dono do preço. O pedido só vira venda quando o caixa conclui, com baixa de estoque.",
        ...commonDataList[1]
    },
    {
        id: 2,
        title: "Bate Ponto — PWA de controle de ponto",
        description: "Aplicativo web para bater ponto pelo celular. Registra entrada e saída, define o expediente por dia da semana e acompanha faltas e banco de horas. Funciona offline com Dexie (IndexedDB) e sincroniza com o Supabase, enquanto os lembretes chegam com o app fechado via Web Push e Edge Function.",
        ...commonDataList[2]
    },
    {
        id: 3,
        title: "Website para Psicóloga autônoma",
        description: "Site da psicóloga Thatiane Araújo Souza, no ar e captando pacientes. Apresenta a profissional, suas especialidades e depoimentos de pacientes, e deixa o agendamento a um clique pelo WhatsApp. Servido por uma aplicação Node/Express em contêiner Docker, com deploy na Fly.io.",
        ...commonDataList[3]
    },
    {
        id: 4,
        title: "Website de Loja de Eletrônicos",
        description: "Website construído com React para divulgação de loja local focada na venda de brinquedos, eletrônicos e acessórios para celular. Esta plataforma facilita a venda de produtos e a divulgação da marca.",
        ...commonDataList[4]
    },
    {
        id: 5,
        title: "Farms Manager (Back-end)",
        description: "Uma aplicação back-end Java desenvolvida utilizando o ecossistema Spring, especificamente o Spring Boot Web e o Spring Data com um banco de dados MySQL. Este projeto é uma API RESTful que gerencia fazendas e suas plantações, seguindo uma arquitetura em camadas para garantir a separação de escopos e a fácil manutenção do código.",
        ...commonDataList[5]
    },
    {
        id: 6,
        title: "Gerenciador de base de dados de Funcionários",
        description: "Este projeto é uma API RESTful com interface gráfica desenvolvida usando Spring Boot (Java) e Node. Foi projetado para gerenciar dados de funcionários para um sistema ERP (Enterprise Resource Planning). A API fornece vários endpoints para interagir com os dados do funcionário.",
        ...commonDataList[6]
    },
    {
        id: 7,
        title: "App de Compartilhar Receitas",
        description: "Uma aplicação front-end que consome dados de uma API pública, permitindo aos usuários pesquisar e armazenar receitas culinárias. Os usuários podem favoritar e compartilhar receitas. A aplicação inclui páginas para login, seguir receitas, favoritar receitas, receitas concluídas e mais.",
        ...commonDataList[7]
    }
];

export { listOfWorks, listOfWorksPtBr };
