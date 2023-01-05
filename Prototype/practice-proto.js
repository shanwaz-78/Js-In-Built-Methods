// Created String Property called data;
String.prototype.data = () => `This is initial function`;

// Created Object Property called appData;
Object.prototype.appData = () => `Apps Data`;

const passval = {
  getAge: function () {
    const age = new Date().getFullYear() - this.birth;
    return age;
  },
  getFullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const User = new Object();
User.fname = "Shebaz";
User.lname = "Pathan";
User.birth = 1990;

const User2 = new Object();
User2.fname = "Hussain";
User2.lname = "Tak";
User2.birth = 2005;

// Use Prototype to inherit properties or features;
User.__proto__ = passval;
User2.__proto__ = passval;

console.log(`${User.getFullName()} ${User.getAge()}`);
console.log(`${User2.getFullName()} ${User2.getAge()}`);

const val = [1, 2, 3];
Array.prototype.customMap = function () {
  console.log(this);
};

val.customMap();
[1, 2, 3].customMap(); 