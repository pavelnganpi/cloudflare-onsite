import { SCHEMA_NAMES } from '../constants';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
	shortId: { type: String, required: true, index: true },
	longUrl: { type: String, required: true },
},{
	timestamps: true
});

const UrlModel = mongoose.model(SCHEMA_NAMES.URL, urlSchema);
export { UrlModel };
