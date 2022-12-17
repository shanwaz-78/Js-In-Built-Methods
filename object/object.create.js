// The Object.create() method creates a new object, 
// using an existing object as the prototype of the newly created object.

const person = {
    ishuman : false,
    introduction : function () {
        console.log(`My Name Is ${this.name} Am I Human ${this.ishuman}`)
    }
}

// we used create method when the values are fixed;
const obj = Object.create(person)
obj.name = "Shanwaz";
delete obj.ishuman;
obj.introduction();
