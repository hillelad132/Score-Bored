// home buttons functions

let homescreen = document.querySelector(".home-score");
 

function plusonea(){
    homescreen.innerText = parseInt(homescreen.innerText) + 1; 
    updateLeader();
}

function plustwoa(){
    homescreen.innerText = parseInt(homescreen.innerText) + 2;
    updateLeader();
}

function plusthreea(){
    homescreen.innerText = parseInt(homescreen.innerText) + 3;
    updateLeader();
}

// guest buttons functions

let guestscreen = document.querySelector(".guest-score");

function plusone(){
    guestscreen.innerText = parseInt(guestscreen.innerText) +1;
    updateLeader();
}

function plustwo(){
    guestscreen.innerText = parseInt(guestscreen.innerText) +2;
    updateLeader();
}

function plusthree(){
    guestscreen.innerText = parseInt(guestscreen.innerText) +3;
    updateLeader();
}

function updateLeader() {
  let homeScore = parseInt(document.querySelector(".home-score").innerText);
  let guestScore = parseInt(document.querySelector(".guest-score").innerText);

  document.querySelector(".home-score").classList.remove("leader");
  document.querySelector(".guest-score").classList.remove("leader");

  if (homeScore > guestScore) {
    document.querySelector(".home-score").classList.add("leader");
  } else if (homeScore < guestScore) {
    document.querySelector(".guest-score").classList.add("leader");
  }
}

// the new game button function



let resetButton = document.querySelector(".newgame")

resetButton.addEventListener("click", function() {
    homescreen.innerText = 0;
    guestscreen.innerText = 0;
    updateLeader();
});
