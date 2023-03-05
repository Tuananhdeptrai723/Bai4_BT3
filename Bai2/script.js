function reverseString(string) {
    // Coding here
    var tachchuoi = string.split("");
    var daonguoc = tachchuoi.reverse();
    var newstring = daonguoc.join("");
  
    return newstring;
  }
  
  console.log(reverseString("Xinchao"));
  