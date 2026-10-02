let randomNumber;
let chances;
function btnNewGame(){
    Swal.fire({
                title: "New Game",
                text: "You started A New Game",
                icon: "info"
    });
    randomNumber = Math.floor((Math.random()*10) +1);
    chances = 3;
}
btnNewGame();
function btnGuessOnAction() {
    
    let userInput = document.getElementById("txtUInput").value;
    let location = randomNumber > userInput?"Too Low":"Too High";
    if (randomNumber == userInput) {
            Swal.fire({
                title: "Right !",
                text: "You guessed correctly",
                icon: "success"
            });
            
    }else{
            Swal.fire({
                title: "Wrong !",
                text: "The answer is "+location,
                icon: "error"
            });
            
    }
    clearField();
    chances--;
    
}

function clearField() {
    let inputField = document.getElementById("txtUInput");
    inputField.value = "";
    if (chances == 0) {
        Swal.fire({
                title: "You Loose !",
                text: "Right Answer Is  "+randomNumber+"\n"+"You still can play more",
                icon: "error"
        });
    }
}