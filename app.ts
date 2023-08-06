const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

//* Lesson 2 Task_1
let age: number;
age = 50;

let name1: string;
name1 = "Max";

let toogle: boolean;
toogle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (value: number) => number;
callback = (value) => {
  return 100 + value;
};

console.log(callback(3));

//* Lesson 2 Task_2

let anything: any;
anything = -20;
anything = "text";
anything = {};

//* Lesson 2 Task_3

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

//* Lesson 2 Task_4

let person: readonly [string, number];

person = ["Alex", 1];

console.log(person);

//* Lesson 2 Task_5

enum Load {
  "LOADING",
  "READY",
}

const page = { load: Load.LOADING };

if (page.load === Load.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
  console.log("Сторінка завантажилась");
}

//* Lesson 2 Task_6

let value: string | number;

//* Lesson 2 Task_6

let literal: "enable" | "disable";

//* Lesson 2 Task_6

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//* Lesson 2 Task_7

type page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
