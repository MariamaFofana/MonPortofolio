import React from "react";
import { SiEclipseide, SiApachenetbeanside, SiUml, SiSitepoint } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";
import { FcScatterPlot } from "react-icons/fc";
import { BiSolidAnalyse } from "react-icons/bi";

import logoCesi from "../../IMAGES/CESI-1024x1024.webp";
import logoEpi from "../../IMAGES/epi.png";
import logoCSFMI from "../../IMAGES/images.png";
import logoInsa from "../../IMAGES/insa.png";
import logoSG from "../../IMAGES/saintgeorge.jpg";

// ====================== EXPERIENCE ======================
export const experience = {
  fr: {
    title: "Expériences professionnelles",
    description: "Mon parcours professionnel et mes stages",
    items: [
      {
        company: "Hôtel du Parc",
        position: "Réceptionniste",
        duration: "2023 - 2024",
        location: "Lyon, France",
        description: "Accueil et gestion de la clientèle, organisation administrative.",
        missions: [
          "Accueil physique et téléphonique des clients",
          "Gestion des réservations et plannings",
          "Coordination avec les services pour un service optimal"
        ]
      },
      {
        company: "Emploi déclaré (URSSAF)",
        position: "Accompagnatrice de personne en situation de handicap",
        duration: "2024 - Présent",
        location: "Lyon, France",
        description: "Accompagnement personnalisé au quotidien pour favoriser l'autonomie, l'inclusion sociale et l'épanouissement à travers des activités culturelles et de loisirs.",
        missions: [
          "Organisation et participation à des sorties culturelles et événements majeurs à Lyon (Fête des Lumières, Biennale, braderies)",
          "Accompagnement lors des cours de rééducation et suivi des activités de la vie quotidienne",
          "Création d'un lien de confiance et stimulation de la vie sociale et du bien-être"
        ]
      },
      {
        company: "Sonoya Technology",
        position: "Stagiaire Développeuse Web (Symfony / Angular)",
        duration: "02/2026 - 04/2026",
        location: "Kaloum, Guinée",
        description: "Développement d’une plateforme web de gestion de projets (suivi, budget, ressources) et conception d'API REST.",
        missions: [
          "Développement d’une plateforme web de gestion de projets (suivi, budget, ressources)",
          "Développement d’API REST pour la gestion des données",
          "Mise en place de tableaux de bord et indicateurs (KPI)",
          "Analyse des données projets (coûts, avancement)",
          "Tests des API avec Postman"
        ]
      },
      {
        company: "Software and Security Solutions",
        position: "Stagiaire Développeur Frontend React/Redux",
        duration: "06/2023 - 07/2023",
        location: "Gafsa, Tunisie",
        description: "Développement d'un projet de gestion pour une quincaillerie : analyse des besoins, conception d'interface utilisateur et développement des fonctionnalités.",
        missions: [
          "Analyse des besoins et conception des interfaces utilisateur",
          "Développement des composants front-end avec React et Redux",
          "Intégration des fonctionnalités de gestion"
        ]
      },
      {
        company: "Police Guinéenne",
        position: "Stagiaire en gestion de projet informatique",
        duration: "12/2020 - 02/2021",
        location: "Conakry, Guinée",
        description: "Participation à l'installation de caméras de surveillance dans Conakry : reprise d'un projet en cours, suivi des livrables et gestion des évolutions.",
        missions: [
          "Reprise et suivi d'un projet informatique en cours",
          "Coordination pour l'installation de caméras de surveillance",
          "Suivi des livrables et gestion des évolutions techniques"
        ]
      },
      {
        company: "Ets Fredj Bhouri",
        position: "Stagiaire en Électricité du Bâtiment",
        duration: "05/2019 - 06/2019",
        location: "Monastir, Tunisie",
        description: "Installation complète et maintenance du système électrique d'un bâtiment résidentiel.",
        missions: [
          "Installation complète du système électrique",
          "Maintenance et vérification de la conformité des installations"
        ]
      },
      {
        company: "ELECTRO TEL",
        position: "Stagiaire en Installation de Systèmes de Sécurité",
        duration: "2018 - 02/2019",
        location: "Monastir, Tunisie",
        description: "Mise en place de dispositifs de sécurité essentiels : alarmes, détecteurs de gaz et autres équipements.",
        missions: [
          "Mise en place de dispositifs de sécurité (alarmes, détecteurs)",
          "Configuration et test des équipements de protection"
        ]
      },
      {
        company: "Société Nationale des Télécommunications",
        position: "Stagiaire en Télécommunications",
        duration: "05/2018 - 06/2018",
        location: "Monastir, Tunisie",
        description: "Conception, configuration et déploiement des technologies VDSL et ADSL dans les infrastructures de télécommunication.",
        missions: [
          "Configuration et déploiement des technologies VDSL et ADSL",
          "Intervention sur les infrastructures de télécommunication"
        ]
      }
    ]
  },
  en: {
    title: "Professional Experience",
    description: "My career path and internships",
    items: [
      {
        company: "Hôtel du Parc",
        position: "Receptionist",
        duration: "2023 - 2024",
        location: "Lyon, France",
        description: "Customer service management and administrative organization.",
        missions: [
          "Physical and telephone customer reception",
          "Reservation and schedule management",
          "Coordination with departments for optimal service"
        ]
      },
      {
        company: "Declared Employment (URSSAF)",
        position: "Support Assistant for People with Disabilities",
        duration: "2024 - Present",
        location: "Lyon, France",
        description: "Personalized daily support to promote autonomy, social inclusion, and well-being through cultural and leisure activities.",
        missions: [
          "Organization and participation in cultural outings and major events in Lyon (Fête des Lumières, Biennale, local markets)",
          "Support during rehabilitation sessions and daily living activity tracking",
          "Building a relationship of trust and stimulating social life and well-being"
        ]
      },
      {
        company: "Sonoya Technology",
        position: "Web Developer Intern (Symfony / Angular)",
        duration: "02/2026 - 04/2026",
        location: "Kaloum, Guinea",
        description: "Development of a project management web platform (tracking, budget, resources) and REST API design.",
        missions: [
          "Development of a project management web platform (tracking, budget, resources)",
          "Development of REST APIs for data management",
          "Implementation of dashboards and key performance indicators (KPIs)",
          "Project data analysis (costs, progress)",
          "API testing using Postman"
        ]
      },
      {
        company: "Software and Security Solutions",
        position: "React/Redux Frontend Developer Intern",
        duration: "06/2023 - 07/2023",
        location: "Gafsa, Tunisia",
        description: "Development of a management project for a hardware store: requirements analysis, UI design, and feature development.",
        missions: [
          "Requirements analysis and user interface design",
          "Frontend component development with React and Redux",
          "Integration of management features"
        ]
      },
      {
        company: "Guinean Police",
        position: "IT Project Management Intern",
        duration: "12/2020 - 02/2021",
        location: "Conakry, Guinea",
        description: "Participation in installing surveillance cameras in Conakry: taking over an ongoing project, tracking deliverables, and change management.",
        missions: [
          "Taking over and monitoring an ongoing IT project",
          "Coordination for surveillance camera installation",
          "Deliverable tracking and technical change management"
        ]
      },
      {
        company: "Ets Fredj Bhouri",
        position: "Building Electricity Intern",
        duration: "05/2019 - 06/2019",
        location: "Monastir, Tunisia",
        description: "Complete electrical system installation and maintenance for a residential building.",
        missions: [
          "Complete installation of the electrical system",
          "Maintenance and verification of installation compliance"
        ]
      },
      {
        company: "ELECTRO TEL",
        position: "Security Systems Installation Intern",
        duration: "2018 - 02/2019",
        location: "Monastir, Tunisia",
        description: "Setup of essential security devices: alarms, gas detectors, and other equipment.",
        missions: [
          "Setup of security devices (alarms, detectors)",
          "Configuration and testing of protective equipment"
        ]
      },
      {
        company: "National Telecommunications Company",
        position: "Telecommunications Intern",
        duration: "05/2018 - 06/2018",
        location: "Monastir, Tunisia",
        description: "Design, configuration, and deployment of VDSL and ADSL technologies within telecommunication infrastructures.",
        missions: [
          "Configuration and deployment of VDSL and ADSL technologies",
          "Intervention on telecommunication infrastructures"
        ]
      }
    ]
  }
};

