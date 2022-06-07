//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    //(C) - Criar
    try {
        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })

        console.log(resultadoCreate);

        //(R) - Read
        const produtos = await Produto.findAll();
        console.log(produtos);

        //(U) - Update
        const produto = await Produto.findByPk(1);
        produto.nome = "Mouse Top";

        const resultadoSave = await produto.save();
        console.log(resultadoSave);

        //(D) - estruir
        Produto.destroy({ where: { id: 1 }});

    } catch (error) {
        console.log(error);
    }
})();