let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");
const gencompchoice = ()=> {
    const arr = ["rock","paper","scissors"];
    let ridx = Math.floor(Math.random()*3);
    return arr[ridx];
}
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin === true){
        userscore++;
        user_score.innerText = userscore;
        msg.innerText = `You Won!, ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        comp_score.innerText = compscore;
        msg.innerText = `You Lost!, ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const draw = (userchoice,compchoice)=>{
    msg.innerText = `Game was draw. try again.`;
    msg.style.backgroundColor = "grey";
};
const playgame = (userchoice)=>{
    const compchoice = gencompchoice();

    if(userchoice===compchoice){
        draw(userchoice,compchoice);
    }
    else{
        let userwin = true;
        if(userchoice==="rock"&&compchoice==="paper"){
            userwin = false;
        }
        if(userchoice==="rock"&&compchoice==="scissors"){
            userwin = true;
        }
        if(userchoice==="paper"&&compchoice==="scissors"){
            userwin = false;
        }
        if(userchoice==="paper"&&compchoice==="rock"){
            userwin = true;
        }
        if(userchoice==="scissors"&&compchoice==="rock"){
            userwin = false;
        }
        if(userchoice==="scissors"&&compchoice==="paper"){
            userwin = true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=> {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});