import { useRoutes } from "react-router-dom";
import Albums from "../pages/Albums/Albums";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";

export const MainRouter = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/albums', element: <Albums /> },
        { path: '*', element: <NotFound /> },
    ])
}