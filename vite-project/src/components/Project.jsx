import React from "react";
import "../styles/Project.css";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="heading">Projects</h1>
      <div className="projects">
        <div className="project-element">
          <div>
            <img className="project-pics"  />
          </div>
          <div>
            <h3>BusyMomsKitchen</h3>
            <p className="project-info">
            Busy Mom's Kitchen is a website that provides easy and quick recipes. The app targets this specific group of people who often struggle to find time to plan and prepare meals due to their busy schedules. By providing various quick meal options, your app can help alleviate the stress and time constraints associated with meal planning while still allowing parents to provide healthy and nutritious meals for their families. This app can be a valuable tool for busy parents looking for ways to streamline their meal-planning process and make healthy eating a priority for their families.
            </p>
            <div>
              <p className="tech-stack">
              HTML, CSS, JavaScript, MealDB API, Spoonacular API
              </p>
            </div>
            <div className="links">
              <a
                className="project-links"
                href="https://shanenick.github.io/Busy-Mom-s-Kitchen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                className="project-links"
                id="code"
                href="https://github.com/ShaneNick/Busy-Mom-s-Kitchen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-element">
          <div>
            <img className="project-pics"  />
          </div>
          <div>
            <h3>Spendr</h3>
            <p className="project-info">
            Spendr is a money-saving app that helps you keep track of your expenses and savings goals. With Spendr, you can easily categorize your spending, set budget limits, and see how much money you're saving over time.
            </p>
            <div>
              <p className="tech-stack">
              Handlebars.js,CSS,Javascript,Express.js,
              Chart.js,MYSQL,NODE.JS,Bootstrap,Google fonts, Font Awesome


              </p>
              
            </div>
          </div>
          <div className="links">
            <a
              className="project-links"
              href="https://murmuring-everglades-61234.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="project-links"
              id="code"
              href="https://github.com/pan-ev/conscious-spender"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>

        <div className="project-element">
          <div>
            <img className="project-pics"  />
          </div>
          <div>
            <h3>Weather App</h3>
            <p className="project-info">
             Weather API project that utilizes a weather API to fetch and display weather data for different locations. The goal of this homework assignment was to gain experience working with APIs, handling asynchronous data, and presenting the information in a user-friendly manner.
            </p>
            <div>
              <p className="tech-stack">
                Html,Css,Javascript,Weather API
              </p>
            </div>
          </div>
          <div className="links">
          <a
              className="project-links"
              href="https://josecortorreal.github.io/HW-weather-API/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="project-links"
              id="code"
              href="https://github.com/josecortorreal/HW-weather-API"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project-element">
          <div>
            <img className="project-pics"  />
          </div>
          <div>
            <h3>Quiz App</h3>
            <p className="project-info">
            I created a dynamic JavaScript Quiz App that allows users to test their knowledge in various subjects through interactive quizzes. The app provides an engaging and challenging experience, presenting multiple-choice questions and providing immediate feedback on user responses.


            </p>
            <div>
              <p className="tech-stack">
              Html,CSS,Javascript,


              </p>
              
            </div>
          </div>
          <div className="links">
            <a
              className="project-links"
              href="https://josecortorreal.github.io/Quiz-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="project-links"
              id="code"
              href="https://github.com/josecortorreal/Quiz-App"

              
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project-element">
          <div>
            <img className="project-pics"  />
          </div>
          <div>
            <h3>Daily-Planner-App</h3>
            <p className="project-info">
            My Daily Planner App is a productivity tool designed to help users efficiently organize and manage their daily tasks and schedules. This intuitive application provides a user-friendly interface, enabling users to stay on top of their commitments and maximize their productivity.
            </p>
            <div>
              <p className="tech-stack">
              Html,CSS,Javascript
              


              </p>
              
            </div>
          </div>
          <div className="links">
            <a
              className="project-links"
              href="https://josecortorreal.github.io/daily-planner-module5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="project-links"
              id="code"
              href="https://github.com/josecortorreal/daily-planner-module5"

              
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project-element">
          <div>
            <img className="project-pics"  />
          </div>
          <div>
            <h3>Portfolio</h3>
            <p className="project-info">
            My first portfolio draft is a representation of my skills, achievements, and projects as a web developer. It serves as a showcase of my capabilities and a platform to demonstrate my passion for coding and design. The portfolio features a clean and visually appealing layout, reflecting my attention to detail and user experience.


            </p>
            <div>
              <p className="tech-stack">
              Html,CSS

              </p>
              
            </div>
          </div>
          <div className="links">
            <a
              className="project-links"
              href="https://josecortorreal.github.io/portfolio-version1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="project-links"
              id="code"
              href="https://github.com/josecortorreal/portfolio-version1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Projects;

