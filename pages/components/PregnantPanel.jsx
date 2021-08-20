import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";


const PregnantPanel = (props) => {
    return (
        <div className="window_modal sub_window_modal">
            <div className="close_icon_modal black_close" onClick={props.close}>
                <AiOutlineCloseCircle />
            </div>
            <img src="/images/pregnant.jpg" className="gym_img" />


            <div className="modal_information">
                <div className="modal_head">
                    <h3>Coaching femmes enceintes</h3>
                </div>
                <div className="modal_content_information">
                    <div className="left_content">
                        <h4>Fitness ou pilate pré/post natal :</h4>
                        <p>Outils au service de la détente, de la préparation physique et de la prévention. Autant de sujets majeurs pendant la grossesse! Le pilate prénatal s’adresse autant aux femmes qui ont une grossesse sans problèmes qu’à celles qui nécessitent une prise en charge plus adaptée.</p>
                        <p>Elle procure détente, sérénité et bien-être. Cela demande un travail profond du périnée et un renforcement musculaire adapté. Il favorise ainsi un travail sécuritaire du périnée au quotidien et lors de l’accouchement. Résultat : on limite les lésions sur celui-ci en préservant sa tonicité et on limite le diastasi recti. Enfin, le pilates prénatal permet un maintien de sa condition physique tout au long de la grossesse. Il renforce les articulations, le bas du corps et du dos en vue de l’allaitement et du portage du bébé notamment. L’approche globale, douce et tonique à la fois.</p>


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

export default PregnantPanel;