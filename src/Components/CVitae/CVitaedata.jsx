import React from "react";
import { RiArrowRightDownFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

// ====================== EXPERIENCE ======================
export const experience = {
  title: "Expériences professionnelles",
  description: "Mon parcours professionnel et mes stages",
  items: [
    {
      company: "Hôtel du Parc",
      position: "Réceptionniste",
      duration: "2023 - 2024",
      description: "Accueil et gestion de la clientèle, organisation administrative.",
      location: "Lyon, France",
    },
    {
      company: "Association des Étudiants et Stagiaires Africains en Tunisie",
      position: "Chargée des affaires extérieures et des partenariats",
      duration: "12/2023 - 09/2023",
      description: "Gestion des partenariats et développement des relations avec les acteurs locaux.",
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
    }
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
        { icon: <RiArrowRightDownFill />, name: "Visual Studio Code" },
        { icon: <RiArrowRightDownFill />, name: "Eclipse" },
        { icon: <RiArrowRightDownFill />, name: "Android Studio" },
        { icon: <RiArrowRightDownFill />, name: "Git" },
        { icon: <RiArrowRightDownFill />, name: "MATLAB" },
        { icon: <RiArrowRightDownFill />, name: "NET / Visual Studio" },
        { icon: <RiArrowRightDownFill />, name: "NetBeans" },
      ],
    },
    {
      categoryName: "Langages de programmation",
      items: [
        { icon: <RiArrowRightDownFill />, name: "Java" },
        { icon: <RiArrowRightDownFill />, name: "Kotlin" },
        { icon: <RiArrowRightDownFill />, name: "Python" },
        { icon: <RiArrowRightDownFill />, name: "C / C++ / C#" },
      ],
    },
    {
      categoryName: "Développement web",
      items: [
        { icon: <IoLogoHtml5 />, name: "HTML" },
        { icon: <RiArrowRightDownFill />, name: "CSS" },
        { icon: <RiArrowRightDownFill />, name: "JavaScript" },
        { icon: <RiArrowRightDownFill />, name: "Bootstrap" },
        { icon: <RiArrowRightDownFill />, name: "XML / XSL" },
        { icon: <RiReactjsLine />, name: "React-Redux" },
        { icon: <RiArrowRightDownFill />, name: "PHP" },
      ],
    },
        
    {
      categoryName: "Bases de données",
      items: [
        { icon: <FaNodeJs />, name: "SQL" },
        { icon: <FaNodeJs />, name: "Oracle" },
        { icon: <FaNodeJs />, name: "MySQL" },
        { icon: <FaNodeJs />, name: "MongoDB" },
      ],
    },
    {
      categoryName: "Méthodes & gestion de projet",
      items: [
        { icon: <BiLogoTypescript />, name: "Méthodes Agile (Scrum)" },
        { icon: <BiLogoTypescript />, name: "Analyse des besoins" },
        { icon: <BiLogoTypescript />, name: "Conception UML" },
        { icon: <BiLogoTypescript />, name: "Rédaction de cahiers des charges" },
      ],
    },
    {
      categoryName: "Analyse de données & visualisation",
     items: [
        { icon: <RiArrowRightDownFill />, name: "Python (Pandas, NumPy)" },
        { icon: <RiArrowRightDownFill />, name: "R" },
        { icon: <RiArrowRightDownFill />, name: "Matplotlib / Seaborn" },
      ],
    },
    {
      categoryName: "Tests & qualité",
      items: [
        { icon: <FaGithub />, name: "Tests unitaires / fonctionnels" },
        { icon: <FaGithub />, name: "Documentation / Validation fonctionnelle" },
      ],
    },
  
  ],
};

// ====================== association ======================
export const association = {
  title: "Associations",
  description: "Mon engagement dans les associations, souvent en tant que responsable de l'organisation et de la communication, reflète mon désir de contribuer activement à la communauté.",
  items: [
    {
      position: "Membre",
      organization: "ARTICLE1",
      location: "Lyon, France",
      duration: "2023 - Présent",
      role: "Mentoré",
      description: "Accompagnement et mentorat de nouveaux membres dans l'association."
    },
    {
      position: "Membre",
      organization: "AJEGUIR",
      location: "Lyon, France",
      duration: "2023 - Présent",
      role: "Bénévole",
      description: "Participation active aux événements et missions de l'association."
    },
    {
      position: "Chargée aux affaires extérieures",
      organization: "AESAT",
      location: "Sousse, Tunisie",
      duration: "12-2022 - 09-2023",
      role: "Chargée de partenariats",
      description: "Gestion des partenariats et des relations extérieures."
    },
    {
      position: "Secrétaire Générale",
      organization: "CESGUIT",
      location: "Sousse, Tunisie",
      duration: "11-2021 - 12-2022",
      role: "Organisation d'activités",
      description: "Organisation d'activités culturelles, sportives et scientifiques."
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
      fieldValue: "MariamaFofana #href'linkedin.com/in/m-fofana/'",
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
