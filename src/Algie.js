function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function countingVowels(string) {
  return (subject.match(/[aeiou]/gi) || []).length;
}

function countingConsonants(string) {
  return (subject.match(/[bcdfghjklmnpqrstvwxz]/gi) || []).length;
}

function groupedVowelsAndConsonents(word) {
  return _.groupBy(countingConsonants(word), countingVowels(word))
}

function algie_string_to_hash(sentence) {

  var numberOfVowels
  var numberOfConsonants

  splittedSentence = _.split(sentence, ' ')
  console.log(splittedSentence[0])

  console.log(groupedVowelsAndConsonents(splittedSentence[0]))
/*  _.each(splittedSentence, function(value){
    numberOfConsonants = 
  })*/

}

algie_string_to_hash('hello abc')
