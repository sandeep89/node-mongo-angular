var utils = module.exports;

utils.outputOK = function(req, res, next){
	return res.send(200,{});
}