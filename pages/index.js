// import Image from 'next/image'
import React, { useState, useEffect, useContext } from "react";

import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import MainContent from "../components/MainContent";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import HambergerMenu from "../components/HambergerMenu";

import animContext from "../context/animContext";

export default function Home() {
    const { windowProps, setWindowProps } = useContext(animContext);

    // function getWindowWidth () {

    // On détecte si on est sur un navigateur ou non (true si nav false si mobile)
    const isClient = typeof window === "object";
    // console.log(`getWindowWidth -> isClient`, isClient);

    let objWindowProps = {
        isNav: isClient ? true : false,
        width: isClient ? window.innerWidth : undefined,
    };

    // Mise à jour de la valeur de windowSize à chaque changement de la lardeur de l'écran
    useEffect(() => {
        function handleResize() {
            setWindowProps(objWindowProps);
        }
        //Si je ne suis pas sur un navigateur je renvoie null à windowSize
        if (!isClient) {
            setWindowProps(objWindowProps);
        } else {
            //Sinon je met à jours la taille de l'écran
            window.addEventListener("resize", handleResize);
        }

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.log("Width ==> ", objWindowProps);

    return (
        <div className="site">
            <Layout navbar={<Navbar />} welcome={<Welcome />} mainContent={<MainContent />} contact={<Contact />} hambergerMenu={<HambergerMenu />} />
        </div>
    );
}
