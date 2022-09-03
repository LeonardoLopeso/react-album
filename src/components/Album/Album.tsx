import { Talbums } from '../../types/Albums';
import styles from './styles.module.css';

type Props = {
    data: Talbums
}

export const Album = ({ data }: Props) => {

    return (
        <div className={styles.container}>
            <span>Album: {data.id}</span>
            <h4>{data.title}</h4>
        </div>
    )
}