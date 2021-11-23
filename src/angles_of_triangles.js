var angle_1 = document.querySelector("#angle1-input");
var angle_2 = document.querySelector("#angle2-input");
var angle_3 = document.querySelector("#angle3-input");

var Is_triangle_btn = document.querySelector("#submit-btn");
var output = document.querySelector("#angles-of-triangles-output");


function isTriangle() {

    var sum_of_angle = parseInt(angle_1.value) + parseInt(angle_2.value) + parseInt(angle_3.value);


    if (sum_of_angle === 180) {
        output.innerText = "Yay, the angles form a triangle!";
    } else {
        output.innerText = "Tringle can't form with these angle";
    }

}

Is_triangle_btn.addEventListener("click", isTriangle)