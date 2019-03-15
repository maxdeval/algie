function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function  algie_max_of_consecutive_in_array(array) {

  if(_.isArray(array)){
    var  temp;
    var  counter;
    var  highestCounter = 0;

    if(_.isEmpty(array)){
      return 0;
    }

    for(var i = 0; i < array.length; i++) {
      if(temp != '' && temp == array[i]) {
          counter++;
      } 
      else {
          counter = 1;
      }
      temp = array[i];
      if(counter > highestCounter) {
          highestCounter = counter;
      }
    }
    return highestCounter;
  }
  else {
    return false;
  }
}

algie_max_of_consecutive_in_array(["a", "a", "c", "a", "a", "a", "a", "a"])

