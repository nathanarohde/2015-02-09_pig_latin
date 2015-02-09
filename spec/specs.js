describe('pigLatin', function() {
  it('adds "ay" to the end of words that start with a,e,i,o,u', function() {
    expect(pigLatin('eat')).to.equal('eatay');
  });
  it('determine whether or not first letter of word is a vowel and and add "ay" to end of word ', function() {
    expect(pigLatin('it')).to.equal('itay');
  });
  it('moves a starting constant to the end of a word and adds "ay"', function() {
    expect(pigLatin('rain')).to.equal('ainray');
  });
  it('moves a string of constant to the end of a word and adds "ay"', function() {
    expect(pigLatin('train')).to.equal('aintray');
  });
  it('treats y as a constant if it is the first letter', function() {
    expect(pigLatin('yurt')).to.equal('urtyay');
  });
  it('treats y as a constant if it is the first letter, treats it as a vowel if it occurs latter in a word', function() {
    expect(pigLatin('tyrant')).to.equal('yranttay');
  });
  it('moves the letter "u" with the letter "q" to the end of the word and adds "ay"', function() {
    expect(pigLatin('trquarts')).to.equal('artstrquay');
  });
});
