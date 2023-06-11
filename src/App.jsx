import "./App.css";

const user = {
  name: "Matrex",
  imageurl:
    "https://cdn.discordapp.com/attachments/1117203721688977478/1117406477213241446/godtierpfp.jpg",
  imagesize: 90,
};

function App() {
  return (
    <div className="App">
      <div className="maindiv">
        <div className="aboutme">
          <h3>About Me</h3>
          <p>Hey! Working on this website see you soon</p>
        </div>

        <div className="avatar">
          <img src={user.imageurl} className="photo" />
        </div>
      </div>

      <a
        href="https://github.com/matrex03"
        target="_blank"
        rel="noopener nopreferer"
      >
        <button className="github">Github</button>
      </a>
      <a
        href="https://twitter.com/matrex_03"
        target="_blank"
        rel="noopener nopreferer"
      >
        <button className="twitter">Twitter</button>
      </a>
      <a
        href="https://discord.gg/mAffaJ2uhD"
        target="_blank"
        rel="noopener nopreferer"
      >
        <button className="discord">Discord</button>
      </a>
      <a
        href="https://www.instagram.com/matrex03/"
        target="_blank"
        rel="noopener nopreferer"
      >
        <button className="instagram">Instagram</button>
      </a>
    </div>
  );
}

export default App;
