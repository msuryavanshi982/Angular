const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {

        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        LastName: {
            type: String,
            required: true,
            trim: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        Phone: {
            type: Number,
            required: true,
            trim: true,
        },
        Password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);