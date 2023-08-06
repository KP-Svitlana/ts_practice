var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//* Lesson 2 Task_1
var age;
age = 50;
var name1;
name1 = "Max";
var toogle;
toogle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (value) {
    return 100 + value;
};
console.log(callback(3));
//* Lesson 2 Task_2
var anything;
anything = -20;
anything = "text";
anything = {};
//* Lesson 2 Task_3
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
//* Lesson 2 Task_4
var person;
person = ["Alex", 1];
person[0] = "Dacota";
console.log(person);
