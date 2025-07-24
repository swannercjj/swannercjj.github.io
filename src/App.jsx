import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';
import { About } from './components/About/About';

function App() {
  return (
      <div className={styles.App}>
        <div className={styles.backgroundBlur} ></div>
        <Navbar />
        <Intro />
        <About />
      </div>
    );
}

export default App;
