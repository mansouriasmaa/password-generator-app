const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");

let themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("click", changeTheme);

function changeTheme() {
  document.body.classList.toggle("lightmode");
}

function generatePasswords() {
  password1El.textContent = "";
  password2El.textContent = "";

  for (let i = 0; i < 15; i++) {
    let randomChar1 = Math.floor(Math.random() * characters.length);
    let randomChar2 = Math.floor(Math.random() * characters.length);

    password1El.textContent += characters[randomChar1];
    password2El.textContent += characters[randomChar2];
  }
}
