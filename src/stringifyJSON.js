// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	// your code goes here

	//Establish checking basic types
	if (typeof obj === 'number' || typeof obj === 'boolean'){
		var stringify = ""; //Empty string 

		//Appends empty string to boolean or number to return a string
		return stringify+=obj; 
	}

	//Checks for string
	if (typeof obj === 'string'){
		//Adds quotation marks to string
		return "\""+ obj + "\"";
	}

	//Checks for null and returns null string		
	if (obj === null){
		return 'null';
	}

	//Not stringify-able -- 'function' and 'undefined'
	if(typeof obj === 'function'){
		return '';
	}	

	//Not stringify-able -- 'function' and 'undefined'
	if(obj === 'undefined'){
		return '';
	}

	//Checks if obj is an array and 	
	if (Array.isArray(obj)=== true){
		var arrString="";
		//Iterate and stringify each item	
		for (var i = 0; i < obj.length; i++){
			//Recursion for each item in array
			arrString+=stringifyJSON(obj[i]);

			//Adds comma after each item
			if (i < obj.length - 1){
			arrString+=",";
			}
		}

		//Returns array string with brackets
		return '['+arrString+']';
	}

	//Checks if argument is an object
	if (typeof obj === 'object'){
		var objString ="";
		var count=0;

		//Checks and counts properties in an object
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				count++;
			}
		}

		//Stringify individual property names and property values
		for (var key in obj){
			if (stringifyJSON(obj[key])==='')
				break;
			objString+='"'+ key + '":'; //Property name
			objString+=stringifyJSON(obj[key]);//Property value
			
			//Adds a comma between each property, but not to last property
			if (count-1 != 0){
				objString += ",";
				count--;
			}
		}
		return '{'+objString+'}';
		//return "an object";
	}
};