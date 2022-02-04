

module.exports = function toReadable (number) {
  const translate = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  const getHundred = num => `${translate[num]} hundred `;
  const getDozen = (num1, num2) => {
    if(num1 == 0 && num2 == 0)
      return '';

    if(num2 == 0)
      return `${translate[num1 * 10]}`;

    if(num1 * 10 === 0)
      return `${translate[num2]}`;
      
    if(num1 == 1)
      return `${translate[num1 + num2]}`;
      
    return `${translate[num1 * 10]} ${translate[num2]}`;  
  };

  const arrFromNum = [...(number + '')];

  if(arrFromNum.length === 1) 
    return translate[number];
  
  
  if(arrFromNum.length === 2) {
    return getDozen(arrFromNum[0], arrFromNum[1]);
  }

  if(arrFromNum.length === 3) {
    return (getHundred(arrFromNum[0]) + getDozen(arrFromNum[1], arrFromNum[2])).trim();
  }
}
