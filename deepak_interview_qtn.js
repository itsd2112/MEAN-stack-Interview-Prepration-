/* (Reverse a string)
	var str = "hi deepak";
	str = str.split("");
	str = str.reverse().join("");
	console.log("str >>>>>>>>>>>", str);
*/

/* ---------------------------------------------------------------------------------------------------------------- */

/* Javascript Undefined vs NULL

-> undefined means a variable has been declared but has not yet declared a value.
-> null is an assignment value. it can be assigned to a variable as a representation of no value.
-> undefined is a type itself.
-> mull is an object.

*/

/* What’s the difference between a variable that is: null, undefined, or undeclared?

	undeclared:  a variable is undeclared when it does not use the var keyword. it gets created on the global object (i.e the 				 window), thus it operates in a different space as declared variable.

	undefined: something is undefined when it has not been defined yet.
			   undefined is a primitive type.
			   e.g->
			   var undefinedVar; //undefined
			   typeof(undefinedVar) // "undefined"

			   undefinedFunction(); //undefined
			   typeof(undefinedFunction); //"undefined" 

			   
			   -> Fix for an undefined variable or function:-

			   	var definedVariable = 'test';
				typeof definedVariable; // "string"

				function definedFunction(){
  					return "I'm defined!"
				}
				typeof definedFunction // "function"

	null: null is a variable that is defined to have a null value.
		  in ECMA MOZILLA doc null is defined as primitive data type.

		  if we check typeof(null), it is object (from w3scholl it can be consider as a bug in js that typeof null is object.) 


 -> undeclared variables don’t even exist
 -> undefined variable exist, but don't have anyhing assigned to them.
 -> null variable exist and have null assigned to them.



*/

/* ----------------------------------------------------------------------------------------------------------------- */

/* Date Types in JS.

	Primitive Data type:
		Boolean
		null
		undefined
		Number
		String
		Symbol(new in ECMA Script 6)

	Object 

*/

/* ------------------------------------------------------------------------------------------------------------------- */

// Hoisting:  
// 	Hoisting is a jvascript mechanism to where variables and functions declarations are moved to the top of their scope before code exection.

// --------------------------------------------------------------------------------------------------------------------------

// Difference betweenn POST amd PUT method

// Choosing between using PUT vs POST should be based on the action's IDEMPOTENCE.
// 	Idempotence is the property of certain operations in imathematics and computer science, that can be applied multiple times without changing the result beyond the initial application.

// we can say that the PUT method is Idempotent because no matter how many times we send the same request , the result will be the same.
// on the other hand the POST Method is not Idempotent since we send the same POST Request multiple times , we will recieve various results.(i.e a new subordinate will be created eah time.)

// the fundamental difference between the POST and PUT requests is reflected in the different meaning of the requested URI.
// The URI in a POST request idendify the resource that will handle the enclosed entity ...
// In contrast, the URI in PUT request identifies the entity enclosed with the request.

// When you know the URL of the thing you want to create or overwrite, a PUT method should be used. Alternatively, if you only know the URL of the category or sub-section of the thing you want to create something within, use the POST method. 

