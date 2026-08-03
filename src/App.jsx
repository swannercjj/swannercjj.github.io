import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
      <div className={styles.App}>
        <Navbar />
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
}

export default App;
