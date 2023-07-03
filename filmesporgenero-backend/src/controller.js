const Service = require('./services');

class Controller { 
    async assinarGenero(request, response) {
        try {
            const result = await Service.assinarGenero();
            return response.status(200).json(result);
        } catch (err) {
            return response.status(400).json({
                error: err
            });
        }
    }
    async desassinarGenero(request, response) {
        const { value } = request.params;
        try {
            const result = await Service.desassinarGenero(value);
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
    }
}

module.exports = new Controller();