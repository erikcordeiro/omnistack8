const axios = require('axios');
const Dev = require('../models/Dev');


module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes }},
                { _id: { $nin: loggedDev.dislikes }}
            ]
        });

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        // verifica a pre existência do usuário.
        const userExists = await Dev.findOne({ user: username });
        if (userExists) {
            // retorna o registro pre existente.
            return res.json(userExists);
        }

        // obtém os dados do usuário do GitHub.
        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        // persiste os dados na base de dados.
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        // retorna o registro recém criado.
        return res.json(dev);
    }
};