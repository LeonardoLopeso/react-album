import styles from './styles.module.css';
import { api } from '../../service/api';
import { useEffect, useState } from 'react';
import { Talbums } from '../../types/Albums';
import { AlbumsItems } from '../../components/AlbunsItems/AlbunsItems';

const Albums = () => {
    const [albums, setAlbums] = useState<Talbums[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, [])

    const loadAlbums = async () => {
        setLoading(true);
        let json = await api.getAllAlbums();
        setLoading(false);
        setAlbums(json);
    }

    return (
        <div className={styles.container}>
            {loading &&
                <p>Carregando...</p>
            }

            <div>
                {albums.map((item, index) => (
                    <AlbumsItems key={index} data={item} />
                ))}
            </div>

            {!loading && albums.length === 0 &&
                <h4>Não há albums para exibir.</h4>
            }
        </div>
    )
}

export default Albums;