// ====================== EDUCATION ======================
export const education = {
  fr: {
    title: "Mes Formations",
    description: "Mon parcours académique et mes compétences acquises",
    items: [
      {
        duration: "2025 - Aujourd'hui",
        diplome: "Cycle Ingénieur Informatique",
        ecole: "CESI Lyon",
        specialite: "Orientation Data Engineering",
        location: "Lyon, France",
        image: logoCesi,
        subjects: ["Data Science", "IA", "Big Data", "Cloud", "BI"]
      },
      {
        duration: "2023 - 2025",
        diplome: "Ingénieur Informatique",
        ecole: "INSA Lyon",
        specialite: "Spécialité Informatique",
        location: "Lyon, France",
        image: logoInsa,
        subjects: ["Algorithmique", "Systèmes", "Conception", "Programmation"]
      },
      {
        duration: "2021 - 2023",
        diplome: "Préparation au diplôme d'ingénieur en Informatique",
        ecole: "EPI Digital School",
        specialite: "Option Génie Logiciel & Développement Web",
        location: "Sousse, Tunisie",
        image: logoEpi,
        subjects: ["Génie Logiciel", "Web & Mobile", "SQL", "UI/UX"]
      },
      {
        duration: "2018 - 2020",
        diplome: "Technicien Supérieur en Domotique",
        ecole: "CSFMI de Khniss Bembla",
        specialite: "Domotique & Systèmes de Sécurité",
        location: "Monastir, Tunisie",
        image: logoCSFMI,
        subjects: ["Informatique", "Sécurité", "Bureautique", "Conception"]
      },
      {
        duration: "2014 - 2017",
        diplome: "Baccalauréat en Sciences Mathématiques",
        ecole: "Saint-Georges",
        specialite: "Mention Bien",
        location: "Conakry, Guinée",
        image: logoSG,
        subjects: ["Mathématiques", "Sciences", "Logique"]
      }
    ]
  },
  en: {
    title: "Education",
    description: "My academic background and acquired skills",
    items: [
      {
        duration: "2025 - Present",
        diplome: "Computer Engineering Degree",
        ecole: "CESI Lyon",
        specialite: "Data Engineering Track",
        location: "Lyon, France",
        image: logoCesi,
        subjects: ["Data Science", "AI", "Big Data", "Cloud", "BI"]
      },
      {
        duration: "2023 - 2025",
        diplome: "Computer Engineering",
        ecole: "INSA Lyon",
        specialite: "Computer Science Specialty",
        location: "Lyon, France",
        image: logoInsa,
        subjects: ["Algorithms", "Systems", "Design", "Programming"]
      },
      {
        duration: "2021 - 2023",
        diplome: "Preparatory Cycle for Computer Engineering Degree",
        ecole: "EPI Digital School",
        specialite: "Software Engineering & Web Development Option",
        location: "Sousse, Tunisia",
        image: logoEpi,
        subjects: ["Software Engineering", "Web & Mobile", "SQL", "UI/UX"]
      },
      {
        duration: "2018 - 2020",
        diplome: "Higher Technician in Home Automation",
        ecole: "CSFMI de Khniss Bembla",
        specialite: "Home Automation & Security Systems",
        location: "Monastir, Tunisia",
        image: logoCSFMI,
        subjects: ["Computing", "Security", "Office Automation", "Design"]
      },
      {
        duration: "2014 - 2017",
        diplome: "High School Diploma in Mathematical Sciences",
        ecole: "Saint-Georges",
        specialite: "Honors (Mention Bien)",
        location: "Conakry, Guinea",
        image: logoSG,
        subjects: ["Mathematics", "Sciences", "Logic"]
      }
    ]
  }
};

