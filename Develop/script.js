const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)



function syncCharacterAmount(e) {
const value = e.target.value  
characterAmountRange.value = value
characterAmountNumber.value = value
}



const form = document.getElementById('generatePassword')
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(characterAmount, includeUppercase, includeNum, includeSym);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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

const includeNum = document.getElementById('includeNum')
const includeSym = document.getElementById('includeSym')
const includeUppercase = document.getElementById('upperCase')
const characterAmount = document.getElementById('characterAmountNumber')
const generatedPassword = document.getElementById('Generated Password')
const characterRange = document.getElementById('characterAmountRange')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const NUM_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYM_CHAR_CODES = arrayFromLowToHigh(33,74)
.concat(
  arrayFromLowToHigh(58, 64)
  ).concat(
  arrayFromLowToHigh(91, 96)
  ).concat(
  arrayFromLowToHigh(123, 126)
)

function generatePassword(characterAmount, includeNum, includeSym, includeUppercase) {
let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNum) charCodes = charCodes.concat(NUM_CHAR_CODES)
  if (includeSym) charCodes = charCodes.concat(SYM_CHAR_CODES)


  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
const characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
passwordCharacters.push(String.fromCharCode(characterCode))
  }
 return passwordCharacters.join('')
console.log(passwordCharacters)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeNum = includeNumElement.checked
  const includeSym = includeSymElement.checked
  const includeUppercase = includeUppercaseElement.checked
  const password = generatePassword(characterAmount, includeNum, includeUppercase, includeSym)
passwordDisplay.innerText = password
})
