if (typeof window === 'undefined') {
  var assert = require("assert");
  var pants = require("../index");
}

describe('String Pants', function() {
  if (typeof pants != 'undefined') pants.install();

  it('should get words from a string', function() {
    var result;
    result = 'This is a sentence'.getWords();
    assert.equal(4, result.length);
    assert.equal('this', result[0]);
    assert.equal('is', result[1]);
    assert.equal('a', result[2]);
    assert.equal('sentence', result[3]);

    result = '-This-is-a---sentence-'.getWords();
    assert.equal(4, result.length);
    assert.equal('this', result[0]);
    assert.equal('is', result[1]);
    assert.equal('a', result[2]);
    assert.equal('sentence', result[3]);

    result = '-This-is-a--!-sentence-'.getWords();
    assert.equal(4, result.length);
    assert.equal('this', result[0]);
    assert.equal('is', result[1]);
    assert.equal('a', result[2]);
    assert.equal('sentence', result[3]);
  });

  it('should dasherize a string', function() {
    assert.equal('this-is-a-sentence', 'This is a sentence'.dash());
    assert.equal('this-is-a-sentence', 'This_is_a_sentence'.dash());
    assert.equal('this-is-a-sentence', 'thisIsASentence'.dash());
  });

  it('should underscore a string', function() {
    assert.equal('this_is_a_sentence', ' This is a sentence '.underscore());
    assert.equal('this_is_a_sentence', ' This-is-a-sentence '.underscore());
    assert.equal('this_is_a_sentence', 'thisIsASentence '.underscore());
  });

  it('should camelize a string', function() {
    assert.equal('thisIsASentence', 'This is a sentence'.camel());
    assert.equal('thisIsASentence', 'This_is_a_sentence'.camel());
    assert.equal('thisIsASentence', 'this-is-a-sentence'.camel());
  });

});
