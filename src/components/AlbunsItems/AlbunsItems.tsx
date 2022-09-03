import styles from './styles.module.css';

import { useParams, useNavigate } from 'react-router-dom';
import { Talbums } from '../../types/Albums';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';
import { PhotoItem } from '../PhotoItem/PhotoItem';
import { Photo } from '../../types/Photo';
import { Button } from '../Button/Button';

export const AlbumsItems = () => {
    const [list, setList] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);
    const [albumInfo, setAlbumInfo] = useState<Talbums>({id: 0, title: '', userId: 0});

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.slug) {
            loadPhotos(params.slug);
            loadAlbumInfo(params.slug)
        }
    }, []);

    const loadPhotos = async (id: string) => {
        setLoading(true);
        let json = await api.getPhotosFromAlbum(id);
        setList(json);
        setLoading(false);
    }

    const loadAlbumInfo = async (id: string) => {
        const albumInfo = await api.getOneAlbumAndItems(id);
        setAlbumInfo(albumInfo);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <Button title="voltar" func={handleBackButton} />

            <h2>{albumInfo.title}</h2>


            <div className={styles.galleryPhotos}>
                                
                {loading && "Carregando..."}
                
                {list.map((item, index) => (
                    <PhotoItem 
                        key={index}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}