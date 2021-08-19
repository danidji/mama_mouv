import React, { useEffect } from 'react';

//import GSAP 
import { gsap } from "gsap/dist/gsap.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const Layout = ({ welcome, mainContent, contact, navbar }) => {

    gsap.registerPlugin(ScrollToPlugin);

    //Navigation entre les différentes fenêtres
    useEffect(() => {

        const panelsSection = document.querySelector(".panels");
        const panelsContainer = document.querySelector(".panels_container");

        document.querySelectorAll(".anchor").forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const targetElem = document.querySelector(e.target.getAttribute("href"));
                if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
                    const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;

                    gsap.to(window, {
                        scrollTo: {
                            y: containerOffset,
                            autoKill: false
                        },
                        duration: 1
                    });
                } else {
                    gsap.to(window, {
                        scrollTo: {
                            y: targetElem,
                            autoKill: false
                        },
                        duration: 1
                    });
                }
            });
        });

    }, [])


    return (
        <>
            <div className="navbar">
                {navbar}
            </div>
            <div className="container">
                {welcome}
                {mainContent}
                {/* {contact} */}

            </div >
        </>
    )


};

export default Layout;