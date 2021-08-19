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

            </div>
        </div>
    )
}

export default PersoPanel;