function method(a, b) {
  this.a = a;
  this.b = b;
}

method.prototype.divide = function () {
  const obj = {
    fn() {
      return [this.a, this.b, "Hello World !"];
    },
  };
  return obj;
};

const call = new divide(10, 20);
console.log(call.divide().fn());