import { SCHEMA_NAMES,HTTP_STATUS, ERROR_MESSAGES } from './constants';
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
		return res.status(200).send(data);
	});
});

// routes.get('/shorten/:shor', async (req, res) => {
// 	const UrlModel = req.app.get(SCHEMA_NAMES.URL);
//
// 	UrlModel.create({shortUrl: generateId(), longUrl: req.body.url }, (err, data) => {
// 		return res.status(200).send(data);
// 	});
// });


export default routes;
