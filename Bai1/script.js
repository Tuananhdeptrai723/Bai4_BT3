function repeatString(string, num) {
    // Coding here
  
    if (!string || !num) return;
  
    // let result = "";
  
  // cách 1
    // for (let i = 0; i < num; i++) {
    //   result += string;
    // }
  
    // return result
  
  // cách 2
    // const array = Array.from({length: 3}, (_, i) => i);
  
    // array.forEach(function () {
    //   result += string;
    // });
  
    // return result
    // cách 3
    const array = Array.from({length: 3}, (_, i) => i);
  
    const result = array.reduce(function (previosValue) {
    return previosValue + string;
  }, "");
    return result
  }
  
  console.log(repeatString("hey", 3))
  