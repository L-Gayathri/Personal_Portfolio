import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Internships from './components/internships';
import Certifications from './components/certifications';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Certifications/>
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
