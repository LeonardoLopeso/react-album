import styles from './styles.module.css';

export const NotFound = () => {
    return (
        <div className={styles.container}>
            <span>Sorry!</span>
            <h2>Página não encontrada.</h2>
        </div>
    );
};