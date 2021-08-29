import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validator from 'validator';

const Contact = (props) => {

    // TODO Faire la validation du form
    //        v
    // const validate = (value, type) => {

    // }

    return (
        <div className="full-screen" id="contact-view">
            {/* <p>Contact</p> */}

            <div className="contact_form"></div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    text: ''
                }}

            // TODO Faire la fonction onSubmit
            >
                {(errors, touched) => (
                    <Form>
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
                            className="message"
                            placeholder="Tapez votre message..."
                        />
                        {errors.text && touched.text ? <div>{errors.text}</div> : null}

                        <button type="submit">Valider</button>
                    </Form>
                )}
            </Formik>

        </div>
    )


};

export default Contact;