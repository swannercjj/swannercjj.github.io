import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Intro />
  </div>;
}

export default App;
