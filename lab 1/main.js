const firstNum=document.getElementById('firstno');
const secondNum=document.getElementById('secondno');
const operator=document.getElementById('operator');
const resultBtn=document.getElementById('result-btn');
const resultDisplay=document.getElementById('result-display');

resultBtn.addEventListener('click',calc);

function calc(){

    const num1= parseFloat(firstNum.value)
    const num2= parseFloat(secondNum.value)

    let result='';

    if (operator.value=='add'){
        result= num1 + num2
    }
    else if(operator.value=='sub'){
        result= num1 - num2;
    }
    else if(operator.value=='mul'){
        result= num1 * num2;
    }
    else if(operator.value=='div'){
        result= num1 / num2;
    }

    resultDisplay.innerHTML=result;
}