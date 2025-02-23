function theGame(){
  var GameOver = false;
  document.getElementById("disappear").style.display = "block";
  document.getElementById("main").style.display = "none";
  changeTableColor();
  //while GameOver === false
}

// Function to change the table and cell border colors
function changeTableLineColor() {
  const table = document.getElementById('disappear'); // Replace with your table's ID
  const cells = table.getElementsByTagName('td'); // Get all table cells
  let colors = ['#FF5733', '#33FF57', '#5733FF', '#FFC300', '#33D4FF'];

  // Pick a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Change the table border color
  table.style.borderColor = randomColor;

  // Loop through each cell and change its border color
  for (let cell of cells) {
    cell.style.borderColor = randomColor;
  }
}

// Add event listener to the whole document (change on any click)
document.addEventListener('click', changeTableLineColor);











window.onload = function hideTable() {
  document.getElementById("disappear").style.display = "none";
}

let clickCount = 0;

function changeText() {

    clickCount++;
  
    let textElement = document.getElementById("titlemain");


    if (clickCount === 1){
        textElement.innerHTML = "Tic";
    }else if (clickCount === 2) {
        textElement.innerHTML = "Tac";
    } else if (clickCount === 3) {
        textElement.innerHTML = "Toe";
    }
    else if(clickCount === 4){
      textElement.innerHTML = "";
      theGame();
    }    

}







// Get references to the button and the text element
const button = document.getElementById('main');
const text = document.getElementById('titlemain');

// Define an array of Bootstrap text color classes
let colors = ['text-primary', 'text-success', 'text-danger', 'text-warning', 'text-info'];

let currentColorIndex = 0;

// Shuffle function to randomize the colors array
function shuffle(colors) {
  let currentIndex = colors.length;
  
  // While there are elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    // Swap the current element with the random element
    [colors[currentIndex], colors[randomIndex]] = [colors[randomIndex], colors[currentIndex]];
  }
}

// Function to change the text color
function changeColor() {
  // Remove the current text color class
  text.classList.remove(colors[currentColorIndex]);

  // Move to the next color in the array
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  // Add the new text color class
  text.classList.add(colors[currentColorIndex]);
}

// Shuffle the colors array once when the script runs
shuffle(colors);

// Add event listener for button click
button.addEventListener('click', changeColor);  // Use function reference, not immediate call
