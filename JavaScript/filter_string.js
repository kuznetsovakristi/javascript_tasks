var string = 'Привет! Как дела?';
var vowels = 'аеёиоуыэюя';
var getVowels = ''
for (var i = 0; i < string.length; i++) {
  for (var n = 0; n < vowels.length; n++) {
    if (string[i] == vowels[n]) {
      getVowels = getVowels + string[i]
    }
  }
}
console.log(getVowels)