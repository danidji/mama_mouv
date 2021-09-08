import React, { useState } from 'react';
import Navbar from './Navbar';
import clsx from 'clsx';

const HambergerMenu = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div className={clsx('hamberger_menu', openMenu && "active")} onClick={handleClick}>
            <div className="button_menu">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Navbar />
        </div>
    )
}

export default HambergerMenu;