function AddNumberToBoard(input) {
    const inputField = document.getElementById('readonly-input')
    display.value += input;
}

function ClearBoard() {
    const inputField = document.getElementById('readonly-input');
    display.value = "";
    display.placeholder = "";
}

function CalculateDisplay() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = ''
        display.placeholder = 'Error'
    }
    
}