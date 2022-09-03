import styles from './App.module.css'
import { Home } from './pages/Home/Home';

const App = () => {
  return (
    <>
      <header>
        <h1>Galeria de fotos</h1>
      </header>
      <div className={styles.container}>
        <Home />
      </div>
      <footer>
        Footer da página.
      </footer>
    </>
  )
}

export default App;