import Logo from "../../assets/logo-proto.png";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <div className="headerImg">
                <img src={Logo} alt="logo AcidGame"></img>
            </div>
            <nav>
                <Link to="/actu">Actu</Link>
                <Link to="/tests">Tests</Link>
                <Link to="/dossiers">Dossiers</Link>
                <Link to="/events">Events</Link>
            </nav>
        </header>
    )
}

export default Header;