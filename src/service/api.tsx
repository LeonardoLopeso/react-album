import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// Requisição get
export const api = {
    getAllAlbums: async () => {
        let response = await http.get('/albums');
        return response.data;
    }
}