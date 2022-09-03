
import Albums from '../Albums/Albums';
import styles from './styles.module.css';

export const Home = () => {
    return (
        <div className={styles.container}>
            <Albums />
        </div>
    )
}