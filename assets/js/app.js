function btnGuessOnAction() {
    let randomNumber = Math.floor((Math.random()*10) +1);
    let userInput = document.getElementById("txtUInput").value;
    
    if (randomNumber == userInput) {
            Swal.fire({
                title: "Right !",
                text: "You guessed correctly",
                icon: "success"
            });
            
    }else{
            Swal.fire({
                title: "Wrong !",
                text: "You still can guess more",
                icon: "error"
            });
            
    }
    clearField();
    
}

function clearField() {
    let inputField = document.getElementById("txtUInput");
    inputField.value = "";
}