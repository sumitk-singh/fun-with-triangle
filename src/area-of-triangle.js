const first_length = document.querySelector("#first-length-input");
const second_length = document.querySelector("#second-length-input");
const third_length = document.querySelector("#third-length-input");

const calculateBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#area-of-triangle-output")

function calcuateArea() {

    const a = parseInt(first_length.value);
    const b = parseInt(second_length.value);
    const c = parseInt(third_length.value);


    // semi_perimeter formula
    const s = (a + b + c) / 2;
    output.innerText = a;
    // triangle area formula using Heron's formula


}

calculateBtn.addEventListener("click", calculateBtn);