const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)


// Syncs the range bar with the number of characters box
function syncCharacterAmount(e) {
const value = e.target.value  
characterAmountRange.value = value
characterAmountNumber.value = value
}

const form = document.getElementById("generatePassword")
var generateBtn = document.querySelector("#generate");

// Writes password to the #passwordPlaceHolder input on HTML line 39
function writePassword() {
  var password = generatePassword(characterAmountNumber, includeUppercase, includeNum, includeSym);
  var passwordText = document.querySelector("passwordPlaceHolder");
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
const includeUppercase = document.getElementById('includeUppercase')
const generatedPassword = document.getElementById('generatedPassword')
const passwordDisplay = document.getElementById('passwordPlaceHolder')

//Consts that relate to the relevant character codes per Const name
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
).concat(
  arrayFromLowToHigh(33,74))

//Generates the password using the checked elements and pushes the generated password to the console
function generatePassword(characterAmountNumber) {
let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase.checked) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNum.checked) charCodes = charCodes.concat(NUM_CHAR_CODES)
  if (includeSym.checked) charCodes = charCodes.concat(SYM_CHAR_CODES)
  const passwordCharacters = []
  for (let i = 0; i < characterAmountNumber; i++) {
const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
passwordCharacters.push(String.fromCharCode(characterCode))
  }
 return passwordCharacters.join('')
}

const includeNumElement = document.querySelector("#includeNum")
const includeSymElement = document.querySelector("#includeSym")
const includeUppercaseElement = document.querySelector("#includeUppercase")

//Takes the generated password and displays in on the HTML
form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeNum = includeNumElement
  const includeSym = includeSymElement
  const includeUppercase = includeUppercaseElement
  const password = generatePassword(characterAmount, includeNum, includeUppercase, includeSym)
passwordDisplay.innerText = password
})
