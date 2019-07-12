function algie_fire_langage(sentence){
  if(_.isString(sentence)){
    res = []
    var splitted_sentence = ""
    splitted_sentence = _.split(sentence, "")
    _.each(splitted_sentence, function(value){
      res.push(value)
      if(value === "a" || value === "e"|| value === "i" || value === "o" || value === "u" || value === "y") {
        res.push("f")
        res.push(value)
      }
    })
    return _.join(res, '')
  }
  return ""
}

algie_fire_langage("ab")
