function toInput(id) {
    let value = document.getElementById(id).value;
    document.getElementById('result').value += value;
}

function subtract(a, b){
    console.log('subtract')
    return a-b;
}
