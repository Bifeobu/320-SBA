import './Navbar.css'

function Navbar() {

    return(
        <div class="navbar">
            <nav>
                <a href='home'>Home</a>
                <a href='character'>Character</a>
                <a href='location'>Location</a>
                <a href='episode'>Episode</a>
            </nav>

            {/* <a href='character'>Character</a>
            <a href='location'>Location</a>
            <a href='episode'>Episode</a> */}
        </div>
    );
} 

export default Navbar