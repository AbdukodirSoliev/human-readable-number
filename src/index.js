module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    }
    
    let num = number.toString();
    switch (num.length) {
        case 1: return simpleDigitProcess(num);
        case 2: return decadeDigitProcess(num);
        case 3: return hundredDigitProcess(num);
        default: break;
    }
}

function simpleDigitProcess(num_str) {
    let simple_num_str = num_str[0];
    let simple_num = parseInt(simple_num_str);
    return simpleDigit(simple_num);
}

function decadeDigitProcess(num) {
    let rev_num = num.split('').reverse().join('');
    let simple_num_str = rev_num[0];
    let decade_num_str = rev_num[1];
    
    let simple_num = parseInt(simple_num_str);
    let decade_num = parseInt(decade_num_str);
    
    let decade_str = decadeDigit(decade_num, simple_num);
    let simple_str = '';
    if (decade_num > 1) {
        simple_str = simpleDigit(simple_num);
    }
    return decade_str.concat(' ', simple_str).trim();
}

function hundredDigitProcess(num) {
    let rev_num = num.split('').reverse().join('');

    let hundred_num_str = rev_num[2];
    let decade_num_str = rev_num[1];
    let simple_num_str = rev_num[0];
    
    let hundred_num = parseInt(hundred_num_str);
    let decade_num = parseInt(decade_num_str);
    let simple_num = parseInt(simple_num_str);
    
    let hundred_str = hundredDigit(hundred_num);
    if (decade_num > 0) {
        let decade_str = decadeDigit(decade_num, simple_num);
        hundred_str = hundred_str.concat(' ', decade_str);
    }

    if (decade_num != 1) {
        let simple_str = simpleDigit(simple_num);
        hundred_str = hundred_str.concat(' ', simple_str);
    }
    
    return hundred_str.trim();
}

function hundredDigit(digit) {
    return simpleDigit(digit) + ' hundred';
}

function tenDigit(digit) {
    switch (digit) {
        case 1: return 'eleven';
        case 2: return 'twelve';
        case 3: return 'thirteen';
        case 4: return simpleDigit(digit) + 'teen';
        case 5: return 'fifteen';
        case 6: return simpleDigit(digit) + 'teen';
        case 7: return simpleDigit(digit) + 'teen';
        case 8: return simpleDigit(digit) + 'een';
        case 9: return simpleDigit(digit) + 'teen';
        case 0: return 'ten';
        default: break;
    }
}

function decadeDigit(digit, simple) {
    switch (digit) {
        case 1: return tenDigit(simple);
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return simpleDigit(digit) + 'ty';//sixty
        case 7: return simpleDigit(digit) + 'ty';//seven'ty
        case 8: return simpleDigit(digit) + 'y';//eight'y
        case 9: return simpleDigit(digit) + 'ty';//nine'ty
        case 0: return '';//zero
        default: break;
    }
}

function simpleDigit(digit) {
    switch (digit) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        case 0: return '';//zero
        default: break;
    }
}