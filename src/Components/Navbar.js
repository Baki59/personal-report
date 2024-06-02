import "./ComponentsCSS/navbar-style.css";
import logo from "../assets/personal-report-logo.png"
import { NavbarItems } from "./NavbarItems";
import { RiMenuFold4Fill } from "react-icons/ri";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Signup from "../Routes/Signup";
// import {
//     ArchiveBoxXMarkIcon,
//     ChevronDownIcon,
//     PencilIcon,
//     Square2StackIcon,
//     TrashIcon,
//   } from '@heroicons/react/16/solid'


const Navbar = () => {
    const [state, setState] = useState(false);
    const handleClick = () =>{
        setState(!state)
    }
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `./signup`; 
        navigate(path);
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

                <div className="navbar-profile-icons">
                    <Menu>
                        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                        <i className="fas fa-bars"/>
                        </MenuButton>
                        <Transition
                        enter="transition ease-out duration-75"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                        <MenuItems
                            anchor="bottom end"
                            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                        >
                            <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Edit
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                            </button>
                            </MenuItem>
                            <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Duplicate
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                            </button>
                            </MenuItem>
                            <div className="my-1 h-px bg-white/5" />
                            <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Archive
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
                            </button>
                            </MenuItem>
                            <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Delete
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                            </button>
                            </MenuItem>
                        </MenuItems>
                        </Transition>
                    </Menu>
                    </div>

            {/* Menu Part */}


        </nav>
        

    );
}

export default Navbar