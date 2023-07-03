const axios = require('axios');

let generoAssinado = "";

class Service {
    async assinarGenero(genero) {
        generoAssinado = genero;
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
        if (generoAssinado == "") { 
            const result = await axios.post('http://orion:1026/v1/subscribeContext', payload);
            assinatura = result.body.subscribeResponse.subscriptionId;
            return result.body.subscribeResponse.subscriptionId;
        }
        return `Assinado ${generoAssinado} com sucesso`;
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
        return true;
    }
}

module.exports = new Service();