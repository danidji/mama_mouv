import React, { useRef, useEffect } from 'react';

//import GSAP 
import { gsap } from "gsap/dist/gsap.js";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




const MainContent = (props) => {

    gsap.registerPlugin(ScrollTrigger);

    const panelsRef = useRef(null);
    const panelsContainerRef = useRef(null);

    // Animation scroll défilement horizontal
    useEffect(() => {
        const panels = gsap.utils.toArray(".panel");

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".panels_container",
                pin: true,
                start: "top top",
                scrub: true,
                end: () => "+=" + (panelsContainerRef.current.offsetWidth - innerWidth)
            }
        });

    }, [])

    return (
        <section className="panels" ref={panelsRef}>
            <div className="fake_header">

            </div>
            <div className="panels_container" ref={panelsContainerRef}>
                <div className="panel test1">
                    <h1>Panel 1</h1>

                </div>
                <div className="panel test2" >
                    <h1>Panel 2</h1>

                </div>
                <div className="panel test3" >
                    <h1>Panel 3</h1>
                </div>
            </div>
        </section>
    )


};

export default MainContent;