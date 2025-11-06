import React from "react";
import { SiEclipseide, SiApachenetbeanside, SiUml, SiSitepoint } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { FcScatterPlot } from "react-icons/fc";
import { BiSolidAnalyse } from "react-icons/bi";
// ====================== EXPERIENCE ======================
export const experience = {
  title: "Expériences professionnelles",
  description: "Mon parcours professionnel et mes stages",
  items: [
    {
      company: "Hôtel du Parc",
      position: "Réceptionniste",
      duration: "2023 - 2024",
      description:
        "Accueil et gestion de la clientèle, organisation administrative.",
      location: "Lyon, France",
    },
    {
      company: "Association des Étudiants et Stagiaires Africains en Tunisie",
      position: "Chargée des affaires extérieures et des partenariats",
      duration: "12/2023 - 09/2023",
      description:
        "Gestion des partenariats et développement des relations avec les acteurs locaux.",
      location: "Sousse, Tunisie",
    },
    {
      company: "Software and Security Solutions",
      position: "Stagiaire Développeur Frontend React/Redux",
      duration: "06/2023 - 07/2023",
      description:
        "Développement d'un projet de gestion pour une quincaillerie : analyse des besoins, conception d'interface utilisateur et développement des fonctionnalités.",
      location: "Gafsa, Tunisie",
    },
    {
      company: "Police Guinéenne",
      position: "Stagiaire en gestion de projet informatique",
      duration: "12/2020 - 02/2021",
      description:
        "Participation à l'installation de caméras de surveillance dans Conakry : reprise d'un projet en cours, suivi des livrables et gestion des évolutions.",
      location: "Conakry, Guinée",
    },
    {
      company: "Ets Fredj Bhouri",
      position: "Stagiaire en Électricité du Bâtiment",
      duration: "05/2019 - 06/2019",
      description:
        "Installation complète et maintenance du système électrique d'un bâtiment résidentiel.",
      location: "Monastir, Tunisie",
    },
    {
      company: "ELECTRO TEL",
      position: "Stagiaire en Installation de Systèmes de Sécurité",
      duration: "2018 - 02/2019",
      description:
        "Mise en place de dispositifs de sécurité essentiels : alarmes, détecteurs de gaz et autres équipements.",
      location: "Monastir, Tunisie",
    },
    {
      company: "Société Nationale des Télécommunications",
      position: "Stagiaire en Télécommunications",
      duration: "05/2018 - 06/2018",
      description:
        "Conception, configuration et déploiement des technologies VDSL et ADSL dans les infrastructures de télécommunication.",
      location: "Monastir, Tunisie",
    },
  ],
};
// ====================== formation ======================
export const education = {
  title: "Mes Formations",
  description: "Mon parcours académique et mes compétences acquises",
  items: [
    {
      ecole: "CESI Lyon ",
      diplome: "Ingénierie Informatique (Section anglophone) ",
      specialite: "Majeure : Data Science & Intelligence Artificielle",
      duration: "2025 – Présent",
      location: "Lyon, France",
      description:
        "Algorithmique avancée, statistiques et probabilités, big data, machine learning. Intégration d’IA dans des applications.",
    },
    {
      ecole: "INSA Lyon",
      diplome: "Ingénieur Informatique",
      specialite: "Spécialité Informatique",
      duration: "2023 - 2025",
      location: "Lyon, France",
      description:
        "Cours suivis : méthodes de conception, algorithmique, langages de programmation, systèmes d’exploitation",
    },
    {
      ecole: "EPI Digital School",
      diplome: "Préparation au diplôme d'ingénieur en Informatique",
      specialite: "Option Génie Logiciel",
      duration: "2021 - 2023",
      location: "Sousse, Tunisie",
      description:
        "Compétences développées : gestion de projets IT, méthodes de développement, développement web et mobile, expérience utilisateur",
    },
    {
      ecole: "CSFMI de Khniss Bembla",
      diplome: "Technicien Supérieur en Domotique",
      specialite: "",
      duration: "2018 - 2020",
      location: "Monastir, Tunisie",
      description:
        "Compétences : informatique bureautique, conception et réalisation de systèmes de sécurité",
    },
    {
      ecole: "Saint-Georges",
      diplome: "Baccalauréat en Sciences Mathématiques",
      specialite: "Mention Bien",
      duration: "2014 - 2017",
      location: "Conakry, Guinée",
      description: "",
    },
  ],
};

