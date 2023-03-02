// Function.prototype.myBind = function(ctx, ...bindArgs) {
//   return function(...callArgs) {

//   };
// };
// use Call and Apply
// Bind


Function.prototype.myBind = function(context) {
    let that = this
   return () => {that.call(context)}    
}

// function() {
//     console.log("Turning on " + this.name);
//   }.call(context)



class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"


// function Cat(name, owner) {         //constructor!
//     this.name = name
//     this.owner = owner              //this === blank.obj
// }

// let context = new Cat("garfield", "john")      //this === garfield

// Cat.prototype.purr () {
//     console.log (`${this.name} purrs`)      //this === instance of cat 
// }

// -->> this === myBind(context)            
// garfield.myFunc.myBind(snoopy)

// 