import React, { useRef, useEffect } from 'react';

//import GSAP 
import { gsap } from "gsap/dist/gsap.js";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



if (process.client) {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
}

const MainContent = (props) => {

    return (
        <section className="panels">
            <div className="panels_container">
                <div className="panel">
                    <h1>Panel 1</h1>

                </div>
                <div className="panel">
                    <h1>Panel 2</h1>

                </div>
                <div className="panel">
                    <h1>Panel 3</h1>
                </div>
            </div>
        </section>
    )


};

export default MainContent;