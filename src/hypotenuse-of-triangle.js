const base = document.querySelector("#base-input");

const height = document.querySelector("#height-input");

const output = document.querySelector("#calculate-hypotenuse-output");
const calculateBtn = document.querySelector("#submit-btn");

function calculateHypotenuse() {
    const b = parseInt(base.value);
    const h = parseInt(height.value);
    output.innerText = "The length of hypotenuse is " + Math.sqrt(b * b + h * h);


}

calculateBtn.addEventListener("click", calculateHypotenuse);