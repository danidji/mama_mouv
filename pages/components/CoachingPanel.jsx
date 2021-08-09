import React from 'react';

const CoachingPanel = (props) => {
    return (
        <div className="coaching_panel">
            <div className="coaching_head">
                <h1>Mes Coaching</h1>
            </div>
            <div className="window_container">
                <div className="window individual" data-window="individual">
                    <div className="window_title">Individuel</div>
                    <img src="images/coach-indiv.jpg" alt="" />
                </div>
                <div className="window collective" data-window="collective">
                    <div className="window_title">Collectif</div>
                    <img src="images/coach_collectif.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default CoachingPanel;