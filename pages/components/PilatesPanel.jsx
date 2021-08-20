import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";


const PilatesPanel = (props) => {
    return (
        <div className="window_modal sub_window_modal">
            <div className="close_icon_modal black_close" onClick={props.close}>
                <AiOutlineCloseCircle />
            </div>
            <img src="/images/pilates.png" className="gym_img" />

            <div className="modal_information">
                <div className="modal_head">
                    <h3>Cours de pilates</h3>
                </div>
                <div className="modal_content_information">
                    <div className="left_content">
                        <p>L’approche globale, douce et tonique La Pilates vise à renforcer les muscles centraux, à allonger la colonne vertébrale, à développer le tonus musculaire et à augmenter la conscience de son corps.</p>

                        <p>Les exercices Pilates sont devenus l’un des moyens les plus populaires de renforcer son corps et de se mettre en forme. De plus en plus de personnes ont adopté la méthode Pilates comme une façon stimulante et amusante de se mettre en forme et de découvrir des aspects de leurs corps qu’elle ignorait jusque-là.
                        </p>

                    </div>
                    <div className="right_content">
                        <div className="content_price">
                            <h5>Tarifs</h5>

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

export default PilatesPanel;