// ====================== skills ======================
export const skills = {
  title: "Compétences",
  description: "Mes compétences techniques et outils maîtrisés",
  skillList: [
    {
      categoryName: "Environnements & Outils",
      items: [
        {
          icon: <i className="devicon-vscode-plain colored"></i>,
          name: "Visual Studio Code",
        },
        {
          icon: <SiEclipseide className="skill-icon" />,
          name: "Eclipse",
        },
        {
          icon: <i className="devicon-androidstudio-plain colored"></i>,
          name: "Android Studio",
        },
        {
          icon: <i className="devicon-github-original colored"></i>,
          name: "GitHub",
        },
        {
          icon: <i className="devicon-matlab-plain colored"></i>,
          name: "MATLAB",
        },
        {
          icon: <i className="devicon-visualstudio-plain colored"></i>,
          name: "NET / Visual Studio",
        },
        {
          icon: <SiApachenetbeanside className="skill-icon" />,
          name: "NetBeans",
        },
      ],
    },
    {
      categoryName: "Langages de programmation",
      items: [
        { icon: <i className="devicon-java-plain colored"></i>, name: "Java" },
        {
          icon: <i className="devicon-kotlin-plain colored"></i>,
          name: "Kotlin",
        },
        {
          icon: <i className="devicon-python-plain colored"></i>,
          name: "Python",
        },
        {
          icon: <FaCode className="skill-icon"/>,
          name: "C / C++ / C#",
        },
      ],
    },
    {
      categoryName: "Développement web",
      items: [
        { icon: <i className="devicon-html5-plain colored"></i>, name: "HTML" },
        { icon: <i className="devicon-css3-plain colored"></i>, name: "CSS" },
        {
          icon: <i className="devicon-javascript-plain colored"></i>,
          name: "JavaScript",
        },
        {
          icon: <i className="devicon-bootstrap-plain colored"></i>,
          name: "Bootstrap",
        },
        {
          icon: <BsFiletypeXml className="skill-icon"/>,
          name: "XML / XSL",
        },
        {
          icon: <i className="devicon-react-original colored"></i>,
          name: "React / Redux",
        },
        { icon: <i className="devicon-php-plain colored"></i>, name: "PHP" },
      ],
    },

    {
      categoryName: "Bases de données",
      items: [
        {
          icon: <AiOutlineConsoleSql className="skill-icon"/>,
          name: "SQL",
        },
        {
          icon: <i className="devicon-oracle-original colored"></i>,
          name: "Oracle",
        },
        {
          icon: <GrMysql className="skill-icon"/>,
          name: "MySQL",
        },
        {
          icon: <i className="devicon-mongodb-plain colored"></i>,
          name: "MongoDB",
        },
      ],
    },
    {
      categoryName: "Méthodes & gestion de projet",
      items: [
        {
          icon: <i className="devicon-trello-plain colored"></i>,
          name: "Méthodes Agile (Scrum)",
        },
        {
          icon: <BiSolidAnalyse className="skill-icon"/>,
          name: "Analyse des besoins",
        },
        {
          icon: <SiUml className="skill-icon"/>,
          name: "Conception UML",
        },
        {
          icon: <i className="devicon-confluence-original colored"></i>,
          name: "Rédaction de cahiers des charges",
        },
      ],
    },

    {
      categoryName: "Analyse de données & visualisation",
      items: [
        {
          icon: <i className="devicon-python-plain colored"></i>,
          name: "Python (Pandas, NumPy)",
        },
        { icon: <i className="devicon-r-original colored"></i>, name: "R" },
         {
        icon: <FcScatterPlot className="skill-icon"/>,
        name: "Matplotlib"
      }
      ],
    },
    {
      categoryName: "Tests & qualité",
      items: [
        {
          icon: <SiSitepoint  className="skill-icon"/>,
          name: "Tests unitaires / fonctionnels",
        },
        {
          icon: <i className="devicon-gitlab-plain colored"></i>,
          name: "Documentation / Validation fonctionnelle",
        },
      ],
    },
  ],
};

// ====================== association ======================
export const association = {
  title: "Associations",
  description:
    "Mon engagement dans les associations, souvent en tant que responsable de l'organisation et de la communication, reflète mon désir de contribuer activement à la communauté.",
  items: [
    {
      position: "Membre",
      organization: "ARTICLE1",
      location: "Lyon, France",
      duration: "2023 - Présent",
      role: "Mentoré",
      description:
        "Accompagnement et mentorat de nouveaux membres dans l'association.",
    },
    {
      position: "Membre",
      organization: "AJEGUIR",
      location: "Lyon, France",
      duration: "2023 - Présent",
      role: "Bénévole",
      description:
        "Participation active aux événements et missions de l'association.",
    },
    {
      position: "Chargée aux affaires extérieures",
      organization: "AESAT",
      location: "Sousse, Tunisie",
      duration: "12-2022 - 09-2023",
      role: "Chargée de partenariats",
      description: "Gestion des partenariats et des relations extérieures.",
    },
    {
      position: "Secrétaire Générale",
      organization: "CESGUIT",
      location: "Sousse, Tunisie",
      duration: "11-2021 - 12-2022",
      role: "Organisation d'activités",
      description:
        "Organisation d'activités culturelles, sportives et scientifiques.",
    },
  ],
};

// ====================== apropos de moi ======================
export const about = {
  title: "À propos de moi",
  description: "Présentation rapide de mon profil et de mes coordonnées",
  info: [
    {
      fieldName: "Nom",
      fieldValue: "Fofana Mariama",
    },
    {
      fieldName: "Téléphone",
      fieldValue: "(+33) 6 04 09 38 06",
    },
    {
      fieldName: "Expérience",
      fieldValue: "2 ans",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Mariama Fofana",
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Guinéenne",
    },
    {
      fieldName: "Email",
      fieldValue: "MariamaFof9@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "/ À définir",
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais, Espagnol",
    },
    {
      fieldName: "Mobilité",
      fieldValue: "France, Lyon , Toulouse ,Besancon, Paris",
    },
  ],
};
