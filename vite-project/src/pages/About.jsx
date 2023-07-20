import React from 'react';
import "../styles/Skills.css";
import { FaReact, FaBootstrap, FaGitSquare } from "react-icons/fa";
import { DiJava, DiJavascript1, DiCss3, DiHtml5, DiPython, DiMongodb, DiNodejs } from "react-icons/di";
import { SiSequelize, SiExpress, SiPrisma } from "react-icons/si";


const Skills = () => {
  return (
    <section id="skills">
      <div>
        <h1 className="heading">Skills</h1>
        <div className="skills-main">
          
            <div className="about">
              <p className="accent">Hello!</p>
              <p>My name is Jose Cortorreal, and I am a dedicated web developer. Currently, I am enrolled in the Columbia University Bootcamp, where I am expanding my skills and knowledge in coding. I have been able to further enhance my understanding of the field.
                In addition to my studies, this program has provided me with valuable opportunities to work on real-world projects and collaborate with industry professionals. I have a strong command of modern technologies such as React and Express, which I leverage to develop robust and scalable full-stack applications. I am passionate about creating innovative solutions and constantly exploring new ways to improve user experiences through clean and efficient code.
              </p>
            </div>
            <div className="skills">
              <div className="skill">
                <FaReact />
                <p>React.js</p>
              </div>
              <div className='skill'>
                <SiExpress />
                <p>Express</p>
              </div>
              <div className="skill">
                <DiNodejs />
                <p>NodeJS</p>
              </div>
              <div className="skill">
                <DiMongodb />
                <p>Mongo</p>
              </div>
              <div className='skill'>
                <SiPrisma />
                <p>Prisma</p>
              </div>
              <div className="skill">
                <DiJavascript1 />
                <p>JS</p>
              </div>
              <div className="skill">
                <DiHtml5 />
                <p>HTML</p>
              </div>
              <div className="skill">
                <DiCss3 />
                <p>CSS</p>
              </div>
              <div className="skill">
                <FaGitSquare />
                <p>Git</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
