const srcs = ["https://live.staticflickr.com/65535/53724012970_054b3fc38a_b.jpg"]

const listOfWorksPtBr = [ {
    title: "Trabalho 1",
    src: srcs[0],
    description: "Descrição do trabalho 1"
}];

const listOfWorks = [ {
    title: "Work 1",
    src: srcs[0],
    description: "Description of work 1"
}];

const aboutMeText = [ `
<p>Olá! Meu nome é Ítalo e sou um <span class="text-xl font-bold text-brand-2">desenvolvedor web</span> full stack. Com uma formação abrangente e certificada, adquiri habilidades robustas tanto em front-end quanto em back-end.</p>

<p>Minha abordagem é sempre focada na entrega de código limpo e eficiente, buscando continuamente aprender e aplicar as melhores práticas da indústria. Estou sempre pronto para enfrentar novos desafios e colaborar em projetos que exijam tanto criatividade quanto precisão técnica.</p>

<p>Estou pronto para colaborar com você e transformar suas ideias em realidade. Vamos construir algo incrível juntos!</p>
`,
`<p>Hello! My name is Ítalo and I am a full stack <span class="text-xl font-bold text-brand-2"> web developer</span>. With a comprehensive and certified background, I have acquired strong skills in both front-end and back-end development.</p>

<p>My approach is always focused on delivering clean and efficient code, continuously seeking to learn and apply the best industry practices. I am always ready to take on new challenges and collaborate on projects that require both creativity and technical precision.</p>

<p>I am ready to collaborate with you and turn your ideas into reality. Let's build something amazing together!</p>`
];

const PortugueseContent = {
    heading: "Ítalo Araújo",
    aboutMe: "Sobre mim",
    aboutMeText: aboutMeText[0],
    works: "Trabalhos",
    listOfWorks: listOfWorksPtBr,
    contact: "Contato",
    contactText: "Entre em contato comigo! Telefone: (31) 99538 - 5299",
};

const EnglishContent = {
    heading: "Italo Araujo",
    aboutMe: "About me",
    aboutMeText: aboutMeText[1],
    works: "Works",
    listOfWorks: listOfWorks,
    contact: "Contact",
    contactText: "Get in touch with me! Phone: +55 (31) 99538 - 5299",
};


export { PortugueseContent, EnglishContent };