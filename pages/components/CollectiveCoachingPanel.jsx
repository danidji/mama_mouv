import React, { useEffect, useContext } from 'react';
import { animContext } from '../context/animContext';
import { AiOutlineCloseCircle } from "react-icons/ai";

const CollectiveCoachingPanel = (props) => {

    const context = useContext(animContext);

    useEffect(() => {
        context.scrollToAnim()
    }, [])



    return (
        <div className="window_modal">
            <div className="col_modal">

                <img src="/images/fitness-group3.jpg" className="gym_img" />
                <div className="head_modal">
                    <h3>Coaching Collectif</h3>
                    <div className="close_icon" onClick={props.close}>
                        <AiOutlineCloseCircle />
                    </div>
                </div>

                <div className="info_collective">

                    <p>Vous souhaitez vous entrainer à plusieurs ou tous simplement intégrer un groupe pour plus de convivialité ? Au bureau, à domicile ou en plein air ? </p>
                    <p> N’hésitez pas à me contacter pour voir ensemble les possibilités.</p>


                </div>
                <div className="content_button">
                    <button className="click_button anim"><a href="#contact-view" className="anchor"><span href="#contact-view" className="anchor">Contactez moi</span></a></button>
                </div>
            </div>
        </div>
    )
}

export default CollectiveCoachingPanel;