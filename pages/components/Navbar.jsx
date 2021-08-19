import React from 'react';

const Navbar = (props) => {

    return (

        <ul className="menu_navbar">
            <li className="nav_link" > <a href="#welcome-page" className="anchor">Mama mouv'</a></li>
            <li className="nav_link" ><a href="#pres-view" className="anchor">Qui suis je ?</a></li>
            <li className="nav_link" ><a href="#coaching-view" className="anchor">Mes Coaching</a></li>
            <li className="nav_link" >Contact</li>
            <li className="nav_link" >Connexion</li>
        </ul>

    )


};

export default Navbar;