const axios = require('axios');

let generosAssinados = new Array();
let assinatura = "";

class Service {
    async assinarGenero() {
        let payload = {
            entities: [
                {
                    isPattern: "true",
                    id: ".*",
                    type: "Filme"
                }
            ],
            reference: "http://fpg-back/fpg/noticacao",
            duration: "P1M",
            notifyConditions: [
                {
                    type: "ONCHANGE"
                }
            ],
            throttling: "PT5S"
        };
        const result = await axios.post('http://orion:1026/v1/subscribeContext', payload);
        assinatura = result.data.subscribeResponse.subscriptionId;
        return 'Assinado com sucesso';
    }
    async desassinarGenero(genero) {
        if (generosAssinados.length == 0 && assinatura != "") {
            await axios.get('http://orion:1026/v2/subscriptions/' + assinatura);
            assinatura = "";
        }
        const index = generosAssinados.indexOf(genero);

        if (index !== -1) {
            generosAssinados.splice(index, 1)[0];
        }
    }
    async listarFilmes() {
        const result = await axios.get('http://orion:1026/v2/entities?type=Filme&limit=10&offset=0&options=keyValues');
        return result.data;
    }
    async listarFilmesPorGenero(genero) {
        const result = await axios.get('http://orion:1026/v2/entities?type=Filme&q=genero==' + genero + '&options=keyValues');
        return result.data;
    }
    async verificarGenero(requestBody) {
        console.log(requestBody);
    }
}

module.exports = new Service();