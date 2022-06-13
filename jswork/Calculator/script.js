
//calculator
var totalValue = document.getElementById("mycalculator");
var firstInput = '';
var action = '';

function insert(value) {
    if (action && totalValue.value == action) {
        totalValue.value = value;
        // totalValue.value += value;
    } else {
        if (value === '+' ||  value === '-' ||  value === '*' ||  value === '/') {
            firstInput = totalValue.value;
            totalValue.value = value;
            action = value;
        } else {
            totalValue.value += value;
        }
    }
}


function exe() {
    if (action === '+') {
        const result = parseFloat(firstInput) + parseFloat(totalValue.value);
        totalValue.value = result;
    }
    else if (action === '-') {
        const result = parseFloat(firstInput) - parseFloat(totalValue.value);
        totalValue.value = result;
    }
    else if (action === '*') {
        const result = parseFloat(firstInput) * parseFloat(totalValue.value);
        totalValue.value = result;
    }
    else if (action === '/') {
        const result = parseFloat(firstInput) / parseFloat(totalValue.value);
        totalValue.value = result;
    }

    //alert(result);

}



function cancel() {
    totalValue.value = "";
}

