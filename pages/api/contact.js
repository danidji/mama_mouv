const Message = require("../../back-office/Models/Message");
const toolbox = require("../../back-office/services/toolbox");
const validator = require("validator");
const MailerService = require("../../back-office/services/Mailer");

const handler = (req, res) => {
    if (req.method === "POST") {
        handleMail(req, res);
    }
};

function handleMail(req, res) {
    const { email, name, phone, text } = req.body.params;
    try {
        // Définition des erreurs
        const errors = {
            email: !email ? "Veuillez renseigner un email" : null,
            name: !name ? "Veuillez renseigner ce champ" : null,
            // subject: !subject ? "Veuillez renseigner ce champ" : null,
            text: !text ? "Veuillez renseigner  ce champ" : null,
        };

        // Si tous mes champs sont remplie
        if (!errors.email && !errors.name && !errors.text) {
            //Si l'email saisie est valide
            if (validator.isEmail(email)) {
                //Si un numéro de tel est renseigné et que celui ci n'est pas valide
                if (phone && !validator.isMobilePhone(phone, "fr-FR")) {
                    errors.phone = "Veuillez renseigner un numéro de téléphone valide";
                    res.json({ errors: errors });
                }
                //connexion à la BDD
                require("../../back-office/BDD/database")();
                //TODO
                // Gestion des erreurs => Vérifier les autres types d'erreur

                const newMessage = {
                    uuid: toolbox.S4() + toolbox.S4(), // Création d'un code unique composé de 2 codes hexadécimaux
                    email: email,
                    name: name,
                    phone: phone,
                    date: new Date(), // TODO Modifier le format
                    text: text,
                    isRead: false,
                };

                // Sauvegarde du message en bdd
                Message.create(newMessage, (err, doc) => {
                    if (err) throw err;

                    const mailer = new MailerService();

                    // Envoi de l'email
                    mailer
                        .send("dangbe91@gmail.com", doc.subject, doc.text)
                        .then(() => {
                            console.log("Mail envoyé !!");
                            res.status(200).json({ isSend: true, errors: {} });
                        })
                        .catch((err) => {
                            console.log("ERREUR ENVOI MAIL ==> ", err);
                        });
                });
            } else {
                errors.email = "Veuillez renseigner un email valide";
                console.log(errors);
                res.json({ errors: errors });
            }
        } else {
            console.log(errors);
            res.json({ errors: errors });
        }
    } catch (error) {
        console;
        log("ERREUR ==>", error);
    }
}

export default handler;
