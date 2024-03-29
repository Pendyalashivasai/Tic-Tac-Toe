let boxes=document.querySelectorAll (".box");
let resetbtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#newgame-btn");
let msgcon=document.querySelector(".msg-container ");
let msg=document.querySelector("#msg");

let turno=true;
let click_count=0;
let patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetgame=()=>{
    turno=true;
    enablebtns();
    msgcon.classList.add("hide");
    resetbtn.style.display="block";

};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
        
    });
});

const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

};
const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebtns();
    resetbtn.style.display="none";
};


const checkwinner=()=>{
    let draw=true;
    for(prt of patterns){
        let pos1=boxes[prt[0]].innerText;
        let pos2=boxes[prt[1]].innerText;
        let pos3=boxes[prt[2]].innerText;
        if(pos1 !=""&& pos2 !="" && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                showwinner(pos1);
                draw=false;
                break;
            }
        }
            else{
                draw=false;
            }
        }
    if(draw){
        msg.innerText="It's a draw";
        msgcon.classList.remove("hide");
        resetbtn.style.display="none";
    }
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
