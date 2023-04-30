import "./Header.css";
import troll_face from "../../images/troll-face.png"
const Header = () => {
    return (
        
            <nav className="navbar">
                <img src={troll_face} alt="Troll-face"  className="nav-logo"/>
                <h2 className="nav-title">Meme Generator</h2>
                <h4 className="nav-project">React Based Project</h4>
            </nav>
        
    )
}

export default Header