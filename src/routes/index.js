import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "../layouts/blank";
import Default from "../layouts/default";
import Error from "../pages/error/error";
import Actu from "../pages/actu/actu.js";
import Article from "../pages/article/article.js";
import Dossiers from "../pages/dossiers/dossiers.js";
import Dossier from "../pages/dossier/dossier.js";
import Events from "../pages/events/events.js";
import Home from "../pages/home/home.js";
import Tests from "../pages/tests/tests.js";
import Test from "../pages/test/test.js";

const Router = () => {
    return(
        /* Définition des différentes routes de l'application */
        <BrowserRouter>
        <Routes>
            <Route element={<Default />}>
                <Route path="/" element={<Home/>} />
                <Route path="actu" element={<Actu/>} />
                <Route path="actu/:id" element={<Article/>} />
                <Route path="tests" element={<Tests/>} />
                <Route path="tests/:id" element={<Test/>} />
                <Route path="dossiers" element={<Dossiers/>} />
                <Route path="dossiers/:id" element={<Dossier/>} />
                <Route path="events" element={<Events/>} />
            </Route>
            <Route element={<Blank />}>
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;