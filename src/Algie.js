function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function isEven(number) {
  if(number % 2 === 0) {
    return true
  }
  else {
    return false
  }
}



function algie_generate_word() {
  var consonant = ['b', 'c', 'd', 'f',
                 'g', 'h', 'j', 'k', 'l',
                 'm', 'n', 'p', 'q', 'r',
                 's', 't', 'v', 'w',
                 'x','z'] 

  var vowel = ['a','e', 'i', 'o', 'u', 'y']
  var result;

  for(var i = 1 ; i<7; i++) {
    if( isEven(i) ) {
      var numberForVowel = Math.floor(Math.random() * vowel.length);
      result.push(consonant[numberForVowel])
    }
    else {
      var numberForConsonant = Math.floor(Math.random() * consonant.length);
      result.push(consonant[numberForConsonant])
    }
  }

  console.log(result)

}

algie_generate_word()
