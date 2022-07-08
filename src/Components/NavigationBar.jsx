import "../Styles/Navbar.css"
import {Link} from "react-router-dom";
const NavigationBar = () => {
    
    const NavLinkStyle={
        fontFamily:"Lato",
        fontWeight:"bold",
        display:"inline-block",
        padding:"10px",
         color:"white",
    textDecoration: "none"
    }
    return ( 
        <div><header>
           <div className="nav-container">
           <div className="brand-name">
                <h3>Neon Tech</h3>
            </div>
                <div className="navigation">
                <nav>
                <ul>
                <li><Link to="/" style={NavLinkStyle}> Home </Link></li>
           <li> <Link to="/products" style={NavLinkStyle}> Products </Link></li>
                    <li><Link to ="/createListing" style={NavLinkStyle}> Create Listing </Link></li>
                </ul>
            </nav>
                </div>
           </div>
        </header>
        </div>
     );
}
 
export default NavigationBar;