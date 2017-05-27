module.exports = (app) => {

    let repository = require('./clienteRepository')(app);
    let controller = {

        getAll: (req, res) => {
            repository.getAll(req, res, (err, row) => {
                if (err)
                    res.status(500).json("Erro ao buscar dados do cliente");
                else if (!row.length)
                    res.status(204).json("Nenhum registro encontrado.");
                else
                    res.status(200).json(row);
            });
        },

        get: (req, res) => {
            repository.get(req, res, (err, row) => {
                if (err)
                    res.status(500).json("Erro ao buscar dados do cliente");
                else if (!row)
                    res.status(204).json("Nenhum registro encontrado.");
                else
                    res.status(200).json(row);
            });
        }
    };

    return controller;
};