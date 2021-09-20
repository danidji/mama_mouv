import React, { useEffect, useContext, useState } from 'react';
import  animContext  from '../context/animContext';


const Layout = ({ welcome, mainContent, contact, navbar, hambergerMenu }) => {

    const context = useContext(animContext);
    const [isMobile, setIsMobile] = useState(false)

    //Navigation entre les différentes fenêtres
    useEffect(() => {

        context.scrollToAnim();

        if (window.innerWidth < 768) {
            setIsMobile(true);
        }

    }, [])


    return (
        <>
            {isMobile
                ? (
                    <>
                        {hambergerMenu}
                    </>
                ) : (
                    <>
                        {navbar}
                    </>
                )

            }

            <div className="container">
                {welcome}
                {mainContent}
                {contact}

            </div >
        </>
    )


};

export default Layout;