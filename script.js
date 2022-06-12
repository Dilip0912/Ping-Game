const scorep1 = document.querySelector(".totalscorep1");
const scorep2 = document.querySelector(".totalscorep2");
const currentscorep1 = document.querySelector(".currentscorep1");
const currentscorep2 = document.querySelector(".currentscorep2");
const rolldice = document.querySelector(".btnrolldice");
const hold = document.querySelector(".btnhold");
const newGame = document.querySelector(".btnnewgame");
const diceimage = document.querySelector(".image");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let scorecurrent = 0;
let activeplayer = 1;
let scores = [0, 0];
let playing = true;
//rolling dice funtion
diceimage.classList.add("hidden");
rolldice.addEventListener("click", function () {
  if (playing) {
    //Generate a random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    //changing the dice
    diceimage.src = `dice-${dice}.png`;
    diceimage.classList.remove("hidden");
    // console.log(`${dice}`);

    const switchplayer = function () {
      document.getElementById(`score--${activeplayer}`).innerText = 0;
      activeplayer = activeplayer === 1 ? 2 : 1;
      scorecurrent = 0;
      left.classList.toggle("active");
      right.classList.toggle("active");
    };

    if (dice !== 1) {
      scorecurrent += dice;
      document.getElementById(`score--${activeplayer}`).innerText =
        scorecurrent;
      // currentscorep.textContent=scorecurrent;
    } else {
      document.getElementById(`score--${activeplayer}`).innerText = 0;
      activeplayer = activeplayer === 1 ? 2 : 1;
      scorecurrent = 0;
      left.classList.toggle("active");
      right.classList.toggle("active");
    }
  }
});
hold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer - 1] += scorecurrent;
    document.querySelector(`.totalscorep${activeplayer}`).innerText =
      scores[activeplayer - 1];

    document.getElementById(`score--${activeplayer}`).innerText = 0;
    activeplayer = activeplayer === 1 ? 1 : 2;
    const activeplayerwinner = activeplayer === 1 ? left : right;
    scorecurrent = 0;
    left.classList.toggle("active");
    right.classList.toggle("active");
    if (scores[activeplayer - 1] >= 100) {
      playing = false;
      diceimage.classList.add("hidden");
      activeplayerwinner.classList.add("winner");
      activeplayerwinner.classList.remove("active");
    } else {
      activeplayer = activeplayer === 1 ? 2 : 1;
    }
  }
});
newGame.addEventListener("click", function () {
  scorecurrent = 0;
  activeplayer = 1;
  scores = [0, 0];
  playing = true;
  activeplayer = activeplayer === 1 ? 1 : 2;
  activeplayerwinner = activeplayer === 1 ? left : right;
  // activeplayerwinner.classList.remove("winner");
  left.classList.remove("winner");
  right.classList.remove("winner");
  left.classList.add("active");
  right.classList.remove("active");
  scorep1.textContent = 0;
  scorep2.textContent = 0;
  currentscorep1.textContent = 0;
  currentscorep2.textContent = 0;
});
