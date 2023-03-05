function removeFromArray(array, deleteItem) {
    if(!array || !Number) return;
    
    // Coding here
    deleteItem -= 1;
    array.splice(deleteItem, 1);
    console.log(array);
  }
  
  removeFromArray([1, 2, 3, 4], 3);
  