// ====================== SKILLS ======================
export const skills = {
  fr: {
    title: "Compétences",
    description: "Mes compétences techniques et outils maîtrisés",
    skillList: [
      {
        categoryName: "Environnements & Outils",
        items: [
          { icon: <i className="devicon-vscode-plain colored"></i>, name: "Visual Studio Code" },
          { icon: <SiEclipseide className="skill-icon" />, name: "Eclipse" },
          { icon: <i className="devicon-androidstudio-plain colored"></i>, name: "Android Studio" },
          { icon: <i className="devicon-github-original colored"></i>, name: "GitHub" },
          { icon: <i className="devicon-matlab-plain colored"></i>, name: "MATLAB" },
          { icon: <i className="devicon-visualstudio-plain colored"></i>, name: "NET / Visual Studio" },
          { icon: <SiApachenetbeanside className="skill-icon" />, name: "NetBeans" },
        ],
      },
      {
        categoryName: "Langages de programmation",
        items: [
          { icon: <i className="devicon-java-plain colored"></i>, name: "Java" },
          { icon: <i className="devicon-kotlin-plain colored"></i>, name: "Kotlin" },
          { icon: <i className="devicon-python-plain colored"></i>, name: "Python" },
          { icon: <FaCode className="skill-icon"/>, name: "C / C++ / C#" },
        ],
      },
      {
        categoryName: "Développement web",
        items: [
          { icon: <i className="devicon-html5-plain colored"></i>, name: "HTML" },
          { icon: <i className="devicon-css3-plain colored"></i>, name: "CSS" },
          { icon: <i className="devicon-javascript-plain colored"></i>, name: "JavaScript" },
          { icon: <i className="devicon-bootstrap-plain colored"></i>, name: "Bootstrap" },
          { icon: <BsFiletypeXml className="skill-icon"/>, name: "XML / XSL" },
          { icon: <i className="devicon-react-original colored"></i>, name: "React / Redux" },
          { icon: <i className="devicon-php-plain colored"></i>, name: "PHP" },
        ],
      },
      {
        categoryName: "Bases de données",
        items: [
          { icon: <AiOutlineConsoleSql className="skill-icon"/>, name: "SQL" },
          { icon: <i className="devicon-oracle-original colored"></i>, name: "Oracle" },
          { icon: <GrMysql className="skill-icon"/>, name: "MySQL" },
          { icon: <i className="devicon-mongodb-plain colored"></i>, name: "MongoDB" },
        ],
      },
      {
        categoryName: "Méthodes & gestion de projet",
        items: [
          { icon: <i className="devicon-trello-plain colored"></i>, name: "Méthodes Agile (Scrum)" },
          { icon: <BiSolidAnalyse className="skill-icon"/>, name: "Analyse des besoins" },
          { icon: <SiUml className="skill-icon"/>, name: "Conception UML" },
          { icon: <i className="devicon-confluence-original colored"></i>, name: "Rédaction de cahiers des charges" },
        ],
      },
      {
        categoryName: "Analyse de données & visualisation",
        items: [
          { icon: <i className="devicon-python-plain colored"></i>, name: "Python (Pandas, NumPy)" },
          { icon: <i className="devicon-r-original colored"></i>, name: "R" },
          { icon: <FcScatterPlot className="skill-icon"/>, name: "Matplotlib" }
        ],
      },
      {
        categoryName: "Tests & qualité",
        items: [
          { icon: <SiSitepoint className="skill-icon"/>, name: "Tests unitaires / fonctionnels" },
          { icon: <i className="devicon-gitlab-plain colored"></i>, name: "Documentation / Validation fonctionnelle" },
        ],
      },
    ]
  },
  en: {
    title: "Skills",
    description: "My technical skills and mastered tools",
    skillList: [
      {
        categoryName: "Environments & Tools",
        items: [
          { icon: <i className="devicon-vscode-plain colored"></i>, name: "Visual Studio Code" },
          { icon: <SiEclipseide className="skill-icon" />, name: "Eclipse" },
          { icon: <i className="devicon-androidstudio-plain colored"></i>, name: "Android Studio" },
          { icon: <i className="devicon-github-original colored"></i>, name: "GitHub" },
          { icon: <i className="devicon-matlab-plain colored"></i>, name: "MATLAB" },
          { icon: <i className="devicon-visualstudio-plain colored"></i>, name: "NET / Visual Studio" },
          { icon: <SiApachenetbeanside className="skill-icon" />, name: "NetBeans" },
        ],
      },
      {
        categoryName: "Programming Languages",
        items: [
          { icon: <i className="devicon-java-plain colored"></i>, name: "Java" },
          { icon: <i className="devicon-kotlin-plain colored"></i>, name: "Kotlin" },
          { icon: <i className="devicon-python-plain colored"></i>, name: "Python" },
          { icon: <FaCode className="skill-icon"/>, name: "C / C++ / C#" },
        ],
      },
      {
        categoryName: "Web Development",
        items: [
          { icon: <i className="devicon-html5-plain colored"></i>, name: "HTML" },
          { icon: <i className="devicon-css3-plain colored"></i>, name: "CSS" },
          { icon: <i className="devicon-javascript-plain colored"></i>, name: "JavaScript" },
          { icon: <i className="devicon-bootstrap-plain colored"></i>, name: "Bootstrap" },
          { icon: <BsFiletypeXml className="skill-icon"/>, name: "XML / XSL" },
          { icon: <i className="devicon-react-original colored"></i>, name: "React / Redux" },
          { icon: <i className="devicon-php-plain colored"></i>, name: "PHP" },
        ],
      },
      {
        categoryName: "Databases",
        items: [
          { icon: <AiOutlineConsoleSql className="skill-icon"/>, name: "SQL" },
          { icon: <i className="devicon-oracle-original colored"></i>, name: "Oracle" },
          { icon: <GrMysql className="skill-icon"/>, name: "MySQL" },
          { icon: <i className="devicon-mongodb-plain colored"></i>, name: "MongoDB" },
        ],
      },
      {
        categoryName: "Methods & Project Management",
        items: [
          { icon: <i className="devicon-trello-plain colored"></i>, name: "Agile Methods (Scrum)" },
          { icon: <BiSolidAnalyse className="skill-icon"/>, name: "Requirements Analysis" },
          { icon: <SiUml className="skill-icon"/>, name: "UML Design" },
          { icon: <i className="devicon-confluence-original colored"></i>, name: "Specifications Writing" },
        ],
      },
      {
        categoryName: "Data Analysis & Visualization",
        items: [
          { icon: <i className="devicon-python-plain colored"></i>, name: "Python (Pandas, NumPy)" },
          { icon: <i className="devicon-r-original colored"></i>, name: "R" },
          { icon: <FcScatterPlot className="skill-icon"/>, name: "Matplotlib" }
        ],
      },
      {
        categoryName: "Testing & Quality",
        items: [
          { icon: <SiSitepoint className="skill-icon"/>, name: "Unit / Functional Testing" },
          { icon: <i className="devicon-gitlab-plain colored"></i>, name: "Documentation / Functional Validation" },
        ],
      },
    ]
  }
};

