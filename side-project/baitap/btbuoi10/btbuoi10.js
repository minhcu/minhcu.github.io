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
    if (-10 <)
    let number = document.getElementById('number').value.toString().split('');
    const array = [...number];

    document.getElementById('test3Result').innerHTML = array;
}

// 7
const test7 = function javaCheck () {
    const string = document.getElementById('string').value;
    const java = string.indexOf('java');
    if (java > 0) {
        document.getElementById('test7Result').innerHTML = 'Chuỗi có chứa \'Java\'';
    }
    else {
        document.getElementById('test7Result').innerHTML = 'Chuỗi không chứa \'Java\'';
    }
}

// 8
const test8 = function monthCheck () {
    const number = document.getElementById('monthNumber').value - 1;
    const month = ['tháng một', 'tháng hai', 'tháng ba', 'tháng bốn', 'tháng năm', 'tháng sáu', 'tháng bảy', 'tháng tám', 'tháng chín', 'tháng mười', 'tháng mười một', 'tháng mười hai']
    document.getElementById('monthName').innerHTML= month[number];
}

// 10
const test10 = function integerCheck () {
    test10Result = '';
    const startNumber = document.getElementById('startNumber').value;
    const endNumber = document.getElementById('endNumber').value;
    for (i = startNumber; i <= endNumber; i++) {
        for (x = 2; x <= i; x++) {
            if (i % x != 0) {
                test10Result= test10Result + i;
            }
        }
    }
    document.getElementById('test10Result').innerHTML = test10Result;
}