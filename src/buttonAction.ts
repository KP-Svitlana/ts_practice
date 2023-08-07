const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.querySelector("button");

function add(num1: number, num2: number) {
  return num1 + num2;
}

// if (button) {
//   button.addEventListener("click", () => {
//     console.log("Click");
//   });
// }

if (button) {
  button.addEventListener("click", function () {
    console.log(add(Number(input1.value), Number(input2.value)));
  });
}
