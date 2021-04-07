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
    document.getElementById('mm/dd/yyy  y').innerHTML = mm + '/' + dd + '/' + yyyy;
    document.getElementById('dd-mm-yyyy').innerHTML = dd + '-' + mm + '-' + yyyy;
    document.getElementById('dd/mm/yyyy').innerHTML = dd + '/' + mm + '/' + yyyy;
}

// 3
const test3 = function numberCheck () {
    let count = 1;
    let number = document.getElementById('number').value;
    if ((number < 10) & (number > -10)) {
        document.getElementById('test3Result').innerHTML = 'Nhập số có 2 chữ số pls'
    }
    else {
        const array = [...number.toString().split('')];
        for (i = 1; i <= array.length; i++) {
            if (count < array.length) {
                if (array[i] - array[i-1] <= 0) {
                    document.getElementById('test3Result').innerHTML = 'Không phải chuỗi số tăng';
                    break;
                }
                else {
                    count++;
                }
            }
            else {
                document.getElementById('test3Result').innerHTML = 'Chuỗi số tăng';
            }
        }
    }
}

// 5
const test5 = function stringCreator () {
    let test5Text = document.getElementById('test5Text').value;
    if (test5Text.length % 2 == 0) {
        document.getElementById('test5Result').innerHTML = 'Chuỗi chẵn rồi, nhập lại pls';
    }
    else {
        document.getElementById('test5Result').innerHTML = 'Chuỗi lẻ rồi, nhưng mà chưa code tiếp';
    }
}

// 6
const test6 = function duplicateTest () {
    const test6Input = document.getElementById('test6Input').value;
    const array = test6Input.split(' ');
    count = {};
    max = 0;
    test6Result;
    array.forEach(element => {
        if (count[element]) {
            count = 1;
        }
        else {
            count++
        }
        if (count[element] > max) {
            max = count[element];
            test6Result = element;
        }
    });
    document.getElementById('test6Result').innerHTML = test6Result;
}

// 7
const test7 = function javaCheck () {
    const string = document.getElementById('string').value;
    const java = string.indexOf('java');
    if (java > -1) {
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
        for (x = 2; x <= i - 1 ; x++) {
            if (i % x == 0) {
                break;
            }
            else if (x == i - 1) {
                test10Result = test10Result + ' ' + i;
            }
            else {
                continue;
            }
        }
    }
    document.getElementById('test10Result').innerHTML = test10Result;
}