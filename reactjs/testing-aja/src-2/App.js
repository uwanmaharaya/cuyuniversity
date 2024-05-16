import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const navHeading = 'Navigation Bar';
  const navText = 'Sosmed';

  const clicked = () => {
    return alert('button di klik');
  };

  const paragraph = () => {
    return (
      <div>
        <h3>Ilmu padi abangku 🌽🌽</h3>
        <i>Menyalaa abangku 😎</i>
        <marquee>🌽🌽🌽🌽🌽🌽🌽🌽🌽🌽</marquee>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar text={navText} navHeading={navHeading} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>HALO CUY 😜</p>
        <MyButton clicked={clicked} />
        <Footer paragraph={paragraph} />
      </header>
    </div>
  );
};

export default App;
