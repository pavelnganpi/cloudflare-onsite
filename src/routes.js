import { SCHEMA_NAMES, HTTP_STATUS, ERROR_MESSAGES } from './constants';
import { generateId } from './util';
import { Router } from 'express';

const routes = Router();
import {

} from './util';

/**
 * GET home page
 */
routes.get('/', (req, res) => {
	res.status(200).json({message: " welcome to CloudFlare management"});
});

/**
 * Create Customer
 */
routes.post('/shorten', async (req, res) => {
	const UrlModel = req.app.get(SCHEMA_NAMES.URL);

	UrlModel.create({shortId: generateId(), longUrl: req.body.url }, (err, data) => {
		return res.status(HTTP_STATUS.CREATED).send(data);
	});
});

routes.get('/shorten/:shortId', async (req, res) => {
	const UrlModel = req.app.get(SCHEMA_NAMES.URL);
	console.log("params ", req.params, req.params.shortId);

	const result = await UrlModel.findOne({shortId: req.params.shortId });
	console.log("result ", result);
	// if shortId is not found return not found`
	if (result === null) {
		return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: ERROR_MESSAGES.SHORT_ID_NOT_FOUND});
	}

	return res.status(HTTP_STATUS.OK).send({ url: result.longUrl});
});


export default routes;
