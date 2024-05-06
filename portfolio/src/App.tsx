import "./App.scss";
import nobrainImage from './assets/nobrainIMG.png';
import ecommerceIMG from './assets/ecommerceIMG.png';
import selfie2 from './assets/selfie2.jpg';
import instacloneIMG from './assets/instacloneIMG.png';

function App() {
  return (
    <div className="main-container">
       <div className="top-bar" id="top-bar">
        <h3 className="name">
          Stanisław Kopeć
        </h3>
        <div className="navigation">
          <a href="#about-section" className="navigation-item">
            About
          </a>
          <a href="#projects-section" className="navigation-item">
            Projects
          </a>
          <a href="#contact-section" className="navigation-item">
              Contact
          </a>
        </div>
       </div>
       <div className="content-container-wrapper">
        <div className="content-container">
          <div className="about-section" id="about-section">
              <img src={selfie2}/>
              <p>
                As a second-year computer science student, I've cultivated familiarity with an array of technologies, 
                with a particular passion for Web Development. Although my professional journey is just beginning, 
                my dedication to swift learning and adaptability ensures I'll swiftly grasp new concepts.
              </p>
              <p>
                My journey in computer science traces back to my high school days, where my intrigue led me to dabble 
                in a diverse spectrum of technologies, spanning from Unity and Blender to Arduino. While I relish exploring 
                cutting-edge innovations like AI, it's the realm of Web Development where I've immersed myself the most.
              </p>
              <p>
                I'm eager to leverage my foundational knowledge and enthusiasm for continuous learning to contribute meaningfully to any project or team I'm a part of.
              </p>
          </div>

          <div className="projects-section" id="projects-section">
            <h1>Projects</h1>
            <h3>Recently apps don't work in certain browsers. In such case try them in Opera</h3>
            <a href="https://grand-puffpuff-89c8de.netlify.app" target="_blank" rel="noopener noreferrer" className="projects-item">
            <img src={nobrainImage}/>
              <div className="description"> 
                <div className="project-name">Application for making notes</div>
                <p>Full stack Application that lets users log in, make notes, manage them and navigate.</p>
                <p>ASP.NET Core Api connects app to MSSQL database.</p>
                <p>Hosted on Azure.</p>
                <div className="tech">
                  React, TS, SCSS, .NET, C#
                </div>
              </div>
            </a>
            <a href="https://instaclone-10fe9.web.app" target="_blank" rel="noopener noreferrer" className="projects-item" >
              <div className="description"> 
                <div className="project-name">Clone of instagram</div>
                <p>Application that mimics Instagram: chatting, posting...</p>
                <p>Hosting and data storage managed with Firebase.</p>
                <div className="tech">
                  Angular, TS, SCSS, Firebase
                </div>
              </div>
              <img src={instacloneIMG}/>
            </a>
            <a href="https://tubular-melba-d74210.netlify.app" target="_blank" rel="noopener noreferrer" className="projects-item">
            <img src={ecommerceIMG}/>
              <div className="description"> 
                <div className="project-name">E-commerce</div>
                <p>E-commerce web app with functionality like: logging, browsing, demo payment using Stripe.</p>
                <p>Logging managed with ASP.NET Core Api. </p>
                <p>Shopping items from public api.</p>
              <div className="tech">Angular, TS, .NET</div>
              </div>
            </a>
          </div>

          <div className="other-projects-section" id="other-projects-section">
            <div className="other-projects-item">
              Weather app (Angular, public API)
            </div>
            <div className="other-projects-item">
              Unity game.
            </div>
            <div className="other-projects-item">
              .NET Api using Dapper (T-SQL).
            </div>
            <div className="other-projects-item">
              Console app decoding Caesar Cipher (Python, batch).
            </div>
            <div className="other-projects-item">
              Simple console app to manage projects. (C++)
            </div>
            <div className="other-projects-item">
              E-commerce rewritten from Angular to React.
            </div>

          </div>

          <div className="contact-section" id="contact-section">
            <h2>Github repository:</h2>
            <a href="https://github.com/StanislawKopec/Projects.git" target="_blank" rel="noopener noreferrer"><h3>https://github.com/StanislawKopec/Projects.git</h3></a>
            <h2>Email: </h2>
            <h3>Stanislaw399@gmail.com</h3>
            <h2>Phone:</h2>
            <h3>+48 784 823 329</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
