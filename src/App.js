import logo from './logo.svg';
import './App.css';

const user = {
  name: "Matrex",
  imageurl:"https://cdn.discordapp.com/attachments/1117203721688977478/1117406477213241446/godtierpfp.jpg",
  imagesize: 90,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img
       className="avatar"
      src={user.imageurl}
      alt={"Photo of " + user.name}
      ></img>
        <p>
          Soon..
        </p>
          <a href='https://github.com/matrex03' target='_blank' rel='noopener nopreferer'>
            <button className="github">Github</button>
           </a>
           <a href='https://twitter.com/matrex_03' target='_blank' rel='noopener nopreferer'>
            <button className="twitter">Twitter</button>
           </a>
           <a href='https://discord.gg/mAffaJ2uhD' target='_blank' rel='noopener nopreferer'>
            <button className="discord">Discord</button>
           </a>
           <a href='https://www.instagram.com/matrex03/' target='_blank' rel='noopener nopreferer'>
           <button className="instagram">Instagram</button>
           </a>
      </header>
    
      </div>
  );
}

export default App;

