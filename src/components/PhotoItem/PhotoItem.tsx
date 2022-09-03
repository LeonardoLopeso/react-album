import { Link } from 'react-router-dom';
import { Photo } from '../../types/Photo';
import styles from './styles.module.css';

type Props = {
    data: Photo
}

export const PhotoItem = ({ data }: Props) => {
    return (
        <Link to={`/photo/${data.id}`}>
            <div className={styles.photos}>
                <img src={data.thumbnailUrl} alt={data.title} />
            </div>
        </Link>
    )
}