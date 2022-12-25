// Prototype is used to inherit the object properties or features to an another object.

const Prototype = {
    getAge : function () {
        const age = new Date().getFullYear()-this.birth;
        return age;
    },
    getFullName : function () {
        return `${this.name} ${this.lname}`
    },
};
 const obj = {
    name : 'Shanwaz',
    lname : 'khan',
    favColor : 'red',
    birth : 2003,
 };
 const teacher = {
    subject : 'Maths',
    name : 'Rajesh',
    lname : 'God',
    birth : 1989,
 };
 obj.__proto__ = Prototype;
teacher.__proto__ = Prototype;

 console.log(`${obj.getFullName()} ${obj.getAge()}`);
 console.log(`${teacher.getFullName()} ${teacher.getAge()}`);