function leapYears(year) {
    if (year % 100 == 0)
       
    {
        if (year % 400 == 0){
            console.log(`${year} la nam nhuan`);
        }
        else{
          console.log(`${year} khong phai nam nhuan`);
  
        }
    }
    else if (year % 4 == 0) {
      console.log(`${year} la nam nhuan`);
    }
    else{
      console.log(`${year} khong phai nam nhuan`);
    }
  }
  
  leapYears(2001);
  