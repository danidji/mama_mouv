import React, { useEffect, useContext } from "react";
import Image from "next/image";
import animContext from "../context/animContext";
import { AiOutlineCloseCircle } from "react-icons/ai";

const PilatesPanel = (props) => {
    const context = useContext(animContext);

    useEffect(() => {
        context.scrollToAnim();
    }, []);

    return (
        <div className="window_modal sub_window_modal">
            <div className="close_icon_modal black_close" onClick={props.close}>
                <AiOutlineCloseCircle />
            </div>
            <div style={{ width: "100%", height: "100%" }} className="sub_window_image">
                <Image src="/images/pilates.png" className="sub_window_image" layout="fill" objectFit="cover" />
            </div>
            <div className="modal_information">
                <div className="modal_head">
                    <h3>Cours de pilates</h3>
                </div>
                <div className="modal_content_information">
                    <div className="left_content fs_large">
                        <p>
                            L&apos;approche globale, douce et tonique, le Pilates vise à renforcer les muscles centraux, à allonger la colonne vertébrale, à développer le tonus musculaire et à
                            augmenter la conscience de son corps.
                        </p>

                        <p>Les exercices Pilates sont devenus l&apos;un des moyens les plus populaires de renforcer son corps et de se mettre en forme. </p>
                        <p>
                            {" "}
                            De plus en plus de personnes ont adopté la méthode Pilates comme une façon stimulante et amusante de se mettre en forme et de découvrir des aspects de leurs corps qu’elle
                            ignorait jusque-là.
                        </p>
                    </div>
                    <div className="right_content">
                        <div className="content_price">
                            <h5>Tarifs</h5>
                            <p>1er séance offerte !</p>
                            <ul>
                                <li>
                                    <span className="bold">1 séances : 55€</span>
                                </li>
                                <li>
                                    <span className="bold">10 séances : 500€</span> <span className="small"> soit 50€ d&apos;économie </span>{" "}
                                </li>
                                <li>
                                    <span className="bold">20 séances : 900€</span> <span className="small"> soit 200€ d&apos;économie </span>{" "}
                                </li>
                            </ul>

                            <p className="mb-small">Possibilité de payer en chèques emploi service prépayés</p>
                            <p className="mb-small">ou</p>
                            <p className="mb-small">Bénéficier d&apos;une réduction d&apos;impot de -50%</p>
                        </div>
                        <div className="content_button">
                            <button className="click_button anim">
                                <a href="#contact-view" className="anchor">
                                    <span href="#contact-view" className="anchor">
                                        Contactez moi
                                    </span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PilatesPanel;
