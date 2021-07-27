let baseHeight = document.getElementById("base_height");

length3Sides = document.getElementById("length_3");

let length2SidesAndAngle = document.getElementById("length_2_and_angle");

let baseHeightOutputForm = document.getElementById("base_and_height_output_form");

let output = document.querySelector(".output");

let calculateBtn = document.querySelector("#submit_btn");

let base = document.getElementById("base");

let height = document.getElementById("height");


function calculateArea(event){

    event.preventDefault();

    let baseValue = parseInt(base.value);

    let heightValue = parseInt(height.value);

    let area = 0.5 * baseValue * heightValue;

    output.innerHTML = "Area = " + area;
}


baseHeight.addEventListener("click", function(event){

    event.preventDefault();

    let baseAndHeightDiv = document.querySelector("#base_and_height");
    
    if(baseAndHeightDiv.style.display == 'none'){
        baseAndHeightDiv.style.display = 'block';
    
    }else{
        baseAndHeightDiv.style.display = 'none';
    }

    calculateArea;
    
});

calculateBtn.addEventListener("click", calculateArea);
