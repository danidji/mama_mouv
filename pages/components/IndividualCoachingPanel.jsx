import React from 'react';
import Image from 'next/image';



import { AiOutlineCloseCircle } from "react-icons/ai";

const IndividualCoachingPanel = (props) => {
    return (
        <div className="window_modal ind_modal">
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
                    <div style={{width:'100%', height:'25rem'}}>
                        <Image
                            src="/images/coach-sportif-perso2.jpg"
                            className="subwindow_image" 
                            data-window="perso" 
                            alt="" 
                            layout="fill"
                            objectFit="cover"
                            
                        />
                     </div>
                </div>
                <div
                    className="sub_window"
                    data-window="pregnant"
                    onClick={props.open}
                >
                    <div className="subWindow_title" data-window="pregnant" >Femmes enceintes</div>
                    <div style={{width:'100%', height:'25rem'}}>
                        <Image
                            src="/images/coaching_jo8.png"
                            className="subwindow_image" 
                            data-window="pregnant"
                            alt="" 
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div
                    className="sub_window"
                    data-window="pilates"
                    onClick={props.open}
                >
                    <div className="subWindow_title" data-window="pilates" >Pilates</div>
                    <div style={{width:'100%', height:'25rem'}}>
                        <Image
                            src="/images/pilates2.png" 
                            className="subwindow_image" 
                            data-window="pilates" 
                            alt="" 
                            layout="fill"
                            objectFit="cover"
                        />
                     </div>
                </div>
            </div>
            <div className="bottom_modal">
                <p>Les cours sont réalisés à votre domicile ou en extérieur.</p>
                <p>Vous avez aussi la possibilité de partager votre séance avec un(e) ami(e), les frais sont ainsi divisés par 2.</p>
            </div>
        </div>
    )
}

export default IndividualCoachingPanel;