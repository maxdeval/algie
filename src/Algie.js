var letterValue = function(str) {
  var anum = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
               g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
               m: 13, n: 14,o: 15, p: 16, q: 17, r: 18,
               s: 19, t: 20, u: 21, v: 22, w: 23,
               x: 24, y: 25, z: 26 }

  if(str.length == 1) return anum[str] || ' ';
    return str.split('').map(letterValue);
}

function algie_cups_repartition(kids) {

  //Number of cups kids should have
  var cupsByKid = _.meanBy(kids, function(kids) {
    return kids.cups
  })

  if (_.isArray(kids)) {
    //Array of boolean corresponding if the cups value is positive
    var arrayOfBoolean = [];
    _.each(kids, function(value, key){
      if(value.cups >= 0) {
        arrayOfBoolean[key] = true;
      }
      else {
        arrayOfBoolean[key] = false;
      }
    })

    //If cupsBykid is an integer and there are no stricly negative value 
    //Then we return the new array of kids with equal cups
    if (_.isSafeInteger(cupsByKid) && !_.includes(arrayOfBoolean, false)) {
      var kidsWithEqualCups = _.map(kids, function(kid){
        kid.cups = cupsByKid;
        return kid;
    })
      return kidsWithEqualCups;
    }

    //If cupsBykid is not an integer and there are no strictly negative value
    else if (!_.isSafeInteger(cupsByKid) && !_.includes(arrayOfBoolean, false)) {
      var kidsName = _.map(kids, function(kid) {
        return kid.name 
      })
      //Then we determine the kid that should have less cup
      var min = _.max(_.each(kidsName, function(value, key) {
        var arrayOfLettersWeight = (letterValue(value))
        return arrayOfLettersWeight
      }))
      //Then we round cupsByKid and we add one more for ones with higher name in alphabet
      _.each(kids, function(value, key) {
        if(value.name === min) {
          value.cups = _.floor(cupsByKid)
        }
        if(value.name !== min) {
          value.cups = _.floor(cupsByKid) + 1
        }
      })
      return kids
    }

    //If cups value are strictly negative then we just return the array
    else {
      return kids
    }
  }

  //If kids is not an array we convert it to an array and just return it
  else {
    return _.toArray(kids)
  }
}

