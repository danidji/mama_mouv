import React, { useEffect, useContext } from 'react';
import Image from 'next/image';


import  animContext  from '../context/animContext';


import { AiOutlineCloseCircle } from "react-icons/ai";


const PersoPanel = (props) => {

    const context = useContext(animContext);

    useEffect(() => {
        context.scrollToAnim()
    }, [])


    return (
        <div className="window_modal sub_window_modal">
            <div className="close_icon_modal" onClick={props.close}>
                <AiOutlineCloseCircle />
            </div>
            <div style={{width:'100%', height:'100%'}}>
                <Image 
                    src="/images/training.jpg" 
                    className="sub_window_image" 
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="modal_information">
                <div className="modal_head">
                    <h3>Suivi personnalisé</h3>
                </div>
                <div className="modal_content_information">
                    <div className="left_content fs_large">
                        <p>Mon objectif est avant tout de réaliser le votre, que ce soit pour <span className="bold"> la perte de poid</span>,<span className="bold"> la remise en forme</span>, <span className="bold">la prise de masse</span>, nous analyserons ensemble vos objectifs pour <span className="bold">construire un programme entièrement adapté à vos besoins.</span></p>

                        <p>Votre programme sera entièrement <span className="bold">évolutif et adapté à vos progrès et votre évolution.</span></p>

                        <p>Coaching adapté à tous, <span className="bold">Débutant</span>, <span className="bold">Professionnel</span>, <span className="bold">Sénior</span> ou <span className="bold">PMR (personne à mobilité réduite)</span>.</p>

                        <p>Un premier bilan gratuit, qui prendra en compte vos antécédents sportif, votre forme globale ainsi que vos objectifs, nous permettra de construire ensemble votre programme d&apos;entrainement</p>

                    </div>
                    <div className="right_content">
                        <div className="content_price">
                            <h5>Tarifs</h5>
                            <p>1er séance, bilan de forme et établissement du programme offert !</p>
                            <ul>
                                <li><span className="bold">1 séances : 55€</span></li>
                                <li><span className="bold">10 séances : 500€</span> <span className="small"> soit 50€ d&apos;économie </span>  </li>
                                <li><span className="bold">20 séances : 900€</span> <span className="small"> soit 200€ d&apos;économie </span> </li>
                            </ul>

                            <p className="mb-small">Possibilité de payer en chèques emploi service prépayés</p>
                            <p className="mb-small">ou</p>
                            <p className="mb-small">Bénéficier d&apos;une réduction d&apos;impot de -50%</p>
                        </div>
                        <div className="content_button">
                            <button className="click_button anim"><a href="#contact-view" className="anchor"><span href="#contact-view" className="anchor">Contactez moi</span></a></button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default PersoPanel;