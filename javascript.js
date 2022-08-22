var rep
var score = 0

//generates a random number between min (included) and max (excluded)
function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

async function checkAnswer() {
  if (rep == document.getElementById("input").textContent)
  {
    document.getElementById("question").textContent = "Bravo ! 👍"
    score++
    document.getElementById("input").textContent = ""
    document.getElementById("score").textContent = "SCORE: " + score
    await new Promise(r => setTimeout(r, 1000));
    generateQuestion()
  }
}

function generateQuestion() {
  var questiontype = getRandomArbitrary(0,2);

  if (questiontype == 0){
    //addition
    num1 = getRandomArbitrary(1,1500);
    num2 = getRandomArbitrary(1,1500);
    rep = num1 + num2
    document.getElementById("question").textContent = num1 + " + " + num2 + " ="
  }
  else if (questiontype == 1){
    //soustraction
    num1 = getRandomArbitrary(1,1500);
    num2 = getRandomArbitrary(1,1500);
    rep = num1 - num2
    document.getElementById("question").textContent = num1 + " - " + num2 + " ="
  }
  else if (questiontype == 2){
    //multiplication
    num1 = getRandomArbitrary(1,12);
    num2 = getRandomArbitrary(1,12);
    rep = num1 * num2
    document.getElementById("question").textContent = num1 + " x " + num2 + " ="
  }
  else {
    alert("bug")
  }
}

window.onload = function() {
  generateQuestion();
};

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    alert(event.key)
    return; // Do nothing if the event was already processed
  }
  //if démarrer cliqué
  switch (event.key) {
    case "0":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "0";
    checkAnswer()
      break;
    case "1":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "1";
    checkAnswer()
      break;
    case "2":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "2";
    checkAnswer()
      break;
    case "3":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "3";
    checkAnswer()
      break;
    case "4":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "4";
    checkAnswer()
      break;
    case "5":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "5";
    checkAnswer()
      break;
    case "6":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "6";
    checkAnswer()
      break;
    case "7":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "7";
    checkAnswer()
      break;
    case "8":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "8";
    checkAnswer()
        break;
    case "9":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "9";
    checkAnswer()
        break;
    case "-":
    document.getElementById("input").textContent = document.getElementById("input").textContent + "-";
    checkAnswer()
        break;
    case "Backspace":
    document.getElementById("input").textContent = document.getElementById("input").textContent.slice(0,-1);
        break;
    case "Delete":
    document.getElementById("input").textContent = "";
        break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
