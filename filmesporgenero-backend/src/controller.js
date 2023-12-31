const Service = require('./services');

class Controller { 
    async assinarGenero(request, response) {
        const { value } = request.params;
        try {
            const result = await Service.assinarGenero(value);
            return response.status(200).json(result);
        } catch (err) {
            return response.status(400).json({
                error: err
            });
        }
    }
    async listarFilmes(request, response) {
        try {
            const result = await Service.listarFilmes();
            return response.status(200).json(result);
        } catch (err) {
            return response.status(400).json({
                error: err
            });
        }
    }
    async listarFilmesPorGenero(request, response) {
        const { value } = request.params;
        try {
            const result = await Service.listarFilmesPorGenero(value);
            return response.status(200).json(result);
        } catch (err) {
            return response.status(400).json({
                error: err
            });
        }
    }
    async notificarGenero(request, response) {
        const result = await Service.verificarGenero(request.body);
        if (result == true) {
            return response.status(200).json(request.body);
        }
    }
}

module.exports = new Controller();