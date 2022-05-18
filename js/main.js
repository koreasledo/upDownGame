// 랜덤 번호 지정
// 번호 입력 후 버튼을 누름
// 만약 유저가 랜덤 번호를 맞추면 정답입니다!
// 랜덤 번호가 < 유저 번호  Down
// 랜덤 번호가 > 유저 번호 UP
// Reset 버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다 쓰면 게임이 끝난다 ( 버튼 disable )
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려주고 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깎지 않는다.

let computerNum = 0;
let playBtn = document.getElementById("playBtn");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetBtn = document.getElementById("resetBtn");
let chancesGame = 5;
let chanceArea = document.getElementById("chanceArea");
let historyNum = [];
let photoBox = document.getElementById("photoBox");

playBtn.addEventListener("click", playGame);
resetBtn.addEventListener("click", resetGame);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random ()* 100) +1;
  console.log("정답", computerNum);
}

function playGame() {
  let userValue = userInput.value;

  if(userValue<1 || userValue>100) {
    resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요."
    photoBox.style.backgroundImage = "url('https://media1.giphy.com/media/l0HlRbzudFgArJ2rC/giphy.gif?cid=ecf05e47bdl7o2qin2we6l5vodnatyukry5nvb96mhyo5w40&rid=giphy.gif&ct=g')";
    return;
  }

  if(historyNum.includes(userValue)) {
    resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요!";
    photoBox.style.backgroundImage = "url('https://media1.giphy.com/media/l0HlRbzudFgArJ2rC/giphy.gif?cid=ecf05e47bdl7o2qin2we6l5vodnatyukry5nvb96mhyo5w40&rid=giphy.gif&ct=g')";
    return;
  }


  chancesGame--;
  chanceArea.textContent = `남은 기회: ${chancesGame}번`;

  if(userValue < computerNum) {
    resultArea.textContent = "UP!!";
    photoBox.style.backgroundImage = "url('https://media2.giphy.com/media/2Yc34eyHzscnsrgySp/giphy.gif?cid=ecf05e47obmu6ofaijd5k1wqy27yrsbtg46e4mtu760egyjs&rid=giphy.gif&ct=g')";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!";
    photoBox.style.backgroundImage = "url('https://media3.giphy.com/media/Js7cqIkpxFy0bILFFA/giphy.gif?cid=ecf05e478n5ii79kckdz40gdqyjujhstif8jqdabnkvbpaos&rid=giphy.gif&ct=g')";
  } else {
    resultArea.textContent = "That's right! 정답입니다!";
    photoBox.style.backgroundImage = "url('https://media3.giphy.com/media/3WCNY2RhcmnwGbKbCi/giphy.gif?cid=ecf05e472wxxltaxwglgdzpa6wwzpa8qnw8k8nbwu5faza2m&rid=giphy.gif&ct=g')";
    playBtn.disabled = true;
  }

  historyNum.push(userValue);
  console.log(historyNum);

  if(chancesGame < 1 ) {
    resultArea.textContent = "Oh,No!";
    chanceArea.textContent = "GAME OVER";
    photoBox.style.backgroundImage = "url('https://media3.giphy.com/media/li0dswKqIZNpm/giphy.gif?cid=ecf05e47ted2pwuwro2mnpwaztq4jzkrix7psqsylt3scsdj&rid=giphy.gif&ct=g')";
    playBtn.disabled = true;
  }
}

function resetGame() {
  //user input창 깨끗하게
  userInput.value = "";
  // 새로운 번호가 생성되고
  resultArea.textContent = "숫자를 맞춰보세요!";
  photoBox.style.backgroundImage = "url('https://media0.giphy.com/media/flbcUFdLSHwZC03p11/giphy.gif?cid=ecf05e47bc2n07ohxix19e6sbz3j5rkn8xzap4w7v3tn5e0n&rid=giphy.gif&ct=g')";
  chancesGame = 5;
  chanceArea.textContent = `남은 기회: ${chancesGame}번`;
  playBtn.disabled = false;
  historyNum = []
  pickRandomNum();
}

pickRandomNum();