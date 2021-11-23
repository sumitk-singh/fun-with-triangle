const first_length = document.querySelector("#first-length-input");
const second_length = document.querySelector("#second-length-input");
const third_length = document.querySelector("#third-length-input");

const calculateBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#area-of-triangle-output")

function calculateArea() {

    const a = parseInt(first_length.value);
    const b = parseInt(second_length.value);
    const c = parseInt(third_length.value);

    //sum of the any two side of a triangle is always greater than the third side

    // semi_perimeter formula
    const s = ((a + b + c) / 2);

    // triangle area formula using Heron's formula
    if (a + b > c || b + c > a || c + a > b) {
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
        output.innerText = "Area of a triangle using heron's formula is " + area + " sq units";
    } else {
        output.innerText = "Please enter the correct length. Note: sum of the any two side of a triangle is always greater than the third side "
    }
}
calculateBtn.addEventListener("click", calculateArea);