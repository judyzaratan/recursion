// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var stringify = "";
  if (typeof obj === 'number' || typeof obj === 'boolean'){
  	return stringify+=obj;
  	}
  
  if (typeof obj === 'string'){
  	return "\""+ obj + "\"";
  	}
  		
  if (obj === null){
  	return 'null';
  	}

	if(typeof obj === 'function')
		return '';
	if(obj === 'undefined')
		return '';
			
  if (Array.isArray(obj)=== true){
		var arrString="";
		for (var i = 0; i < obj.length; i++){
			arrString+=stringifyJSON(obj[i]);
			if (i < obj.length - 1){
				arrString+=",";
				}
			}
		return '['+arrString+']';
		}

	if (typeof obj === 'object'){
		var objString ="";
		var count=0;
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
			count++;
			}
			}
		for (var key in obj){
			if (stringifyJSON(obj[key])==='')
				break;
			objString+='"'+ key + '":';
			objString+=stringifyJSON(obj[key]);
			if (count-1 != 0){
				objString += ",";
				count--;
				}
			}
		return '{'+objString+'}';
		//return "an object";
		}
};