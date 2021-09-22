import React, { useEffect, useContext, useState } from "react";
import animContext from "../context/animContext";

const Layout = ({ welcome, mainContent, contact, navbar, hambergerMenu }) => {
    const { scrollToAnim, windowProps, setWindowProps } = useContext(animContext);
    const [isMobile, setIsMobile] = useState(false);

    //Navigation entre les différentes fenêtres
    useEffect(() => {
        scrollToAnim();

        if (window.innerWidth < 768) {
            setIsMobile(true);
            setWindowProps({ width: window.innerWidth });
        }
        // context.setWidthStatus();
        // if (windowSize) {
        //     setIsMobile(true);
        // }
    }, []);

    return (
        <>
            {isMobile || windowProps.isNav || windowProps.width < 768 ? <>{hambergerMenu}</> : <>{navbar}</>}

            <div className="container">
                {welcome}
                {mainContent}
                {contact}
            </div>
        </>
    );
};

export default Layout;
