module.exports = {
	'env': 'dev',
	'port': process.env.PORT || 8080,
	'database': 'mongodb://user:pass@localhost:27017/climb-sa-test',
	'secret': 'yourRandomSecretForJWTauthHere',
	'logDir': __dirname + '/log'
};
