// Your code here
class Cat {
    //...
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };
    speak() {
        console.log(this.name + " says meow!");
    };
  }
  class Dog {
    //...
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.speak =function(){
            console.log(this.name + " says woof!");
        };
    };
  }
//     };
//     speak() {
//         console.log(this.name + " says woof!");
//     };
//   }
  
  class Bird {
    //...
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };
    speak() {
        console.log("It's me! , the parrot!");
    };
  }