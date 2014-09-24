// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/********** User notes
//element.childNodes returns array of direct child and decendants, lists them 
//in order of direct decendants

//element.classList returns array of classes for that element specifially

//document.body stores body of html 

***********/
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var results = [];
  var body = document.body;
  if(body.className === className){
  	results.push(body);
  	}
  
console.log("This is the child node", body.childNodes);
  for (var i = 0; i< body.childNodes.length; i++){
  	console.log('this is the childnode.length', body.childNodes.length);
	if(body.childNodes[i].nodeType === 1 && body.childNodes[i].className===className){
		console.log('nodetype',body.childNodes[i].nodeType);
		results.push(body.childNodes[i]);
		}


  }
  console.log(results);
  return results;

};
