let baseHeight = document.getElementById("base_height");

length3Sides = document.getElementById("length_3");

let length2SidesAndAngle = document.getElementById("length_2_and_angle");

let baseHeightOutputForm = document.getElementById("base_and_height_output_form");

console.log(baseHeightOutputForm);

let output = document.querySelector(".output");

let calculateBtn = document.querySelector("submit_btn");

baseHeight.addEventListener("click", function(event){

    event.preventDefault();

    let baseAndHeightDiv = document.querySelector("#base_and_height");
    
    if(baseAndHeightDiv.style.display == 'none'){
        baseAndHeightDiv.style.display = 'block';
    }else{
        baseAndHeightDiv.style.display = 'none';
    }

    // let base = document.getElementById("base");

    // let baseValue = base.value;

    // let height = document.getElementById("height");

    // let heightValue = height.value;

});

// calculateBtn.addEventListener("click", function);