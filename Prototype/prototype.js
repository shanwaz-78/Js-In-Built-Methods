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
    name : 'Guru',
    lname : 'Yadav',
    ip : 293832123,
    favColor : 'red',
    birth : 2003,
 };

 const teacher = {
    subject : 'Maths',
    name : 'Rajesh',
    number : 84390**321,
    lname : 'God',
    birth : 1989,
 };
 obj.__proto__ = Prototype;
teacher.__proto__ = Prototype;

 console.log(`${obj.getFullName()} ${obj.getAge()}`);
 console.log(`${teacher.getFullName()} ${teacher.getAge()}`);