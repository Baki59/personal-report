import "./ComponentsCSS/navbar-style.css";
import logo from "../assets/personal-report-logo.png"
import { NavbarItems } from "./NavbarItems";
import { RiMenuFold4Fill } from "react-icons/ri";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";

// import {
//     ArchiveBoxXMarkIcon,
//     ChevronDownIcon,
//     PencilIcon,
//     Square2StackIcon,
//     TrashIcon,
//   } from '@heroicons/react/16/solid'


const Navbar = () => {
    const [state, setState] = useState(false);

    //---------------------For Profile Menu------------------
    const [openMenu, setOpenMenu] = useState(false);
    const handleClickMenu = () => {
        setOpenMenu(!openMenu);
    };
    const handleClose = () => {
        setOpenMenu(false);
    };

    //----------------------For Profile Menu-------------------------
   
    const handleClick = () =>{
        setState(!state)
    }
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `../signup`; 
        navigate(path);
    }
    const gotoHome = () =>{ 
        let path = `../`; 
        navigate(path);
    }
    
 
    return(
        <nav className="navbar-items">
            <RiMenuFold4Fill className="menu-icons" onClick={handleClick}/>
            {/* logo part */}
            <div className="navbar-logo-and-title" onClick={gotoHome}>
                <img src={logo} alt="Logo" className="navbar-logo"/> 
                <div className="navbar-title">Daily Report</div>
            </div>
            {/* logo part */}
            

            {/* Menu Part */}
                <ul  className={state ? "nav-menu-active" : "nav-menu"}>
                    {NavbarItems.map((item,index) =>{
                        return(
                            <li key={index} >
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                    
                    <button onClick={routeChange}>Sign Up</button>
                </ul>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>

                {/* <div className="navbar-profile-icons">
                    <i className="fas fa-bars"></i>
                </div> */}

                <div className="navbar-profile-icons"
                onClick={handleClickMenu}>
                <i className="fas fa-bars"/>
                </div>
                
                {openMenu &&
                
                <ul
                onClose={handleClose}
                className="navbar-profile-menu-list"
                >
                    <li onClick={handleClose}>
                        Account
                    </li>
                    <li onClick={handleClose}>
                        Invite Mentor
                    </li>
                    <li onClick={handleClose}>
                        Settings
                    </li>
                    <li onClick={handleClose}>
                        Theme
                    </li>
                    <li onClick={handleClose}>
                        Language
                    </li>
                    <li onClick={handleClose}>
                        Notes
                    </li>
                    <li onClick={handleClose}>
                        Help
                    </li>
                    <li onClick={handleClose}>
                        Report a Bug
                    </li>
                    <li onClick={handleClose}>
                        Download App
                    </li>
                    <li onClick={handleClose}>
                        Logout
                    </li>
                </ul>
                }
                

                

                

            {/* Menu Part */}


        </nav>
        

    );
}

export default Navbar