import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/nav/body/Body';
import Nav from './components/nav/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav/>
      <Body/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
