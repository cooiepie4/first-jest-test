function ceaserCipher(string, shiftFactor) {
  return string
    .split("")
    .map((char) => shiftChar(char, shiftFactor))
    .join("");
}

function shiftChar(char, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const isUpperCase = char === char.toUpperCase();
  const letter = char.toLowerCase();
  if (!alphabet.includes(letter)) {
    return letter;
  }
  let index = alphabet.indexOf(letter);
  index = (index + shift) % 26;
  if (index < 0) {
    index += 26;
  }
  const shiftedChar = alphabet[index];
  return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
}

module.exports = ceaserCipher;
