import "./App.css";

const user = {
  name: "Matrex",
  imageurl:
    "https://cdn.discordapp.com/attachments/1117203721688977478/1117406477213241446/godtierpfp.jpg",
  imagesize: 90,
};

function App() {
  return (
    <div className="App animation">
      <div className="header">
        <p>Aziz</p>
      </div>
      <div className="maindiv">
        <div className="aboutme">
          <h2 className="title">About Me</h2>
          <p className="description">
            Hey, I'm a 17 year old with a passion for programming and a beginner
            in the world of software development. I'm currently learning React
            and eager to expand my knowledge and skills. Ever since my
            childhood, I've been captivated by computers, and now I'm channeling
            that interest into learning and exploring the vast realm of coding.
            Despite being new to this field, I'm determined to persevere and
            grow as a developer, embracing the challenges and opportunities that
            lie ahead.
          </p>
        </div>
        <div className="avatar">
          <img alt="" src={user.imageurl} className="photo" />
        </div>
      </div>
      <div>
        <h2 className="title">Social</h2>
        <div className="links">
          <a
            className="button"
            href="https://github.com/matrex03"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="button"
            href="https://twitter.com/matrex_03"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className="button"
            href="https://discord.gg/mAffaJ2uhD"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <a
            className="button"
            href="https://www.instagram.com/matrex03/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
