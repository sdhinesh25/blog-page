import './index.css'

const About = () => (
  <div className="about-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
      alt="about"
      className="about-img"
    />
    <h1 className="about-heading">About</h1>
    <p className="about-paragraph">
      I love to create! I am a
      <span className="span"> front-end web developer</span>
    </p>
    <div className="about-part">
      <p className="about-summary">
        I'm highly motivated,metaculous and open minded person who loves to
        explore new opportunities.And the one thing which I'm excited about is
        the chance to put my skills to use and to support a productive team in a
        hectic work environment.I always look forward to challenge myself with
        new task.
      </p>
      <p className="about-summary">
        See My Projects:
        <a href="https://dhineshprojects.ccbp.tech/"> Dhinesh_Projects</a>
      </p>
      <p className="about-summary">
        Gitup Profile:
        <a href="https://github.com/sdhinesh25"> Dhinesh_Githup</a>
      </p>
      <p className="about-summary">
        Linkedin Profile:
        <a href="https://www.linkedin.com/in/dhinesh-s-5a0b02241/">
          Dhinesh_Linkedin
        </a>
      </p>
    </div>
  </div>
)

export default About
