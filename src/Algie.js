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
  var result = [];
  var numberForVowel;
  var numberForConsonant;

  for(var i = 1 ; i<7; i++) {
    if( isEven(i) ) {
      numberForVowel = Math.floor(Math.random() * vowel.length);
      console.log('Vowel')
      result[i-1] = vowel[numberForVowel]
    }
    else {
      numberForConsonant = Math.floor(Math.random() * consonant.length);
      console.log('Consonant')
      result[i-1] = consonant[numberForConsonant]
    }
  }

  console.log(result)

}

algie_generate_word()
