let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let ranBtns = ["btn0", "btn1", "btn2", "btn3"];
document.querySelector("body").style.backgroundColor = "gray";

function btnFlash(btn) {
  // console.log("button was flash");
  btn.classList.add("randomFlash");
  setTimeout(() => {
    btn.classList.remove("randomFlash");
    // console.log("class removed")
  }, 250);
}

function userFlash(btn) {
  // console.log("button was flash");
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
    // console.log("class removed")
  }, 100);
}

document.addEventListener("keypress", function (event) {
  if (event.code == "Enter"){
    console.log("game start")
  console.dir(event)
  started = true;

  randomFlash();
  btnTrigger();
}
});

function randomFlash() {
  userSeq = [];
  level++;
  let h5 = document.querySelector("h5");
  h5.innerText = `Level ${level}`;

  let ranNum = Math.floor(Math.random() * 3);
  let ranBtn1 = ranBtns[ranNum];
  gameSeq.push(ranBtn1);
  console.log(gameSeq);
  let ranBtn = document.querySelector(`.${ranBtn1}`);
  btnFlash(ranBtn);
}

function check(idx) {
  // let idx = level-1;
  // console.log(idx)
  if (gameSeq[idx] == userSeq[idx]) {
    // console.log("same value");
    if (gameSeq.length == userSeq.length) {
      setTimeout(randomFlash(), 1000);
    }
  } else {
    let h5 = document.querySelector("h5");
    h5.innerHTML = `<u>GAME OVER</u><br> Your Score is ${level} <br>'Press Enter Start the Game'`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
    // console.log("enter else")
  }
}

function btnTrigger() {
  let btns = document.querySelectorAll(".btn");

  for (let btn of btns) {
    btn.addEventListener("click", function () {
      // console.log(btn);
      let btnId = btn.getAttribute("id");
      userSeq.push(btnId);
    //   console.log(userSeq);
      userFlash(btn);

      check(userSeq.length - 1);
    });
  }
}

function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
