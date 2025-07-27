import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';

function App() {
  return (
      <div className={styles.App}>
        <div className={styles.backgroundBlur} ></div>
        <Navbar />
        <Intro />
        <About />
        <Experience />
      </div>
    );
}

export default App;
