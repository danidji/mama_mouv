import React from 'react';

const Layout = ({ welcome, main, contact }) => {

    return (
        <div className="container">
            {welcome}
            {main}
            {contact}

        </div >
    )


};

export default Layout;