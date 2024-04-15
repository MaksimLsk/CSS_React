import "./style.scss";
import './App.css';
import styles from "./App.module.css";

function App() {


  return (
    <>
      <div className={styles.mainComponent}>
        <h1>Travel origin</h1>
        <div className={styles.destination}>
          <section className={styles.article}>
            <h2>Waterfall Iguazu</h2>
            <h4>About</h4>
            <p>The Iguazu Falls consists of two national parks, one in Foz de Iguazu (Brazil) and the other one in Puerto Iguazu (Argentina).</p>
          </section>
          <div className={styles.photo}>
            <img src="./src/assets/iguazu.jpg" alt="waterfall Igauzu" /><p className={styles.rating}>Rate this travel ☆☆☆☆☆</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
