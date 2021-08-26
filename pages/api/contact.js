const Message = require('../../back-office/Models/Message');
const toolbox = require('../../services/toolbox');

export default (req, res) => {

    if (req.method === "POST") {
        const test = req.query;
        // // console.log(`test`, req)
        handleMail(req, res);

        res.status(200).json(test);
    }
}

function handleMail(req, res) {

    require('../../back-office/BDD/database')();
    //TODO 
    // Faire la vérif des champs 
    // Gestion des erreurs


    const newMessage = {
        uuid: toolbox.S4() + toolbox.S4() // Création d'un code unique composé de 2 codes hexadécimaux
        , name: req.query.name
        , date: new Date() // TODO Modifier le format
        , subject: req.query.subject
        , text: req.query.text
        , isRead: false
    }

    // Sauvegarde du message en bdd
    Message.create(newMessage, (err, doc) => {
        // if (err) throw err

        console.log("Mon document ==>", doc)
    })

}