import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllAlbums: async () => {
        let response = await http('/albums');
        return response.data;
    },
    getOneAlbumAndItems: async (id: string) => {
        let response = await http(`/albums/${id}`);
        return response.data;
    },
    getPhotosFromAlbum: async (id: string) => {
        const response = await http(`/albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        const response = await http(`/photos/${id}`);
        return response.data;
    }
}