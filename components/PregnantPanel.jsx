import React, { useEffect, useContext } from 'react';
import  animContext from '../context/animContext';
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from 'next/image';

const PregnantPanel = (props) => {

    const context = useContext(animContext);

    useEffect(() => {
        context.scrollToAnim()
    }, [])

    return (
        <div className="window_modal sub_window_modal">
            <div className="close_icon_modal black_close" onClick={props.close}>
                <AiOutlineCloseCircle />
            </div>
            <div style={{width:'100%', height:'100%'}}>
                <Image 
                    src="/images/pregnant.jpg" 
                    className="sub_window_image" 
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="modal_information">
                <div className="modal_head">
                    <h3>Coaching femmes enceintes</h3>
                </div>
                <div className="modal_content_information">
                    <div className="left_content fs_small">
                        <p> L’activité physique pendant la grossesse permet de mieux vivre les modifications corporelles, elle diminue la fatigue et l’anxiété, limite le surplus de poids ainsi que le diabète gestationnel puis prévient les douleurs liées au changement de posture.</p>
                        <p>Je vous offre plusieurs activités pour vous permettre de garder la forme durant votre grossesse et après l&apos;accouchement :</p>
                        <ul>
                            <li><span className="bold">Fitness pré/post natal</span> : un mélange d’exercices cardiovasculaire et de renforcement musculaire ciblés sur les muscles sollicités pendant et après la grossesse. Avec un programme  adapté au fur et à mesure des trimestres,vous garderez la forme tout au long de votre grossesse et bien après..</li>
                            <li><span className="bold">Pilates pré/post natal </span>: Le Pilate est une activité physique adaptée à la femme enceinte par la pratique d’une méthode de gym douce centrée sur les muscles profonds et du périnée. Cela limite donc les lésions sur celui-ci en préservant sa tonicité, parfait pour les futures mamans qui veulent s’exercer en douceur</li>
                            <li><span className="bold">Zumba pré natal </span>: Au même titre que le fitness, c&apos;est un exercice cardiovasculaire qui permet de garder la forme et la mobilité tout en s&apos;éclatant en dansant. </li>
                        </ul>



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

export default PregnantPanel;