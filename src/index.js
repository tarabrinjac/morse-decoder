const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let array = [];
  let variable = '';
  for (let i = 0; i <= expr.length; i++) {
    if ((i % 10 == 0) && (i != 0)) {
      array.push(variable);
      variable = '';
    }
    variable = variable + expr[i];
  }

  for (let i = 0; i < array.length; i++) {
    
    let intermediateArray = [];
    let string = '';

    if (array[i] == '**********') {
      array[i] = ' ';
    } else {
        for (let j = 0; j <= array[i].length; j++) {
        if ((j % 2 == 0) && (j != 0)) {
          if (string == '00') {
            string = '';
          } else if (string == '10') {
            intermediateArray.push('.');
            string = '';
          } else if (string == '11') {
            intermediateArray.push('-');
            string = '';
          }
        }
        string = string + array[i][j];
      }
      array[i] = intermediateArray.join('');
    }
    console.log(array);
  }

  const morseArray = Object.entries(MORSE_TABLE);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < morseArray.length; j++) {
      if (array[i] == morseArray[j][0]) {
        array[i] = morseArray[j][1];
      }
    }
  }

  return array.join('');
}

module.exports = {
    decode
}