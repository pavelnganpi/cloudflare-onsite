import { SCHEMA_NAMES, HTTP_STATUS, ERROR_MESSAGES } from './constants';
import { generateId } from './util';
import { Router } from 'express';
var urlExists = require('url-exists');

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
 * Shorten a url given a long url
 */
routes.post('/shorten', async (req, res) => {
	const UrlModel = req.app.get(SCHEMA_NAMES.URL);
	const reqBody = req.body;

	// validate url field is present in request body
	if(reqBody.url === undefined || reqBody.length === 0) {
  	return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: ERROR_MESSAGES.URL_MISSING});
	}

  // validate a url exists,
	urlExists(reqBody.url, function(err, exists) {
		if(!exists) {
			return res.status(HTTP_STATUS.BAD_REQUEST).send({ message: ERROR_MESSAGES.INVALID_URL});
		}

		// create shortId and longUrl in db
		UrlModel.create({shortId: generateId(), longUrl: reqBody.url }, (err, data) => {
			return res.status(HTTP_STATUS.CREATED).send(data);
		});
	});
});


/*
* Retrieve long url given shortId
*/
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
