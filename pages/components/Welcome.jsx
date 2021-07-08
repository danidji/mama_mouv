import React from 'react';
import Image from 'next/image';

const Welcome = (props) => {

    return (
        <section className="welcome full-screen">
            <div className="header">

            </div>
            <div className="home_content">
                <div className="logo_draw">
                    <Image
                        src="/images/logo_draw.png"
                        alt="Mama mouv'"
                        width={310}
                        height={500}
                        layout="responsive"
                    />
                    <p>Individuel / Collectif</p>
                </div>
                <div className="welcome_title">
                    <h1 className="title_selima">Bienvenue</h1>
                    <h3 className="title_selima">sur</h3>


                    <div className="logo_title">
                        <Image
                            src="/images/logo_title.png"
                            alt="Mama mouv'"
                            width={725}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                </div>
                <div className="logo_draw">
                    <Image
                        src="/images/logo_draw2.png"
                        alt="Mama mouv'"
                        width={310}
                        height={500}
                        layout="responsive"
                    />
                    <p>Femmes enceintes</p>
                </div>
            </div>
            <div className="border_title"></div>
            <h2 className="sub_title">Coaching - Paris - IDF Est</h2>
            <div className="footer">

            </div>
        </section>
    )


};

export default Welcome;