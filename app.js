let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#newgame-btn");
let msgContainer=document.querySelector(".msg-container");
let msgSelect=document.querySelector("#msg");
let mainSelect=document.querySelector(".main-class");

let turnO=true;//means o players turn so it will print o 

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.style.backgroundColor = "#007A74";
        box.disabled =true; 

        checkwinner();
    });
});

const showWinner=(winner)=>{
    msgSelect.innerText=`Congratulations, winner is ${winner}. `;
    msgContainer.classList.remove("hide");
    mainSelect.classList.add("hide");
}

const checkwinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern);
        // to fetch thier indices, do:
        // console.log(pattern[0],pattern[1],pattern[2]);
        //to see what is there at those indice:
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log(`${pos1val} is the winner!`);
                showWinner(pos1val);
            }
        }
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="white";
    }
}

const resetGame = ()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    mainSelect.classList.remove("hide");
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);