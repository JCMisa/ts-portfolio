//style
import '../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Nav()
{
    const [isToggle, setToggle] = useState<boolean>(false);

    function toggle()
    {
        setToggle(!isToggle)
    }

    return(
        <>
            <div className="navbar">
                <div className="logo"><a href="logoLink">JCM</a></div>
                <ul className="links">
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contacts">Contacts</a></li>
                </ul>
                <a href="action" className="action_btn">Get Started</a>
                <div className="toggle_btn" onClick={toggle}>
                    <FontAwesomeIcon icon={isToggle ? faBars : faX} />
                </div>
            </div>

            <div className={isToggle ? "open" : "dropdown_menu"}>
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contacts">Contacts</a></li>
                <li><a href="action" className="action_btn">Get Started</a></li>
            </div>
        </>
    )
}