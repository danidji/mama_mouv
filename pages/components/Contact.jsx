import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validator from 'validator';
import axios from 'axios';

const Contact = (props) => {

    // TODO Faire la validation du form
    //        v
    // const validate = (value, type) => {

    // }

    return (
        <div className="full-screen" id="contact-view">

            <div className="form_content">
                <h1>Contact</h1>
                <p>Vous souhaitez plus de précisions sur mes cours, vous inscrire à une séance d'essai. </p>

                <p> Remplissez ce formulaire de contact :</p>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: '',
                        text: ''
                    }}

                    onSubmit={(values, actions) => {

                        console.log('Values ==> ', values);
                        console.log('Actions ==>', actions);

                        // axios.post('/api/contact', { params: values }).then((response) => {
                        // console.log('Mon retour ==> ', response);
                        // })
                    }}

                >
                    {(errors, touched) => (
                        <Form className="contact_form">
                            <Field
                                name="name"
                                type="text"
                                className="name"
                                placeholder="Nom & prénom"
                            />
                            {errors.name && touched.name ? <div>{errors.name}</div> : null}
                            <Field
                                name="email"
                                type="email"
                                className="email"
                                placeholder="Tapez votre email"
                            />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}

                            <Field
                                name="phone"
                                type="tel"
                                className="phone"
                                placeholder="Saisissez votre numéro pour être recontacté"
                            />
                            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
                            <Field
                                name="text"
                                type="textarea"
                                className="text"
                                placeholder="Tapez votre message..."
                            />
                            {errors.text && touched.text ? <div>{errors.text}</div> : null}

                            <button type="submit" className="click_button anim">Valider</button>
                        </Form>
                    )}
                </Formik>
            </div>

        </div >
    )


};

export default Contact;