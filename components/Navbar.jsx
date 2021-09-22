import React, { useContext } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import animContext from "../context/animContext";

{
    /* <AiOutlineInstagram />
<AiFillPhone className="phone_icon" /> */
}
const Navbar = (props) => {
    const { windowProps } = useContext(animContext);
    console.log(`Navbar -> windowProps`, windowProps);

    return (
        <div className="navbar">
            <ul className="menu_navbar">
                <li className="nav_link">
                    <a href="#welcome-page" className="anchor">
                        Mama mouv&apos;
                    </a>
                </li>
                <li className="nav_link">
                    <a href="#pres-view" className="anchor">
                        Qui suis je ?
                    </a>
                </li>
                <li className="nav_link">
                    <a href="#coaching-view" className="anchor">
                        Mes Coaching
                    </a>
                </li>
                <li className="nav_link">
                    <a href="#contact-view" className="anchor">
                        Contact
                    </a>
                </li>
                {windowProps.width < 768 && (
                    <>
                        <li className="nav_link">
                            <a href="https://www.instagram.com/johanna_coaching/" target="_blank">
                                <AiOutlineInstagram />
                            </a>
                        </li>
                        <li className="nav_link phone_nav_link">
                            <AiFillPhone className="phone_icon" />
                            <p> 07.60.57.99.70 </p>
                        </li>
                    </>
                )}
                {/* <li className="nav_link" >Connexion</li> */}
            </ul>
        </div>
    );
};

export default Navbar;
