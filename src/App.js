import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/nav/body/Body';
import Nav from './components/nav/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <Body title = 'body' />
      <About title = 'about'/>
      <Projects title = 'projects'/>
      <Contact title = 'contact'/>
      <Footer/>
    </div>
  );
}

export default App;
