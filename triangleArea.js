// Triangle containing base and height

let baseHeight = document.getElementById("base_height");

let length2SidesAndAngle = document.getElementById("length_2_and_angle");

let baseHeightOutputForm = document.getElementById("base_and_height_output_form");

let output = document.querySelector(".output");

let calculateBtn1 = document.querySelector(".submit_btn");

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

calculateBtn1.addEventListener("click", calculateArea);

// If you have length of 3 sides

let length3Sides = document.getElementById("length_3");

let inputA = document.getElementById("input_1");

let inputB = document.getElementById("input_2");

let inputC = document.getElementById("input_3");

let calculateBtn2 = document.querySelector(".submit_btn");

let lengthOf3SidesDiv = document.getElementById("length_of_3_sides");

length3Sides.addEventListener("click", function(){
    if(lengthOf3SidesDiv.style.display == 'none'){
        lengthOf3SidesDiv.style.display = 'block';
    }else{
        lengthOf3SidesDiv.style.display = 'none';
    }
});


