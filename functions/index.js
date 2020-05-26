const functions = require('firebase-functions');

// /functions/__sapper__/ directory will contain copy of /__sapper__/ after `npm run build`
const server = require('./__sapper__/build/server/server');

exports.ssr = functions.https.onRequest((req, res) => {
	server.app(req, res);
});
