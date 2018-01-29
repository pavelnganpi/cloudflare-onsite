import {ERROR_MESSAGES, HTTP_STATUS} from "./constants";
const request = require('request');
const shortid = require('shortid');
const env = process.env.NODE_ENV;

function getDBUrl() {
	if(env === 'test') {
		return 'mongodb://localhost:27017/test';
	} else {
		return 'mongodb://localhost:27017/cloudflare';
	}
}

// generates uniqueId of length 8
function generateId() {
	return shortid.generate();
}

export {
	getDBUrl,
	generateId,
}
