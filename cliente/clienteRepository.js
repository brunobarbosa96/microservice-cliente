let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/microservice');

let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

let cliente = new Schema({
    id: ObjectId,
    nome: String
});

module.exports = (app) => {
    let cli = mongoose.model("microservice", cliente, "cliente");

    let repository = {

        getAll: (req, res, callback) => {
            cli.find({}, (err, docs) => {
                if (err)
                    callback(err, null);
                else
                    callback(null, docs);
            });
        },

        get: (req, res, callback) => {
            cli.findById({_id: req.params.id}, (err, doc) => {
                if (err)
                    callback(err, null);
                else
                    callback(null, doc);
            });
        }
    };

    return repository;
};
            // mongoose.connection.collection('cliente').insert({_id: ObjectId, nome: 'Barbosa'});
