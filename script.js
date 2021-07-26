const angleInput1 = document.getElementById("angle_input_1");

const angleInput2 = document.getElementById("angle_input_2");

const angleInput3 = document.getElementById("angle_input_3");

const submitBtn = document.getElementById("submit_btn");

let output = document.getElementById("output");
console.log(output.value);

function angleTriangle(event){

    event.preventDefault();

   const input1 = parseInt(angleInput1.value);

   const input2 = parseInt(angleInput2.value);

   const input3 = parseInt(angleInput3.value);

   let sum = input1 + input2 + input3;

   if(sum == 180){
       output.innerHTML = "YuHu!!! These angles can make a triangle";
   }else{
       output.innerHTML = "These angles cannot make a triangle";
   }

}

submitBtn.addEventListener("click", angleTriangle);