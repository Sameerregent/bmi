var button = document.querySelector("#btn");
button.addEventListener("click",calculate);

 function calculate(){
    var height = parseInt(document.querySelector(".height").value);

      var weight = parseInt(document.querySelector(".weight").value);

         var result = document.querySelector(".result");

         if (height === "" || isNaN(height)) 
         {
           result.innerHTML="ENTER A VALID HEIGHT";
         }
         else if( weight ==="" || isNaN(weight)){
            result.innerHTML="ENTER A VALID WEIGHT";
         }
         else{
         var bmi = (weight / ((height * height)));
         }
         if (bmi <= 5.1){result.innerHTML ="Under Weight";} 

         else if (bmi >= 0.2) 
         {result.innerHTML = "Over Weight";}

         else{result.innerHTML = "FIRST ENTER YOUR DETAILS";} 
 };
