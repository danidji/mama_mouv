import React, { useState } from 'react';

import IndividualCoachingPanel from './IndividualCoachingPanel';
import CollectiveCoachingPanel from './CollectiveCoachingPanel';

const CoachingPanel = (props) => {
    const [display, setDisplay] = useState(null);

    const openPanel = (e) => {
        // console.log(e.target.dataset.window)
        setDisplay(e.target.dataset.window);
    }

    const closePanel = () => {
        setDisplay(null);
    }

    const displayWindow = (element) => {
        switch (element) {
            case null:
                break;
            case 'individual':
                return <IndividualCoachingPanel open={openPanel} close={closePanel} />
            case 'collective':
                return <CollectiveCoachingPanel open={openPanel} close={closePanel} />

            default:
                break

        }
    }



    return (
        <div className="coaching_panel">
            <div className="coaching_head">
                <h1>Mes Coaching</h1>
            </div>
            <div className="window_container">
                <div
                    className="window individual"
                    data-window="individual"
                    onClick={openPanel}
                >
                    <div className="window_title" data-window="individual">Individuel</div>
                    <img src="images/coach-indiv.jpg" alt="" data-window="individual" />
                </div>
                <div
                    className="window collective"
                    data-window="collective"
                    onClick={openPanel}
                >
                    <div className="window_title" data-window="collective">Collectif</div>
                    <img src="images/coach_collectif.jpg" alt="" data-window="collective" />
                </div>
                {displayWindow(display)}
            </div>
        </div>
    )
}

export default CoachingPanel;