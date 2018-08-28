##process.argv
 return an array contatining command line arguments passed when we run node.js  
 first element = "process.execPath" -- property returns the absolute pathname of the executable that started the Node.js process.
 The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.

## process.argv0
 	The process.argv0 property stores a read-only copy of the original value of argv[0] passed when Node.js starts.
 	example===
	$ bash -c 'exec -a customArgv0 ./node'
	> process.argv[0]
	'/Volumes/code/external/node/out/Release/node'
	> process.argv0
	'customArgv0'
============================================================================================================================================
##async.waterfall
 -Runs an array of functions in series, each passing their results to the next in the array. However, if any of the functions pass an error to the callback,
  the next function is not executed and the main callback is immediately called with the error.

  example-
  var create = function (req, res) {
    async.waterfall([
        _function1(req),
        _function2,
        _function3
    ], function (error, success) {
        if (error) { alert('Something is wrong!'); }
        return alert('Done!');
    });
};
===============================================================================================================================
Innovate

Suppose a person wants to bring a new product in the market (e.g. Honda Bike) and he want to have a survey from group of people who ride bikes or uses it directly or indirectly,so that person is CUSTOMER in the project.

Now to have the survey from group of people customer needs those groups of people , here comes SUPPLIER in the picture .
Suppliers are the one who have groups of people already registered. for eg. anyone going to a shopping mart, there at the time of billing the person used to take our info i.e email contct no. and all ,so we can take that person as a supplier with the informations related to us.

Here comes INNOVATE in the picture whiich works as a mediator between CUSTOMER and SUPLLIER .
JOB is the project for eg. HONDA will be the job .There are groups in a job , each group in a job is like a survey like honda wants to have a survey on two products like 1 car and bike so there will be 2 groups , 1 for car and 1 for bike .

==========================================================================================================
##.pluck(underscore)
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
==============================================================================================

## difference between the JavaScript switch statement and switch statements
in other programming languages is that the expression that is being tested in the state‐
ment can be of any data type, as opposed to an integral data type, as required by languages
such as C++ and Java



===========================================================================================================================

_.zip(*arrays) 

e.g = var a1 =["AA", "BB", "CC", "DD"]
      var a2 = [1, 2, 3, 4]
      var a3 = ['a', 'b', 'c', 'd', 'e']
      _.zip(a1, a2, a3);
      resuls===========[["AA",1,"a"],["BB",2,"b"],["CC",3,"c"],["DD",4,"d"],[null,null,"e"]]
_.unzip (array)
 opposite of zip
==================================================================================================================================

### db.collection.findOneAndReplace(filter, replacement, options)
   The operation returns the original document that has been replaced:
  e.g: Scores collection 
  { "_id" : 1521, "team" : "Fearful Mallards", "score" : 25000 },
{ "_id" : 2231, "team" : "Tactful Mooses", "score" : 23500 },
{ "_id" : 4511, "team" : "Aquatic Ponies", "score" : 19250 },
{ "_id" : 5331, "team" : "Cuddly Zebras", "score" : 15235 },
{ "_id" : 3412, "team" : "Garrulous Bears", "score" : 22300 }

db.scores.findOneAndReplace(
   { "score" : { $lt : 20000 } },
   { "team" : "Observant Badgers", "score" : 20000 }
)

reultsssss=========
{ "_id" : 2512, "team" : "Aquatic Ponies", "score" : 19250 }

=================================================================================================================================================================

MongoDB is the native driver for interacting with a mongodb instance 
MongoDB is a database that stores your data as documents


Mongoose is an Object modeling tool for MongoDB.
Mongoose is an Object Document Mapper (ODM). 
This means that Mongoose allows you to define objects with a strongly-typed schema that is mapped to a MongoDB document.
*"buffer" data type = allow u to save binary data,
*"Mixed" data type  =  turns the property into an "anything goes" field. it loses many of the great features that Mongoose provides, such as data validation and detecting entity changes to automatically know to update the property when saving.
*"ObjectId" data type =  specifies a link to another document in your database.For example, if you had a collection of books and authors, the book document might contain an ObjectId property that refers to the specific author of the document.


Mongoose is a JavaScript library that allows you to define schemas with strongly typed data. Once a schema is defined, Mongoose lets you create a Model based on a specific schema. A Mongoose Model is then mapped to a MongoDB Document via the Models schema definition.
===============================================================================================================

PROMISES:
*It represents the  results of asyncronous operations
"Imagine you are a kid. Your mom promises you that she'll get you a new phone next week."
That is a promise. A promise has 3 states. They are=
    Promise is pending: You don't know if you will get that phone until next week.\
    Promise is resolved: Your mom really buy you a brand new phone.\
    Promise is rejected: You don't get a new phone because your mom is not happy.Once a promise is resolved or rejected, it is immutable (i.e. it can never change again).



// Promise.all is good for executing many promises at once
Promise.all([
  promise1,
  promise2
]);


====================================================================================================
change extension of multiple file through terminal

#for f in *.js; do  mv -- "$f" "${f%.js}.text"; done













