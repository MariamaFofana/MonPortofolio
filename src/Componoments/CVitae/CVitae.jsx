import React from "react";
import "./CVitae.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import {
  experience,
  education,
  association,
  skills,
  about,
} from "./CVitaedata";

const CVitae = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="container-wrapper"
    >
      <div className="container">
        <Tabs defaultValue="experience" className="tabs-container">
          <TabsList className="tabs-list">
            <TabsTrigger value="experience">Expériences</TabsTrigger>
            <TabsTrigger value="education">Formations</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="association">Associations</TabsTrigger>
            <TabsTrigger value="about">À propos de Moi</TabsTrigger>
          </TabsList>

          <div className="content-container">
            {/* Experience */}
            <TabsContent value="experience" className="tabs-content">
              <div className="experience-container">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-description">
                  {experience.description}
                </p>
                <div className="scroll-area">
                  <ul className="experience-list">
                    {experience.items.map((item, index) => (
                      <li key={index} className="experience-item">
                        <span className="experience-duration">
                          {item.duration}
                        </span>
                        <h3 className="experience-position">{item.position}</h3>
                        <div className="company-info">
                          <span className="company-dot"></span>
                          <p className="company-name">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* Formations */}
            <TabsContent value="education" className="tabs-content">
              <div className="education-container">
                <h3 className="education-title">{education.title}</h3>
                <p className="education-description">{education.description}</p>
                <div className="scroll-area">
                  <ul className="education-list">
                    {education.items.map((item, index) => (
                      <li key={index} className="education-item">
                        <span className="education-duration">
                          {item.duration}
                        </span>
                        <h3 className="education-diplome">{item.diplome}</h3>
                        <div className="education-info">
                          <p className="education-ecole">{item.ecole}</p>
                          <p className="education-specialite">
                            {item.specialite}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* Association */}
            <TabsContent value="association" className="tabs-content">
              <div className="association-container">
                <h3 className="association-title">{association.title}</h3>
                <p className="association-description">{association.description}</p>
                <div className="association-grid">
                  {association.items.map((item, index) => (
                    <div key={index} className="association-item">
                      <h4 className="association-position">{item.position}</h4>
                      <p className="association-nom">{item.nom}</p>
                      <p className="association-lieu">{item.lieu}</p>
                      <p className="association-duration">{item.duration}</p>
                      <p className="association-role">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="tabs-content">
              <div className="skills-container">
                <h3 className="skills-title">{skills.title}</h3>
                <p className="skills-description">{skills.description}</p>
                <div className="skills-grid">
                  {skills.skillList.map((skill, index) => (
                    <div key={index} className="skills-item">
                      {skill.icon}
                      <p className="skills-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent value="about" className="tabs-content">
              <div className="about-container">
                <h3 className="about-title">{about.title}</h3>
                <p className="about-description">{about.description}</p>
                <div className="grid-container">
                  <ul className="about-list">
                    {about.info.map((item, index) => (
                      <li key={index} className="about-item">
                        <h3 className="about-fieldName">{item.fieldName}</h3>
                        <p className="about-fieldValue">{item.fieldValue}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default CVitae;
