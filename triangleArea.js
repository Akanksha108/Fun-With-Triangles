// Triangle containing base and height

// let baseHeight = document.getElementById("base_height");

// let length2SidesAndAngle = document.getElementById("length_2_and_angle");

// let baseHeightOutputForm = document.getElementById("base_and_height_output_form");

// let output = document.querySelector(".output");

// let calculateBtn1 = document.querySelector(".submit_btn");

// let base = document.getElementById("base");

// let height = document.getElementById("height");

// // function to calculate area for 1st radio button
// function calculateArea1(event){

//     event.preventDefault();

//     let baseValue = parseInt(base.value);

//     let heightValue = parseInt(height.value);

//     let area = 0.5 * baseValue * heightValue;

//     output.innerHTML = "Area = " + area;
// }


// baseHeight.addEventListener("click", function(event){

//     event.preventDefault();

//     let baseAndHeightDiv = document.querySelector("#base_and_height");
    
//     if(baseAndHeightDiv.style.display == 'none'){
//         baseAndHeightDiv.style.display = 'block';
    
//     }else{
//         baseAndHeightDiv.style.display = 'none';
//     }

//     calculateArea1;
    
// });

// calculateBtn1.addEventListener("click", calculateArea1);


// If you have length of 3 sides

let length3Sides = document.getElementById("length_3");

let inputA = document.getElementById("input_1");

let inputB = document.getElementById("input_2");

let inputC = document.getElementById("input_3");

let calculateBtn2 = document.querySelector(".submit_btn");

let lengthOf3SidesDiv = document.getElementById("length_of_3_sides");

let output = document.querySelector(".output");

let showError = document.querySelector(".display_error");

// function to calculate area for 2nd radio button
function calculateArea2(event){

    event.preventDefault();

    console.log("inside Cal func");

    let inputAValue = parseInt(inputA.value);

    let inputBValue = parseInt(inputB.value);

    let inputCValue = parseInt(inputC.value);

    console.log(`A: ${inputAValue}  B: ${inputBValue} C : ${inputCValue}`);

    let s = (inputAValue + inputBValue + inputCValue) / 2;

    if(((inputAValue + inputBValue) < inputCValue) && ((inputAValue + inputCValue) < inputBValue) && ((inputBValue + inputCValue) < inputAValue)){

        // Calculate area
        let area1 = Math.sqrt(s * ((s-inputAValue) * (s-inputBValue) * (s-inputCValue)));

        output.innerHTML = "Area = " + area1;
    }
    else{
        showError.innerHTML = "Enter valid side lengths such that each side length should be less than sum of other two sides";
    }

    

}

length3Sides.addEventListener("click", function(event){

    event.preventDefault();

    if(lengthOf3SidesDiv.style.display == 'none'){
        lengthOf3SidesDiv.style.display = 'block';
    }else{
        lengthOf3SidesDiv.style.display = 'none';
    }

    calculateArea2;
});

calculateBtn2.addEventListener("click", calculateArea2);


