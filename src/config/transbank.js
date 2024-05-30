const { Options, Environment, IntegrationApiKeys, IntegrationCommerceCodes, WebpayPlus } = require('transbank-sdk');

// Configuración de Transbank
const options = new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration);

module.exports = {
    options,
    WebpayPlus
};