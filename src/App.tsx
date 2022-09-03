import { MainRouter } from './routes/MainRoutes';
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <header>
        <h1>Galeria de fotos</h1>
      </header>
      <div className={styles.container}>
        <MainRouter />
      </div>
      <footer>
        Footer da página.
      </footer>
    </>
  )
}

export default App;