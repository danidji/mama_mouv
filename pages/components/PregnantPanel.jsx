import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";


const PregnantPanel = (props) => {
    return (
        <div className="window_modal sub_window_modal">
            <div className="close_icon_modal pregnant_close" onClick={props.close}>
                <AiOutlineCloseCircle />
            </div>
            <img src="/images/pregnant.jpg" className="gym_img" />
        </div>
    )
}

export default PregnantPanel;