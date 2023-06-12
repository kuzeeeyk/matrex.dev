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
          <h1>About Me</h1>
          <p className="limit">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
            eveniet voluptatem provident cupiditate sapiente illo, totam
            consequatur impedit, sequi modi exercitationem expedita architecto
            odio quos labore tempora? Animi, tempora adipisci?
          </p>
        </div>

        <div className="avatar">
          <img alt="" src={user.imageurl} className="photo" />
        </div>
      </div>

      <a href="https://github.com/matrex03" target="_blank" rel="noreferrer">
        <button className="github">Github</button>
      </a>
      <a href="https://twitter.com/matrex_03" target="_blank" rel="noreferrer">
        <button className="twitter">Twitter</button>
      </a>
      <a href="https://discord.gg/mAffaJ2uhD" target="_blank" rel="noreferrer">
        <button className="discord">Discord</button>
      </a>
      <a
        href="https://www.instagram.com/matrex03/"
        target="_blank"
        rel="noreferrer"
      >
        <button className="instagram">Instagram</button>
      </a>
    </div>
  );
}

export default App;
