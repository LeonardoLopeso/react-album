import { useRoutes } from "react-router-dom";

import ListAlbums from "../pages/ListAlbums/ListAlbums";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { AlbumsItems } from "../components/AlbunsItems/AlbunsItems";
import { Photo } from "../pages/Photo/Photo";

export const MainRouter = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/albums', element: <ListAlbums /> },
        { path: '/album/:slug', element: <AlbumsItems /> },
        { path: '/photo/:id', element: <Photo /> },
        { path: '*', element: <NotFound /> },
    ])
}