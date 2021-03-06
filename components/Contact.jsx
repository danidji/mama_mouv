import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import validator from "validator";
import instance from "../services/axiosInstance";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import Image from "next/image";

const Contact = (props) => {
    const [isSend, setIsSend] = useState(false);

    const clearIsSend = () => {
        setTimeout(() => setIsSend(false), 10000);
    };

    // Validation des champs du formulaire
    const validate = (value, type) => {
        let error;

        if (type === "name" && value !== undefined && validator.isEmpty(value)) {
            error = "Saisissez votre nom !";
        }
        if (type === "email" && value !== undefined && !validator.isEmail(value)) {
            error = "Saisissez un email valide !";
        }
        if (type === "phone" && value !== "" && !validator.isMobilePhone(value, "fr-FR")) {
            error = "Votre numéro de téléphone n'est pas valide !";
        }

        return error;
    };

    return (
        <section className="full-screen" id="contact-view">
            <div className="form_content">
                <h1>Contact</h1>
                {isSend && <div className="msg_send">Message envoyé</div>}
                <p>Vous souhaitez plus de précisions sur mes cours ou vous inscrire à une séance d&apos;essai ! </p>

                <p> Remplissez ce formulaire de contact :</p>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        text: "",
                    }}
                    onSubmit={(values, actions) => {
                        instance
                            .post("/api/contact", { params: values })
                            .then((response) => {
                                if (response.data.isSend) {
                                    actions.resetForm();
                                    setIsSend(true);
                                    clearIsSend();
                                }
                            })
                            .catch((response) => {
                                console.log("MES ERREURS ==>", response.errors);
                            });
                        actions.setSubmitting(false);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="contact_form">
                            <Field validate={(value) => validate(value, "name")} name="name" type="text" className="name" placeholder="Nom & prénom *" />
                            {errors.name && touched.name ? <div>{errors.name}</div> : null}

                            <Field name="email" type="email" className="email" placeholder="Email *" validate={(value) => validate(value, "email")} />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}

                            <Field name="phone" type="tel" className="phone" placeholder="Téléphone" validate={(value) => validate(value, "phone")} />
                            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

                            <Field name="text" component="textarea" className="text" placeholder="Votre message..." />
                            {errors.text && touched.text ? <div>{errors.text}</div> : null}

                            <button type="submit" className="click_button anim">
                                {" "}
                                <span>Valider</span>
                            </button>
                        </Form>
                    )}
                </Formik>

                <a href="https://www.instagram.com/johanna_coaching/" target="_blank" rel="noreferrer">
                    <div className="icon_share_insta">
                        <div className="icon_share_insta-primary ">
                            <AiOutlineInstagram />
                        </div>
                        <div className="icon_share_insta-secondary">
                            <div
                                style={{
                                    width: "16rem",
                                    height: "21rem",
                                    padding: "0.5rem",
                                }}
                                className="icon_share_insta-content"
                            >
                                <Image alt="instagram" src="/images/QR_insta.jpg" className="icon_share_insta-content" layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                </a>

                <div className="icon_phone">
                    <div className="icon_phone-primary ">
                        <AiFillPhone className="phone_icon" />
                    </div>
                    <div className="icon_phone-secondary">
                        <div className="icon_phone-content">07.60.57.99.70</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
