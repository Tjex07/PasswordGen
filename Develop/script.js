
const form = document.getElementById('generatePassword')
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

characterRange.addEventListener('input', syncCharacterAmount)
characterAmount.addEventListener('input', syncCharacterAmount)

}
function arrayFromLowToHigh(low, high) {
  const array = []
for (let i = low; i <= high; i++) {
  array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const includeNumber = document.getElementById('includeNumber')
const includeSymbol = document.getElementById('includeSymbol')
const includeUppercase = document.getElementById('upperCase')
const characterAmount = document.getElementById('characterAmount')
const generatedPassword = document.getElementById('Generated Password')
const characterRange = document.getElementById('characterRange')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,74)
.concat(
  arrayFromLowToHigh(58, 64)
  ).concat(
  arrayFromLowToHigh(91, 96)
  ).concat(
  arrayFromLowToHigh(123, 126)
)

function generatePassword(characterAmount, includeNumber, includeSymbol, includeUppercase) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeSymbol) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
passwordCharacters.push(String.fromCharCode(characterCode))
  }
 return passwordCharacters.join('')

}

form.addEventListener('submit', e => {
  e.preventDeffault()
  const characterAmount = characterAmountNumber.value
  const includeNumber = includeNumbeElement.checked
  const includeSymbol = includeSymbolElement.checked
  const includeUppercase = includeUppercaseElement.checked
  const password = generatePassword(characterAmount, includeNumber, includeUppercase, includeSymbol)
passwordDisplay.innerText = password
})

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmount.value = value
  characterRange.value = value
}