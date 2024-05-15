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

const PortugueseContent = {
    heading: "Ítalo Araújo",
    aboutMe: "Sobre mim",
    aboutMeText: "Texto sobre mim",
    works: "Trabalhos",
    listOfWorks: listOfWorksPtBr,
};

const EnglishContent = {
    heading: "Italo Araujo",
    aboutMe: "About me",
    aboutMeText: "Text about me",
    works: "Works",
    listOfWorks: listOfWorks,
};


export { PortugueseContent, EnglishContent };