================================================================================================================================================================
difference between var , let and const

*********************var************************************
it is processed before the execution of the code.
the scope of var is in the execution context.
if it is declared outside the function it is global

example:
function nodeSimplified(){
  var a =10;
  console.log(a);  // output 10
  if(true){
   var a=20;
   console.log(a); // output 20
  }
  console.log(a);  // output 20
}

===if we are writing like this

  function nodeSimplified(){ 
  var a =10;   
  var a =20;   
  console.log(a);  //output 20 
}

it will not throw any error


*****************************let*****************************************
the let statement allow us to create a variable with the scope limited to the block on which it is used
example:
function nodeSimplified(){
  let a =10;
  console.log(a);  // output 10
  console.log(b);  // output 10
  if(true){
   let a=20;
   let b =5 
   console.log(a); // output 20
  }
  console.log(a);  // output 10
}

== if we are writing like this 

function nodeSimplified(){
  let a =10;
  let a =20; //throws syntax error
  console.log(a); 
}

it will throws syntax error already defined variable

************************************const************************************

the const statement allow us to create a variable with the scope limited to the bloack on which it is used
example:
function nodeSimplified(){
  const MY_VARIABLE =10;
  console.log(MY_VARIABLE);  //output 10 
}
const statement values can be assigned once and they cannot be reassigned

function nodeSimplified(){
  const MY_VARIABLE =10;
  console.log(MY_VARIABLE);  //output 10
  MY_VARIABLE =20;           //throws type error
  console.log(MY_VARIABLE); 
}

=========================================================================================================================================================
apply,bind,call

===============================
prototype
When a function is created in JavaScript, JavaScript engine adds a prototype property to the function.
This prototype property is an object (called as prototype object) has a constructor property by default.
constructor property points back to the function on which prototype object is a property. 
We can access the function’s prototype property using the syntax functionName.prototype.


==========================================================================================================================
=====================================$regex======================================================

1)db.collectionName.find({"name":{$regex:"XX"}})
  *  find all names which have the characters 'XX' in the collection, give all documents having name "XX" in it

2)db.collectionName.find({"name":{$regex:"XX", $options:'i'}})
  $options with 'I' parameter (which means case insensitivity) 
  specifies that we want to carry out the search no matter if we find the letters 'XX' in lower or upper case.

3)db.collectionName.find({"name":/XX/}})
The // options basically means to specify your search criteria within these delimiters.
 Hence, we are specifying /XX/ to again find those documents which have 'XX' in their name.


 ===========================
  if((((res || {}).data || {}).companies || []).length){
                this.customers = res.data.companies ;
            }

=============================================
/.*\S.*/
This means

/ = delimiter
.* = zero or more of anything but newline
\S = anything except a whitespace (newline, tab, space)

=====================================================
splice() vs slice()

(1). The splice() method returns the removed item(s) in an array and 
slice() method returns the selected element(s) in an array, as a new array object.
(2). The splice() method changes the original array and slice() method doesn’t change the original array.
(3). The splice() method can take n number of arguments:

example:
var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
// shows [8]
//splice from index 2 i.e no. 8 and remove 8 only '1' param tell how many number to be deleted


var array=[1,2,3,4,5]
console.log(array.slice(2,4));
// shows [3, 4, 5], 
returned selected element(s).
//in case of slice second param is the last index to which elemt to spliced
//
============================================================================================================
                      PACKAGE DEPENDENCIES
devDependencies are modules which are only required during development,(only to develope)
while dependencies are modules which are also required at runtime.(required only for run)

To save dependencies as devDependencies use "npm install --save-dev" otherwise only "npm install --save"
==========================================================
-------------------JWT--------------------------
JWT is just a string with the following format:
header.payload.signature



(encoding vs encryption)

encoding means tranforming data into another form redable by most of the system, 
It is not  used for securing data 
signing data allows data receiver to verify the authenticity of the source of the data

encryption is encoding technique in which message is encoded by using encryption algorithmin  such a way so that 
only authorirized user can access the message

======================================================================
difference between arr = [] and arr.length = 0
***arr = [] EXAMPLE
It will actually create a new empty array, if we have refenced this array from another variable then the 
original refence array will remain same

var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList = []; // Empty the array 
console.log(anotherArrayList); // Output ['a','b','c','d','e','f']



***arr.length = 0 EXAMPLE
emptying the array also updates all the reference variables that point to the original array.

var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []


====================================================
## The delete operator is used to delete properties from an object


## function prototype can be accessed using <function_name>.prototype
and An object (instance) does not expose prototype property we can access it using "__proto__"

=============================HOISTING=====================================
## JavaScript complier moves all declarations of variables and 
functions at the top so that there will not be any error
## hoisting isonly posible with declaraction not with initilization
  JavaScript will not move variables that are declared and initialized in a single line.

## Functions definition moves first before variables



=======================================================
Number + Number -> Addition
Boolean + Number -> Addition
Boolean + Number -> Addition
Number + String -> Concatenation
String + Boolean -> Concatenation
String + String -> Concatenation