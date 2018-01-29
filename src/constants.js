const HTTP_STATUS = {
	OK: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
};

const SCHEMA_NAMES = {
	URL: 'Url',
	ANALYTICS: 'Analytics'
};

const ERROR_MESSAGES = {
	SHORT_ID_NOT_FOUND: 'shortId not found',
	URL_MISSING: 'url field missing',
	INVALID_URL: 'invalid url.'
};

export {
	HTTP_STATUS,
	SCHEMA_NAMES,
	ERROR_MESSAGES,
}
