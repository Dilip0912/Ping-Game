
const scorep1=document.querySelector('.totalscorep1');
const scorep2=document.querySelector('.totalscorep2');
const currentscorep1=document.querySelector('.currentscorep1');
const currentscorep2=document.querySelector('.currentscorep2');
const rolldice=document.querySelector('.btnrolldice');
const hold=document.querySelector('.btnhold');
const newGame=document.querySelector('.btnnewgame')
const diceimage=document.querySelector('.image')

let scorecurrent=0;
let activeplayer=1;
const scores=[0,0];
//rolling dice funtion
rolldice.addEventListener('click',function(){
    //Generate a random dice number
    const dice=Math.trunc(Math.random()*6)+1
    
    //changing the dice
    diceimage.src = `dice-${dice}.png`;
    // console.log(`${dice}`);

if(dice!==1){
    scorecurrent+=dice;
     document.getElementById(`score--${activeplayer}`).innerText=scorecurrent;
    // currentscorep.textContent=scorecurrent;
}
else{
    activeplayer= activeplayer===1?2:1;  
    scorecurrent=0; 
}
});
// console.log(document.getElementById(score1).textcontent);

