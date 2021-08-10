import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

const IndividualCoachingPanel = (props) => {
    return (
        <div className="window_modal">
            <div className="head_modal">
                <h3>Coaching individuel</h3>
                <div className="close_icon" onClick={props.close}>
                    <AiOutlineCloseCircle />
                </div>
            </div>
            <div className="modal_content">
                <div
                    className="sub_window"
                    data-window="perso"
                    onClick={props.open}
                >
                    <div className="subWindow_title" data-window="perso" >Personnalisé</div>
                    <img src="images/coach-sportif-perso2.jpg" data-window="perso" alt="" />
                </div>
                <div
                    className="sub_window"
                    data-window="pregnant"
                    onClick={props.open}
                >
                    <div className="subWindow_title" data-window="pregnant" >Femmes enceintes</div>
                    <img src="images/coaching_jo8.png" data-window="pregnant" alt="" />
                </div>
                <div
                    className="sub_window"
                    data-window="pilates"
                    onClick={props.open}
                >
                    <div className="subWindow_title" data-window="pilates" >Pilates</div>
                    <img src="images/pilates2.png" data-window="pilates" alt="" />
                </div>
            </div>
        </div>
    )
}

export default IndividualCoachingPanel;