import styles from './styles.module.css';
import { api } from '../../service/api';
import { useEffect, useState } from 'react';
import { Talbums } from '../../types/Albums';
import { Album } from '../../components/Album/Album';
import { Link } from 'react-router-dom';

const ListAlbums = () => {
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

            <div>

                {loading &&
                    <p>Carregando...</p>
                }

                {albums.map((item, index) => (
                    <Link key={index} to={`/album/${item.id}`}>
                        <Album data={item} />
                    </Link>
                ))}
            </div>

            {!loading && albums.length === 0 &&
                <h4>Não há albums para exibir.</h4>
            }
        </div>
    )
}

export default ListAlbums;