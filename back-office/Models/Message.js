const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaOptions = {
    // timestamps: {
    //     createdAt: "created_at",
    //     updatedAt: "edited_at"
    // },
    versionKey: false
};


const MessageSchema = new Schema(
    {
        uuid: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
        },
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
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
    , schemaOptions
)

module.exports = Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);
