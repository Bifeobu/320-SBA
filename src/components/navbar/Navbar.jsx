import './Navbar.css'

function Navbar() {

    return(
        <div class="navbar">
            <a href='home'>Home</a>
            <div class="dropdownC">
                <button class="dropbtnC">Character
                    <i class="fa fa-caret down"></i>
                </button>
                <div class="dropdown-contentC"></div>
            </div>
            
            
            
            <div class="dropdownL"></div>
            <div class="dropdownE"></div>




            <a href='character'>Character</a>
            <a href='location'>Location</a>
            <a href='episode'>Episode</a>
        </div>
    );
} 

export default Navbar