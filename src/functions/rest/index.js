
import {notificationHandler, serviceVerification} from "./routes";

const api = require('lambda-api')();

api.use((req, res, next) => {
    res.cors();
    next();
})

api.get('/esg/whatsapp/webhook', serviceVerification)
api.post('/esg/whatsapp/webhook', notificationHandler)

export const handle = async (event, context) => {
    api.app({});
    return api.run(event, context);
}
