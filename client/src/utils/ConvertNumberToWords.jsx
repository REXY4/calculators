/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
export const ConvertNumberToWord = (number) => {
  const satuan = [
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh'
  ];

  const typeAngka = [
    '',
    'ribu',
    'juta',
    'miliar',
    'triliun',
    'kuadriliun',
    'kuintiliun',
    'sekstiliun',
    'septiliun',
    'oktiliun'
  ];

  // function to convert a 3-digit number to words
  const convert3DigitToWords = (num) => {
    let word = '';
    const ratus = Math.floor(num / 100);
    const puluhan = num % 100;

    if (ratus > 0) {
      word += `${satuan[ratus - 1]} ratus`;
    }

    if (puluhan >= 11 && puluhan <= 19) {
      word += ` ${satuan[puluhan - 11]} belas`;
    } else if (puluhan >= 1 && puluhan <= 9) {
      word += ` ${satuan[puluhan - 1]}`;
    } else if (puluhan >= 20) {
      const puluhanStr = puluhan.toString();
      word += ` ${satuan[parseInt(puluhanStr.charAt(0)) - 1]} puluh`;

      if (puluhan % 10 !== 0) {
        word += ` ${satuan[(puluhan % 10) - 1]}`;
      }
    }

    return word;
  };

  if (number === 0) {
    return 'nol';
  }
  if (number < 0) {
    return `minus ${ConvertNumberToWord(Math.abs(number))}`;
  }

  let word = '';
  let i = 0;

  while (number > 0) {
    const digit = number % 1000;
    const digitWord = convert3DigitToWords(digit);

    if (digit > 0) {
      word = `${digitWord} ${typeAngka[i]} ${word}`;
    }

    number = Math.floor(number / 1000);
    i++;
  }
  return word.trim();
};
