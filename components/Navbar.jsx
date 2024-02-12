'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faX,
  faBars
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const Navbar = () => {

    const [sidebarOpen, setSideBarOpen] = useState(false)
    // use a state to keep track of when the sidebar should be open


    function hamburgerToggle() {
        const mainNav = document.getElementById('main-nav')


        if (mainNav.classList.contains('responsive')) {
            mainNav.classList.remove('responsive')
            console.log(mainNav.classList)
            setSideBarOpen(false)
        } else {
            mainNav.classList.add("responsive") 
            setSideBarOpen(true)

        }
    }
    // when the hamburger menu is clicked, alternate between adding or remove the responsive classname

    return (
        <>
        <nav className="nav-container" >
            <div id="main-nav" className="desktop-nav">
                <a href="/" >AEON</a>
                <a href="/">Showcase</a>
                <a href="/">Docs</a>
                <a href="/">Blog</a>
                <a href="/">Analytics</a>
                <a href="/">Commerce</a>
                <a href="/">Templates</a>
                <a href="/">Enterprise</a>
            </div>

            <input className="searchbar" type="text" placeholder='Search documentation...' />

            <div className="sideBarToggle" >
                {sidebarOpen === true? 
                <>
                    <span className="sideBarIcon" >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <span className="sideBarIcon" onClick={hamburgerToggle}>
                        <FontAwesomeIcon  icon={faX} />
                    </span>
                </>
                :
                <span  className="sideBarIcon"onClick={hamburgerToggle}>
                    <FontAwesomeIcon icon={faBars}/>
                </span>                 
                }
                {/* If the sidebarOpen is meant to be open, display the magnifying glass and X icon. Otherwise, just the hamburger menu */}
            </div>
        </nav>
        
        </>
  )
}

export default Navbar