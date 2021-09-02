import React, { useEffect, useContext } from 'react';
import { animContext } from '../context/animContext';


const Layout = ({ welcome, mainContent, contact, navbar }) => {

    const context = useContext(animContext);


    //Navigation entre les différentes fenêtres
    useEffect(() => {

        context.scrollToAnim();

    }, [])


    return (
        <>
            <div className="navbar">
                {navbar}
            </div>
            <div className="container">
                {welcome}
                {mainContent}
                {contact}

            </div >
        </>
    )


};

export default Layout;