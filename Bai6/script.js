function convertNumber(number) {
  
    let binary = "";
    do {
      let remainder = number % 2;
      binary = remainder + binary;
      number = Math.floor(number / 2);

    } while (number > 0);
  
    return binary;
}

console.log(convertNumber(16));
