import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
//import GSAP 
import { gsap } from "gsap/dist/gsap.js";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CoachingPanel from './CoachingPanel';




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
                snap: {
                    snapTo: 1 / (panels.length - 1),
                    duration: { min: 0.3, max: 1 }
                },
                end: () => "+=" + (panelsContainerRef.current.offsetWidth - innerWidth)
            }
        });

    }, [])

    return (
        <section className="panels" ref={panelsRef}>
            {/* <div className="fake_header">

            </div> */}
            <div className="panels_container" ref={panelsContainerRef}>
                <div className="panel presentation">
                    <div className="infos">
                        <div className="infos_text">
                            <h1 className="title first">Qui suis je ?</h1>
                            <p>Infirmière pendant 10 ans puis par la suite coach sportif diplômé d’état du BPJEPS AGFF (Activités Gymniques de la Forme et de la Force), je vous propose mes services de coaching à l’extérieur, à domicile ou en entreprise, en groupe ou en individuel. </p>
                            <h2 className="title">Mon objectif</h2>
                            <p>Réaliser les votres, dans la joie et la sincérité !</p>
                            <h2 className="title">Ma philosophie</h2>
                            <p>Prendre plaisir, gagner en estime de soi et vous amener vers l’autonomie dans votre hygiène de vie et votre santé.</p>
                        </div>
                    </div>
                    <div className="image_pres">
                        {/* <Image
                            src="/images/coaching_jo4_sbg2.png"
                            alt="Pres Mama mouv"
                            width="100"
                            height="100"
                        // layout="fill"
                        /> */}
                        <img src="/images/coaching_jo4_sbg5.png" alt="Pres Mama mouv" />
                    </div>
                </div>
                <div className="panel coaching" >
                    <CoachingPanel />

                </div>
                {/* <div className="panel " >
                    <h1>Panel 3</h1>
                </div> */}
            </div>
        </section>
    )


};

export default MainContent;