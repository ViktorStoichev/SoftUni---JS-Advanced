function subtract() {
    let firstNum = document.getElementById("firstNumber");
    let secondNum = document.getElementById("secondNumber");
    let resultRef = document.getElementById("result");

    let num1 = Number(firstNum.value);
    let num2 = Number(secondNum.value);
    let result = num1 - num2;

    resultRef.textContent = result;
}