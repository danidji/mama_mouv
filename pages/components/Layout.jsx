import React from 'react';

const Layout = ({ welcome, mainContent, contact, navbar }) => {

    return (
        <>
            <div className="navbar">
                {navbar}
            </div>
            <div className="container">
                {welcome}
                {mainContent}
                {contact}

            </div >
        </>
    )


};

export default Layout;