let userName = prompt("enter your name (* to skip)");
if(userName === "*") {
    userName = "user";
}
let options = document.querySelectorAll(".images");
let choice = document.querySelectorAll(".image");
let instruction = document.querySelector(".instruction");
let yscore = document.querySelector(".yscore");
let cscore = document.querySelector(".cscore");
let ys = 0;
let cs = 0;
let userWin = 0; //0 lose, 1 win, 2 draw

options.forEach((option) => {
    option.addEventListener("click", () => {
        console.log(option.getAttribute("id"));
        let id = option.id;
        showuser(id);
        let cchoice = Math.floor(Math.random() * 3);
        showcomputer(cchoice);
        userWin = checkWinner(cchoice, id);
        if(userWin === 2) {
            instruction.innerText = "DRAW !";
            instruction.classList.add("draw");
            instruction.classList.remove("loser", "winner");
        }
        else if(userWin === 0) {
            instruction.innerText = "computer WON !";
            instruction.classList.add("loser");
            instruction.classList.remove("draw", "winner");
            cscore.innerText = ++cs;
        }
        else if(userWin === 1) {
            instruction.innerText = `${userName} WON !`;
            instruction.classList.add("winner");
            instruction.classList.remove("loser", "draw");
            yscore.innerText = ++ys;
        }
    })
})

const showuser = (id) => {
    choice[0].style.backgroundImage = `url("images/${id}.png")`;
}

const showcomputer = (cchoice) => {
    choice[1].style.backgroundImage = `url("images/${options[cchoice].id}.png")`;
}

const checkWinner = (cchoice, id) => {
    if(options[cchoice].id === id) {
        userWin = 2;
        console.log(userWin);
    }
    else if(id === "paper") {
        userWin = options[cchoice].id === "stone"? 1 : 0;
        console.log(userWin);
    }
    else if(id === "stone") {
        userWin = options[cchoice].id === "scissor"? 1 : 0;
        console.log(userWin);
    }
    else if(id === "scissor") {
        userWin = options[cchoice].id === "paper"? 1 : 0;
        console.log(userWin);
    }
return userWin;
}