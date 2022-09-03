
import ListAlbums from '../ListAlbums/ListAlbums';
import styles from './styles.module.css';

export const Home = () => {
    return (
        <div className={styles.container}>
            <ListAlbums />
        </div>
    )
}