// ====================== ASSOCIATION ======================
export const association = {
  fr: {
    title: "Associations",
    description: "Mon engagement dans les associations, souvent en tant que responsable de l'organisation et de la communication, reflète mon désir de contribuer activement à la communauté.",
    items: [
      {
        position: "Membre",
        organization: "ARTICLE1",
        location: "Lyon, France",
        duration: "2023 - Présent",
        role: "Mentoré",
        description: "Accompagnement et mentorat de nouveaux membres dans l'association.",
      },
      {
        position: "Membre",
        organization: "AJEGUIR",
        location: "Lyon, France",
        duration: "2023 - Présent",
        role: "Bénévole",
        description: "Participation active aux événements et missions de l'association.",
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
        description: "Organisation d'activités culturelles, sportives et scientifiques.",
      },
    ]
  },
  en: {
    title: "Associations",
    description: "My involvement in associations, often as an organization and communication lead, reflects my desire to actively contribute to the community.",
    items: [
      {
        position: "Member",
        organization: "ARTICLE1",
        location: "Lyon, France",
        duration: "2023 - Present",
        role: "Mentee",
        description: "Support and mentoring of new members in the association.",
      },
      {
        position: "Member",
        organization: "AJEGUIR",
        location: "Lyon, France",
        duration: "2023 - Present",
        role: "Volunteer",
        description: "Active participation in events and missions of the association.",
      },
      {
        position: "External Affairs Officer",
        organization: "AESAT",
        location: "Sousse, Tunisia",
        duration: "12-2022 - 09-2023",
        role: "Partnerships Manager",
        description: "Management of partnerships and external relations.",
      },
      {
        position: "Secretary General",
        organization: "CESGUIT",
        location: "Sousse, Tunisia",
        duration: "11-2021 - 12-2022",
        role: "Activity Organization",
        description: "Organization of cultural, sports, and scientific activities.",
      },
    ]
  }
};

