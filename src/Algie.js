function algie_fire_langage(sentence){
  res = ""
  
  if(_.isString(sentence)){
    var splitted_sentence = ""
    splitted_sentence = _.split(sentence, "")
    new_sentence = []
    _.each(splitted_sentence, function(value, key){
      new_sentence.push(value)
      if(value === "a" || value === "e"|| value === "i" || value === "o" || value === "u" || value === "y") {
        new_sentence.push("f")
      }
    })
    console.log(_.join(new_sentence, ''))
    return res
  }
  return res
}


algie_fire_langage("ab")
