import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
      <div className={styles.App}>
        <Navbar />
        <Intro />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
}

export default App;
