const Message = require('../../back-office/Models/Message');
const toolbox = require('../../services/toolbox');
const validator = require('validator');

export default (req, res) => {

    if (req.method === "POST") {

        handleMail(req, res);


        res.status(200).json('>Yooo');
    }
}

function handleMail(req, res) {
    const { email, name, subject, text } = req.query;

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

                // TODO Faire l'envoi de mail
                console.log("Mon document ==>", doc)
            })

        } else {
            errors.email = "Veuillez renseigner un email valide"
            console.log(errors)
        }

    } else {
        console.log(errors)
    }


}