import "./ComponentsCSS/navbar-style.css";
import logo from "../assets/personal-report-logo.png"
import { MenuItems } from "./MenuItems";
import { RiMenuFold4Fill } from "react-icons/ri";
import { useState } from "react";


const Navbar = () => {
    const [state, setState] = useState(false);
    const handleClick = () =>{
        setState(!state)
    }
    

    return(
        <nav className="navbar-items">
            <RiMenuFold4Fill className="menu-icons" onClick={handleClick}/>
            {/* logo part */}
            <div className="navbar-logo-and-title">
                <img src={logo} alt="Logo" className="navbar-logo"/> 
                <div className="navbar-title">Daily Report</div>
            </div>
            {/* logo part */}

            {/* Menu Part */}
                <ul  className={state ? "nav-menu-active" : "nav-menu"}>
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index} >
                                <a href="#" className={item.cName}>{item.title}</a>
                            </li>
                        )
                    })}
                    
                    <button>Sign Up</button>
                </ul>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>

                <div className="navbar-profile-icons">
                    <i className="fas fa-bars"></i>
                </div>

            {/* Menu Part */}


        </nav>
        

    );
}

export default Navbar