// ====================== À PROPOS DE MOI ======================
export const about = {
  fr: {
    title: "Profil & Coordonnées",
    description: "Informations personnelles, canaux de contact et mobilités professionnelles",
    info: [
      { fieldName: "Nom complet", fieldValue: "Fofana Mariama", icon: "ri-user-3-line" },
      { fieldName: "Téléphone", fieldValue: "(+33) 6 04 09 38 06", icon: "ri-phone-line" },
      { fieldName: "Email", fieldValue: "MariamaFof9@gmail.com", icon: "ri-mail-line" },
      { fieldName: "Expérience", fieldValue: "2 ans", icon: "ri-briefcase-4-line" },
      { fieldName: "LinkedIn", fieldValue: "Mariama Fofana", icon: "ri-linkedin-box-line" },
      { fieldName: "Nationalité", fieldValue: "Guinéenne", icon: "ri-flag-line" },
      { fieldName: "Freelance", fieldValue: "À définir", icon: "ri-computer-line" },
      { fieldName: "Langues", fieldValue: "Français, Anglais (Courant) • Soussou, Pular, Malinké (Maternelles)", icon: "ri-global-line" },
      { fieldName: "Mobilité", fieldValue: "France (Lyon, Toulouse, Besançon, Paris)", icon: "ri-map-pin-user-line" },
    ]
  },
  en: {
    title: "Profile & Contact",
    description: "Personal information, contact channels, and professional mobility",
    info: [
      { fieldName: "Full Name", fieldValue: "Fofana Mariama", icon: "ri-user-3-line" },
      { fieldName: "Phone", fieldValue: "(+33) 6 04 09 38 06", icon: "ri-phone-line" },
      { fieldName: "Email", fieldValue: "MariamaFof9@gmail.com", icon: "ri-mail-line" },
      { fieldName: "Experience", fieldValue: "2 years", icon: "ri-briefcase-4-line" },
      { fieldName: "LinkedIn", fieldValue: "Mariama Fofana", icon: "ri-linkedin-box-line" },
      { fieldName: "Nationality", fieldValue: "Guinean", icon: "ri-flag-line" },
      { fieldName: "Freelance", fieldValue: "To be defined", icon: "ri-computer-line" },
      { fieldName: "Languages", fieldValue: "French, English (Fluent) • Soussou, Pular, Malinke (Native)", icon: "ri-global-line" },
      { fieldName: "Mobility", fieldValue: "France (Lyon, Toulouse, Besançon, Paris)", icon: "ri-map-pin-user-line" },
    ]
  }
};