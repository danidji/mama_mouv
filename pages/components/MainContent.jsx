import React, { useRef, useEffect } from 'react';

//import GSAP 
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CoachingPanel from './CoachingPanel';




const MainContent = (props) => {



    gsap.registerPlugin(ScrollTrigger);

    const panelsRef = useRef(null);
    const panelsContainerRef = useRef(null);

    // Animation scroll défilement horizontal
    useEffect(() => {
        if (window.innerWidth > 768) {
            // console.log(window.innerWidth)


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


        }




    }, [])

    return (
        <section className="panels" ref={panelsRef}>
            <div className="panels_container" ref={panelsContainerRef}>
                <div className="panel presentation" id="pres-view">
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
                        <div className="frame">
                            <img src="/images/mama_mouv6.png" alt="Pres Mama mouv" />
                        </div>
                    </div>
                </div>
                <div className="panel coaching" id="coaching-view" >
                    <CoachingPanel />

                </div>
            </div>
        </section>
    )


};

export default MainContent;