import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {

    return(
        <div className="navbar">
            <nav>
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to={"/character"}>
                    <div>Characters</div>
                </Link>
                <Link to={"/location"}>
                    <div>Locations</div>
                </Link>
                <Link to={"/episode"}>
                    <div>Episodes</div>
                </Link>
                
                
                
                {/* <a href='home'>Home</a>
                <a href='character'>Characters</a>
                <a href='location'>Locations</a>
                <a href='episode'>Episodes</a> */}
            </nav>

            {/* <a href='character'>Character</a>
            <a href='location'>Location</a>
            <a href='episode'>Episode</a> */}
        </div>
    );
} 

export default Navbar