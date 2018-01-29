import { SCHEMA_NAMES } from '../constants';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analyticsSchema = new Schema({
	shortUrl: { type: String, required: true },
},{
	timestamps: true
});

const AnalyticsModel = mongoose.model(SCHEMA_NAMES.ANALYTICS, analyticsSchema);
export { AnalyticsModel };
