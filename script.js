function clear() {
    document.getElementById('display').value = '';
 }
 function deleteit() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
 }
 function insert(value) {
    document.getElementById('display').value += value;
 }
 function res() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
 }