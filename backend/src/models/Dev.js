const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String, // notação alternativa já que 'bio' não é obrigatório.
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
    timestamps: true // define a criação e preenchimento automáticos dos campos createdAt e updatedAt no esquema.
});

module.exports = model('Dev', DevSchema);