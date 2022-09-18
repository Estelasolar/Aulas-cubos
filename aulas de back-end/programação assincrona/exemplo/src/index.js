const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground')

const app = express();

app.get('/', async (req, res) => {
    const cidade = await getCityFromZipcode('44380000')
    const cidade2 = await getCityFromZipcode('41256250')

    const promise = await Promise.all([cidade, cidade2])
    const [resposta1, resposta2] = promise;

    return res.send(`A cidade encontrada foi ${resposta1} e ${resposta2}`);
});

app.get('/pacote/:nomePacote', async (req, res) => {
    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    const { nomePacote } = req.params;

    return res.send(descricaoPacote)
});

app.listen(3000);