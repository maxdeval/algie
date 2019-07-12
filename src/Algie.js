function algie_fire_langage(sentence){
  res = ""
  
  if(_.isString(sentence)){
    var splitted_sentence = ""
    splitted_sentence = _.split(sentence, "")
    _.each(splitted_sentence, function(value, key){
      if(value === "a" || value === "e"|| value === "i" || value === "o" || value === "u" || value === "y") {
        splitted_sentence[key + 1] = "f"
      }
      console.log(splitted_sentence)
    })
    return res
  }
  return res
}


algie_fire_langage("ab")
