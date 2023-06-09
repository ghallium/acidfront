import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return(
        <footer>
            <div className="footer_green_stripe"></div>
            <div className="footer_bg">
                <p>AcidGame. Tous droits réservés © 2023</p>
                <div className="footer_links">
                    <Link to="/about">Qui sommes-nous ?</Link>
                    <Link to="/team">L'équipe</Link>
                    <Link to="/legal">Mentions légales</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;