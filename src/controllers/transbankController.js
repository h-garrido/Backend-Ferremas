const { WebpayPlus } = require('transbank-sdk');
const { IntegrationApiKeys, IntegrationCommerceCodes, Options, Environment } = require('transbank-sdk');

const options = new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration);

exports.createTransaction = async (req, res) => {
    const { buyOrder, sessionId, amount, returnUrl } = req.body;

    try {
        const transaction = new WebpayPlus.Transaction(options);
        const response = await transaction.create(buyOrder, sessionId, amount, returnUrl);
        res.json({
            token: response.token,
            url: response.url // Esta es la URL a la que el usuario debe ser redirigido
        });
    } catch (error) {
        console.error('Error creating transaction:', error); // Registro detallado del error en el servidor
        res.status(500).json({ error: error.message });
    }
};

exports.commitTransaction = async (req, res) => {
    const { token } = req.body;

    try {
        const transaction = new WebpayPlus.Transaction(options);
        const response = await transaction.commit(token);
        res.json(response);
    } catch (error) {
        console.error('Error committing transaction:', error); // Registro detallado del error en el servidor
        res.status(500).json({ error: error.message });
    }
};
