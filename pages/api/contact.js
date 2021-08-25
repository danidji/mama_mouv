const Message = require('../../back-office/Models/Message');
const toolbox = require('../../services/toolbox');

export default (req, res) => {

    if (req.method === "POST") {
        const test = req.query;
        // console.log(`test`, req)
        handleMail(req, res);

        res.status(200).json(test);
    }
}

function handleMail(req, res) {
    // require('../../back-office/BDD/database');

    //TODO Faire la vérif des champs 

    const newMessage = {
        uuid: toolbox.S4() + toolbox.S4()
        , name: req.query.name
        , date: new Date()
        , subject: req.query.subject
        , text: req.query.text
        , isRead: false
    }

    Message.create(newMessage, (err, doc) => {
        if (err) throw err

        console.log(doc)
    })



    // console.log(newMessage);

}