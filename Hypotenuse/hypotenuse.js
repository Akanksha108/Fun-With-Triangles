const angle_Input1 = document.getElementById("input_1");

const angle_Input2 = document.getElementById("input_2");

let submitHypo = document.querySelector(".submit_btn");

let output = document.querySelector(".output");

function calculateHypotenuse(event){

    event.preventDefault();

    const input1 = parseInt(angle_Input1.value);

    const input2 = parseInt(angle_Input2.value);

    let hypotenuse = Math.sqrt((input1 * input1) + (input2 * input2)); 

    // console.log(hypotenuse);

    output.innerHTML = "c = " + hypotenuse;
    
}

submitHypo.addEventListener("click", calculateHypotenuse);
