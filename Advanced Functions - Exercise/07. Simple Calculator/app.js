function calculator() {
    let num1Selector, num2Selector, resultSelector;

    function init(selector1, selector2, resultSel) {
        num1Selector = document.querySelector(selector1);
        num2Selector = document.querySelector(selector2);
        resultSelector = document.querySelector(resultSel);
    }

    function add() {
        const num1 = parseFloat(num1Selector.value);
        const num2 = parseFloat(num2Selector.value);
        const result = num1 + num2;
        resultSelector.value = result;
    }

    function subtract() {
        const num1 = parseFloat(num1Selector.value);
        const num2 = parseFloat(num2Selector.value);
        const result = num1 - num2;
        resultSelector.value = result;
    }

    return {
        init: init,
        add: add,
        subtract: subtract
    };
}




