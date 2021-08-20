import React, { useState } from 'react';

import IndividualCoachingPanel from './IndividualCoachingPanel';
import CollectiveCoachingPanel from './CollectiveCoachingPanel';
import PersoPanel from './PersoPanel';
import PregnantPanel from './PregnantPanel';
import PilatesPanel from './PilatesPanel';

const CoachingPanel = (props) => {
    const [display, setDisplay] = useState(null);

    //Ouverture de la fenetre désiré
    const openPanel = (e) => {
        setDisplay(e.target.dataset.window);
    }

    //Fermeture de la fenetre et retour sur la précédente
    const closePanel = () => {
        if (display === 'individual' || display === 'collective') {
            setDisplay(null);

        } else if (display === 'perso' || display === 'pregnant' || display === 'pilates') {
            setDisplay('individual')
        }
    }

    //Affichage de la fenetre désiré
    const displayWindow = (element) => {
        switch (element) {
            case null:
                break;
            case 'individual':
                return <IndividualCoachingPanel open={openPanel} close={closePanel} />
            case 'collective':
                return <CollectiveCoachingPanel open={openPanel} close={closePanel} />
            case 'perso':
                return <PersoPanel open={openPanel} close={closePanel} />
            case 'pregnant':
                return <PregnantPanel open={openPanel} close={closePanel} />
            case 'pilates':
                return <PilatesPanel open={openPanel} close={closePanel} />
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