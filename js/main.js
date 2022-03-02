var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResult = document.querySelector(".form__result");
var odd =[2, 4, 6, 8, 10,];
var even = [1, 2, 3, 5, 7, 9,];


elForm.addEventListener("submit", function(evt){
  
  evt.preventDefault();
  
  var elInputVal = elInput.value;
  
  if(elInputVal % 2 == 0 ){
    
    elResult.textContent = "Even Number";
    elResult.classList.add("result-success");
    even.push(elInputVal);
    console.log(even);
  } else{
    elResult.textContent= "Odd Number";
    elResult.classList.add("result-error");
    odd.push(elInputVal);
    console.log(odd);
  }
  
})
