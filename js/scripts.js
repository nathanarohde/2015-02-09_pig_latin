var pigLatin = function(phrase) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(phrase[0]) >= 0) {
    return phrase.concat('ay');
  } else {
      var counter = 0;
      while (vowels.indexOf(phrase[counter]) < 0) {
        if ((phrase.charAt(counter) === 'y') && (counter > 0)) {
          break;
        }
        counter += 1;

        if ((phrase.charAt(counter-1) === 'q') && (phrase.charAt(counter) === 'u')) {
          counter += 1;
        }
      }
      var beginning_consonants = phrase.slice(0,counter);
      var remaining_letters = phrase.slice(counter);
      return remaining_letters.concat(beginning_consonants + 'ay');
  }
};
