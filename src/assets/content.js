import { listOfWorksPtBr, listOfWorks } from "./projects.js";

//List of skills with their respective badge links
const listOfSkills = [
    { id: 0, name: "JavaScript", badgeLink: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { id: 1, name: "TypeScript", badgeLink: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
    { id: 2, name: "React", badgeLink: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
    { id: 3, name: "Redux", badgeLink: "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" },
    { id: 4, name: "React Hooks", badgeLink: "https://img.shields.io/badge/React_Hooks-61DAFB?style=for-the-badge&logo=react&logoColor=black" },
    { id: 5, name: "Git", badgeLink: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { id: 6, name: "HTML", badgeLink: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
    { id: 7, name: "CSS", badgeLink: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
    { id: 8, name: "Tailwind CSS", badgeLink: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
    { id: 9, name: "Unit Testing", badgeLink: "https://img.shields.io/badge/Testing-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" },
    { id: 10, name: "Python", badgeLink: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { id: 11, name: "Object-Oriented Programming (OOP)", badgeLink: "https://img.shields.io/badge/OOP-1D1D1D?style=for-the-badge&logo=oop&logoColor=white" },
    { id: 12, name: "Docker", badgeLink: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { id: 13, name: "MySQL", badgeLink: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
    { id: 14, name: "Node.js", badgeLink: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white" },
    { id: 15, name: "Express", badgeLink: "https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" },
    { id: 16, name: "Integration Testing", badgeLink: "https://img.shields.io/badge/Integration_Testing-6DB33F?style=for-the-badge&logo=testing&logoColor=white" },
    { id: 17, name: "REST", badgeLink: "https://img.shields.io/badge/REST-008080?style=for-the-badge&logo=rest&logoColor=white" },
    { id: 18, name: "JSON Web Token (JWT)", badgeLink: "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" },
    { id: 19, name: "ORM (Sequelize)", badgeLink: "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" },
    { id: 20, name: "Java", badgeLink: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=coffeescript&logoColor=white" },
    { id: 21, name: "Maven", badgeLink: "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white" },
    { id: 22, name: "Spring", badgeLink: "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" },
    { id: 23, name: "Spring Boot", badgeLink: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" },
    { id: 24, name: "Spring Data JPA", badgeLink: "https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white" },
    { id: 25, name: "JUnit 5", badgeLink: "https://img.shields.io/badge/JUnit_5-25A162?style=for-the-badge&logo=junit5&logoColor=white" },
    { id: 26, name: "Spring Security", badgeLink: "https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white" },
    { id: 27, name: "Agile Methodologies", badgeLink: "https://img.shields.io/badge/Agile-003366?style=for-the-badge&logo=agile&logoColor=white" },
    { id: 28, name: "GPT", badgeLink: "https://img.shields.io/badge/GPT-8B0000?style=for-the-badge&logo=openai&logoColor=white"},
    { 
        id: 29, 
        name: "Styled-Components", 
        badgeLink: "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" 
    },
    { 
        id: 30, 
        name: "Vite", 
        badgeLink: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" 
    },
    {
        id: 31,
        name: "PostgreSQL",
        badgeLink: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"
    },
    {
        id: 32,
        name: "Supabase",
        badgeLink: "https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"
    },
    {
        id: 33,
        name: "PWA",
        badgeLink: "https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white"
    },
    {
        id: 34,
        name: "Dexie (IndexedDB)",
        badgeLink: "https://img.shields.io/badge/Dexie_(IndexedDB)-1E3A5F?style=for-the-badge&logo=dexie&logoColor=white"
    },
    {
        id: 35,
        name: "Framer Motion",
        badgeLink: "https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"
    },
    {
        id: 36,
        name: "Vitest",
        badgeLink: "https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white"
    },
    {
        id: 37,
        name: "Vercel",
        badgeLink: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
    },
    {
        id: 38,
        name: "Playwright",
        badgeLink: "https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"
    },
    {
        id: 39,
        name: "Web Push",
        badgeLink: "https://img.shields.io/badge/Web_Push-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white"
    },
    {
        id: 40,
        name: "Electron",
        badgeLink: "https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white"
    }
    ];
    

function changeBadgeStyle(skill) {
    const newSkill = skill;
    newSkill.badgeLink = skill.badgeLink.replace("for-the-badge", "flat-square");
    return newSkill;
}

// Filters based on an array of ids and changes the badge style to flat-square, the result follows the order of the array "ids"
function filterAndChangeBadgeStyle(ids) {
    const filteredSkills = listOfSkills.filter(skill => ids.includes(skill.id));
    const result = ids.map(id => filteredSkills.find(skill => skill.id === id));
    return result.map(skill => changeBadgeStyle(skill));
}
  
const aboutMeText = [ `
<div>
    Olá! Meu nome é Ítalo Araújo e sou graduado em Engenharia Química pela PUC-MG e pela University of Maryland (EUA). Também sou formado em Desenvolvimento Web FullStack pela Trybe.
    <p>Sou apaixonado por resolver problemas, criar ferramentas úteis, intuitivas e agradáveis de usar. Estou sempre pronto para aprender e me desenvolver.
        Tenho conhecimento e experiência na construção de soluções web completas, desde o front-end até o back-end, utilizando as melhores práticas do mercado.
    </p>
    <p> Já superei desafios em diversas situações e com diferentes pessoas, assim, estou sempre aberto à comunicação e ao trabalho em equipe.</p>
    <p> Vamos construir algo incrível juntos! Entre em contato. </p>
</div>
`,
`<div>
    Hello! My name is Ítalo Araújo, and I have a degree in Chemical Engineering from PUC-MG and the University of Maryland (USA). I also graduated in FullStack Web Development from Trybe.
    <p>I am passionate about solving problems and creating useful, intuitive, and enjoyable tools. I am always ready to learn and grow.
        I have knowledge and experience in building complete web solutions, from front-end to back-end, using the best practices in the industry.
    </p>
    <p> I have overcome challenges in various situations and with different people, so I am always open to communication and teamwork.</p>
    <p> Let's build something amazing together! Get in touch. </p>
</div>
`
];

const formContent = [
    {   placeHolderName: "Nome",
        nameRequired: "Por favor, insira seu nome",
        placeHolderEmail: "Email",
        invalidEmail: "Endereço de email inválido",
        emailRequired: "Por favor, insira seu email",
        placeHolderPhone: "Telefone",
        phoneRequired: "Por favor, insira seu número de telefone",
        placeHolderMessage: "Mensagem",
        messageRequired: "Por favor, insira uma mensagem",
        messageSuccess: "Mensagem enviada com sucesso!",
        messageProblem: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
        sending: "Enviando...",
        send: "Enviar"
    },  
    {   placeHolderName: "Name",
        nameRequired: "Please enter your name",
        placeHolderEmail: "Email",
        invalidEmail: "Invalid email address",
        emailRequired: "Please enter your email",
        placeHolderPhone: "Phone",
        phoneRequired: "Please enter your phone number",
        placeHolderMessage: "Message",
        messageRequired: "Please enter a message",
        messageSuccess: "Message sent successfully!",
        messageProblem: "There was a problem sending your message. Please try again later.",
        sending: "Sending...",
        send: "Send"},
]

const PortugueseContent = {
    heading: "Ítalo Araújo",
    aboutMe: `<div>
    <p>Engenheiro</p>
    <p>Desenvolvolvedor Web</p>
    <p>Full Stack</p>
    </div>`,
    aboutMeText: aboutMeText[0],
    skills: "Habilidades",
    listOfSkills: listOfSkills,
    works: "Trabalhos",
    listOfWorks: listOfWorksPtBr,
    contact: "Contato",
    contactText: `<div>Entre em contato comigo! <p>Telefone: (31) 99538 - 5299</p></div>`,
    formContent: formContent[0]
};

const EnglishContent = {
    heading: "Italo Araujo",
    aboutMe: `<div>
    <p>Full-Stack</p>
    <p>Web Developer</p>
    <p>Engineer</p>
    </div>
    `,
    aboutMeText: aboutMeText[1],
    skills: "Skills",
    listOfSkills: listOfSkills,
    works: "Works",
    listOfWorks: listOfWorks,
    contact: "Contact",
    contactText: `<div>Get in touch with me! <p>Phone: +55 (31) 99538 - 5299</p></div>`,
    formContent: formContent[1]
};


export { PortugueseContent, EnglishContent, filterAndChangeBadgeStyle };