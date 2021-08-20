import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";


const PersoPanel = (props) => {
    return (
        <div className="window_modal sub_window_modal">
            <div className="close_icon_modal" onClick={props.close}>
                <AiOutlineCloseCircle />
            </div>
            <img src="/images/training.jpg" className="gym_img" />
            <div className="modal_information">
                <div className="modal_head">
                    <h3>Suivi personnalisé</h3>
                </div>
                <div className="modal_content_information">
                    <div className="left_content">
                        <p>Mon objectif est avant tout de réalisé le votre, que ce soit pour <span className="bold"> la perte de poid</span>,<span className="bold"> la remise en forme</span>, <span className="bold">la prise de masse</span>, nous analyserons ensemble vos objectifs pour <span className="bold">construire un programme entièrement adapté à vos besoins.</span></p>

                        <p>Votre programme sera entièrement <span className="bold">évolutif et adapté à vos progrès et votre évolution.</span></p>

                        <p>Coaching adapté à tous, <span className="bold">Débutant</span>, <span className="bold">Professionnel</span>, <span className="bold">Sénior</span> ou <span className="bold">PMR</span>.</p>

                    </div>
                    <div className="right_content">
                        <div className="content_price">
                            <h5>Tarifs</h5>
                            <p>1er séance, bilan de forme et établissement du programme offert !</p>
                            <ul>
                                <li><span className="bold">1 séances : 50€</span></li>
                                <li><span className="bold">10 séances : 400€</span></li>
                                <li><span className="bold">20 séances : 700€</span></li>
                            </ul>

                        </div>
                        <div className="content_button">
                            <button className="click_button anim"> <span> Contactez moi</span></button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default PersoPanel;