var Addition=require('./Custom_Module_Addition.js');
console.log(Addition.AddNumber(100,30));
console.log(Addition.Substract(100,30));
console.log(Addition.Multiply(100,30));
console.log(Addition.Divide(100,30));


var localTutor=require('./NodeTutorial');
//localTutor.NodeTutorial();
var tut = new localTutor.NodeTutorial();  // Create and save object
tut.pTutor();  // Call function on object
