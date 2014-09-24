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
  
  //Stores results and returned variable
  var results = [];		
  
  var body = document.body;
  
  //Checks body for classname
  if(body.className === className){
  	results.push(body);
  	}
  	
  var checkMore;	
  //DELETE later
  //console.log("This is the child node", body.childNodes);
  
  function checkNodes(node){
  //Add recursive function here
	if(!node){
		node = document.body;
		}
		
  	for (var i = 0; i< node.childNodes.length; i++){

  		//Checks if it is an element, proceed to do following
		if(node.childNodes[i].nodeType === 1){
		
			//Checking 
			if(node.childNodes[i].childNodes.length > 0)
			{	
				checkMore = node.childNodes[i];
				console.log('Has more than 1 child node recursion expected', checkMore);
				checkNodes(checkMore); //Recursion
				
			}
		//Checks if there is more than one class
			if(node.childNodes[i].classList.length > 1){
		
				var moreClass = node.childNodes[i].classList;
			
				for(var k=0; k < moreClass.length; k++){
					//DELETE
					console.log("this is the class name", moreClass[k]);
				
					if(moreClass[k] === className){
						results.push(node.childNodes[i])
					}
				}
			}	
			
		if (node.childNodes[i].className === className){
			console.log('nodetype',node.childNodes[i].nodeType);
			results.push(node.childNodes[i]);
		}
		}
  	}
  }
  checkNodes();
  console.log('This is the result of the function', results);
  return results;

};
