import {Outlet} from "react-router-dom";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";

const Default = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    );
}
export default Default;