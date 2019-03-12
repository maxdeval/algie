function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_generate_word() {
  var consonant = ['b', 'c', 'd', 'f',
                 'g', 'h', 'j', 'k', 'l',
                 'm', 'n', 'p', 'q', 'r',
                 's', 't', 'v', 'w',
                 'x','z'] 

  var vowel = ['a','e', 'i', 'o', 'u', 'y']

  var numberForConsonant = Math.floor(Math.random() * consonant.length);
  var numberForVowel = Math.floor(Math.random() * vowel.length);


  var result = consonant[numberForConsonant]
  console.log(result)

}

algie_generate_word()
