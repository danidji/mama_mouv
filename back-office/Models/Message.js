const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const schemaOptions = {
//     timestamps: {
//         createdAt: "created_at",
//         updatedAt: "edited_at"
//     }
// };


const MessageSchema = new Schema(
    {
        uuid: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        isRead: {
            type: Boolean,
            required: false
        }

    }
    // , schemaOptions
)

module.exports = Message = mongoose.model("Message", MessageSchema, "messages");
