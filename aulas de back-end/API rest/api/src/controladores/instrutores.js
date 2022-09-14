let { instrutores, identificadorInstrutor } = require('../bancoDeDados')
// os dentros do controladores preciam dos bancos de dados para funcionar

const listarInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
}

const obterInstrutor = (req, res) => {
    const { id } = req.params;

    const isntrutor = instrutores.find((isntrutor) => {
        return isntrutor.id === Number(id)
    })

    if (!isntrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' });
    };

    return res.status(200).json(isntrutor)
}

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "o nome é obrigatorio" })
    }
    if (!email) {
        return res.status(400).json({ mensagem: "o email é obrigatorio" })
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true

    }

    instrutores.push(instrutor)

    return res.status(201).json(instrutor)
}

const editarInstrutor = (req, res) => {
    const { id } = req.params

    const instrutor = instrutores.find((isntrutor) => {
        return isntrutor.id === Number(id)
    })

    const { nome, email, status } = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: "o nome é obrigatorio" })
    }
    if (!email) {
        return res.status(400).json({ mensagem: "o email é obrigatorio" })
    }
    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' });
    };

    instrutor.nome = nome
    instrutor.email = email
    instrutor.status = status

    return res.status(204).send()
}

const atualizarInstrutores = (req, res) => {
    const { id } = req.params
    const { status } = req.body
    const instrutor = instrutores.find((isntrutor) => {
        return isntrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado' });
    };

    instrutor.status = status

    return res.status(204).send()
}
const deletarInstrutor = (req, res) => {
    const { id } = req.params;
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor nao foi encontrado' })
    }

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    })

    return res.status(204).send()
}


module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    editarInstrutor,
    atualizarInstrutores,
    deletarInstrutor,
}