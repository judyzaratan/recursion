// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/********** Developer notes
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
  
  //Create variable shortened name for accessing body
  var body = document.body;
  
  //Checks body for classname
  if(body.className === className){
  	results.push(body);
  	}
  	
  var checkMore;	

  //Recursive function
  function checkNodes(node){
	if(!node){
		node = body;
	}
	
	//Iterate through all the element nodes in the body	
	var babyNodes = node.childNodes;

	//Iterate through all the nodes in the body
  	for (var i = 0; i< babyNodes.length; i++){

  		//Checks if it is an element, proceed with checking elements for specific classname
		if(babyNodes[i].nodeType === 1){
		
			//Checking if body childnodes have children (children's children), recusion is needed
			if(babyNodes[i].childNodes.length > 0)
			{	
				checkMore = babyNodes[i]; 
				//Recursion occurs: passes node with children to look deeper for child nodes that have children
				checkNodes(checkMore); //Recursion
			}

			//Checks if element node has more than one class 
			if(babyNodes[i].classList.length > 1){
				var moreClass = babyNodes[i].classList;
			
				for(var k=0; k < moreClass.length; k++){
					if(moreClass[k] === className){
						results.push(babyNodes[i])
					}
				}
			}	
			
			//Checks if node has class name
			if (babyNodes[i].className === className){
				results.push(babyNodes[i]);
			}
		}
  	}
  }

  checkNodes();//Check body nodes and child nodes
  return results;//Return elements array that match class name 

};
