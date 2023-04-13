/* eslint-disable no-plusplus */
export const ConvertWordToNumber = (word) => {
  const satuan = {
    nol: 0,
    satu: 1,
    dua: 2,
    tiga: 3,
    empat: 4,
    lima: 5,
    enam: 6,
    tujuh: 7,
    delapan: 8,
    sembilan: 9,
    sepuluh: 10,
    sebelas: 11,
    belas: 10,
    puluh: 10,
    ratus: 100,
    ribu: 1000,
    juta: 1000000,
    miliar: 1000000000,
    triliun: 1000000000000,
    kuadriliun: 1000000000000000,
    kuintiliun: 1000000000000000000,
    sekstiliun: 1000000000000000000000,
    septiliun: 1000000000000000000000000,
    oktiliun: 1000000000000000000000000000
  };

  const words = word.toLowerCase().split(' ');
  let number = 0;
  let temp = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (satuan[currentWord]) {
      const currentValue = satuan[currentWord];

      if (currentValue >= 10 && currentValue < 100) {
        if (currentValue === 10) {
          if (temp === 0) {
            temp = 10;
          } else {
            temp += 10;
          }
        } else {
          temp *= currentValue;
        }
      } else if (currentValue >= 100) {
        if (temp === 0) {
          temp = 1;
        }

        number += temp * currentValue;
        temp = 0;
      } else {
        temp += currentValue;
      }
    } else {
      return NaN;
    }
  }

  number += temp;

  return number;
};
