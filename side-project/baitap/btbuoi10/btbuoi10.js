// 1
const test1 = function showDate() {
    document.getElementById('date').innerHTML = Date();
}

// 2
const test2PartA = function showMmddyyyy () {
    const date = new Date();
    const mm = date.getMonth()+1;
    const dd = date.getDate();
    const yyyy = date.getFullYear();
    document.getElementById('mm-dd-yyyy').innerHTML = mm + '-' + dd + '-' + yyyy;
    document.getElementById('mm/dd/yyyy').innerHTML = mm + '/' + dd + '/' + yyyy;
    document.getElementById('dd-mm-yyyy').innerHTML = dd + '-' + mm + '-' + yyyy;
    document.getElementById('dd/mm/yyyy').innerHTML = dd + '/' + mm + '/' + yyyy;
}

// 3
const test3 = function numberCheck () {
    let number = document.getElementById('number').value;
    
    document.getElementById('result').innerHTML = number;
}