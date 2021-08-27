const Message = require('../../back-office/Models/Message');
const toolbox = require('../../back-office/services/toolbox');
const validator = require('validator');
const MailerService = require('../../back-office/services/Mailer');
const config = require('../../back-office/config');

export default (req, res) => {

    if (req.method === "POST") {

        handleMail(req, res);

    }
}

function handleMail(req, res) {
    const { email, name, subject, text } = req.query;
    try {

        // Définition des erreurs
        const errors = {
            email: !email ? "Veuillez renseigner un email" : null,
            name: !name ? "Veuillez renseigner ce champ" : null,
            subject: !subject ? "Veuillez renseigner ce champ" : null,
            text: !text ? "Veuillez renseigner  ce champ" : null
        }

        // Si tous mes champs sont remplie 
        if (!errors.email && !errors.name && !errors.subject && !errors.text) {
            //Si l'email saisie est valide
            if (validator.isEmail(email)) {


                //connexion à la BDD
                require('../../back-office/BDD/database')();
                //TODO 
                // Gestion des erreurs => Vérifier les autres types d'erreur



                const newMessage = {
                    uuid: toolbox.S4() + toolbox.S4() // Création d'un code unique composé de 2 codes hexadécimaux
                    , email: email
                    , name: name
                    , date: new Date() // TODO Modifier le format
                    , subject: subject
                    , text: text
                    , isRead: false
                }

                // Sauvegarde du message en bdd
                Message.create(newMessage, (err, doc) => {
                    // if (err) throw err

                    const mailer = new MailerService();
                    // TODO Faire l'envoi de mail
                    const mailData = {
                        to: "dangbe91@gmail.com",
                        subject: doc.subject,
                        html: `<div>${doc.text}</div>`,
                        // text: doc.text,
                        // html: `<div>${doc.text}</div>`,
                        // from: config.smtp.auth.user
                    }

                    // Envoi de l'email
                    mailer.send("dangbe91@gmail.com", doc.subject, doc.text).then(() => {
                        console.log('Mail envoyé !!')
                        res.status(200).json({ data: "Mail envoyé", errors: {} })
                    }).catch((err) => {
                        console.log("ERREUR ENVOI MAIL ==> ", err)
                    });

                })

            } else {
                errors.email = "Veuillez renseigner un email valide"
                console.log(errors)
                res.json({ errors: errors });
            }

        } else {
            console.log(errors)
            res.json({ errors: errors });
        }
    } catch (error) {
        console; log("ERREUR ==>", error);
    }


}