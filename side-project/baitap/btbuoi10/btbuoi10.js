// 1
const test1 = function showDate() {
    document.getElementById('date').innerHTML = Date();
}

// 2
const test2PartA = function showMmddyyyy () {
    const date = new Date();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const yyyy = date.getFullYear();
    document.getElementById('mm-dd-yyyy').innerHTML = mm + '-' + dd + '-' + yyyy;
    document.getElementById('mm/dd/yyyy').innerHTML = mm + '/' + dd + '/' + yyyy;
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

// 4
const test4 = function stringReplace () {
    const test4Text = document.getElementById('test4Text').value;
    let test4Result = '';
    for (i = 0; i <= test4Text.length - 1; i++) {
        test4Result = test4Result + String.fromCharCode(test4Text.charCodeAt(i) + 1);
    }
    document.getElementById('test4Result').innerHTML = test4Result;
}

// 5
const test5 = function stringCreator () {
    let test5Text = document.getElementById('test5Text').value;
    if (test5Text.length < 3) {
        document.getElementById('test5Result').innerHTML = 'Nhập thêm pls';
    }
    else if (test5Text.length % 2 == 0) {
        document.getElementById('test5Result').innerHTML = 'Chuỗi chẵn rồi, nhập lại pls';
    }
    else {
        const startPosition = (test5Text.length - 1) / 2 - 1;
        document.getElementById('test5Result').innerHTML = test5Text.substr(startPosition,3);;
    }
}

// 6
const test6 = function duplicateCheck () {
    test6Input = document.getElementById('test6Input').value.split(' ');
    counter = {};
    duplicateNumber = 0;
    test6Result = '';
    test6Input.forEach(element => {
        if (counter[element]) {
            counter[element] += 1;
        }
        else {
            counter[element] = 1;
        }
        if (counter[element] > duplicateNumber) {
            test6Result = element;
            duplicateNumber = counter[element];
        }
    });
    document.getElementById('test6Result').innerHTML = 'Số ' + test6Result + ' (' + duplicateNumber + ' lần)';
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

// 9
const test9 = function lengthCheck () {
    const test9Text = document.getElementById('test9Text').value;
    const test9Array = test9Text.split(' ');
    let test9Result = '';
    let a = 0;
    test9Array.forEach(element => {
        if (element.length > a) {
            a = element.length;
            test9Result = element;
        }
    });
    document.getElementById('test9Result').innerHTML = test9Result;
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