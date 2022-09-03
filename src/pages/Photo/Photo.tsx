import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { api } from '../../service/api';
import { Photo as Phototype } from '../../types/Photo';

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [photoInfo, setPhotoInfo] = useState<Phototype>();

    useEffect(() => {
        if(params.id) {
            loadPhoto(params.id);
        }
    }, []);

    const loadPhoto = async (id: string) => {
        setLoading(true);
        const photo = await api.getPhoto(id);
        setPhotoInfo(photo);
        setLoading(false);
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            {loading && "Carregando..."}

            {photoInfo &&
                <>
                    <Button title="Voltar" func={handleBackButton} />
                    <h3>{photoInfo.title}</h3>
                    <img src={photoInfo.url} alt={photoInfo.title} />
                </>
            }
        </div>
    );
}