// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var stringify = "";
  if (typeof obj === 'number' || typeof obj === 'boolean'){
  	return stringify+=obj;
  	}
  if (obj === null){
  	return 'null';
  	}
	if (Array.isArray(obj)=== true){
		var arrStrStart = '[';
		var arrStrEnd = ']';
		var arrString ="";
		for (var i = 0; i < obj.length; i++){
			arrString+=stringifyJSON(obj[i]);
			if (i < obj.length - 1){
				arrString+=",";
				}
			}
		return '['+arrString+']';
		}
if (typeof obj === 'string'){
  	return "\""+ obj + "\"";
  	}	
			
};
