export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      const pitching = computerInputNumbers.indexOf(userInputNumbers[i]);

      if (pitching == i) {
        strike += 1;
      } else if (pitching !== -1) {
        ball += 1;
      }
    }

    if(strike === 3){
      result.innerText = '🎉정답을 맞추셨습니다!🎉';
    } else if(strike !== 0 && ball !== 0){
      result.innerText = `${ball}볼 ${strike}스트라이크`;
    } else if(strike !== 0){
      result.innerText = `${strike}스트라이크`;
    } else if(ball !== 0){
      result.innerText = `${ball}볼`;
    } else{
      result.innerText = '낫싱';
    }
  };
}

const userSubmit = document.querySelector('#submit');
const userInput = document.querySelector('#user-input');
const result = document.querySelector('#result');

function handleSubmit(event){
    event.preventDefault();
    const userValue = userInput.value;
    const duplicate = isDuplicate(userValue);

    if(isNaN(userValue)){
      alert('입력 값은 숫자만 가능합니다.')
    } else if(userValue === '' || userValue.length !== 3 || duplicate === false){
      alert('1~9까지의 수를 중복없이 3개 입력해주세요.');
    } else{
      console.log(comNumber)
      return startGame.play(comNumber, userValue.split('').map(x => Number(x)));
    }
}

function isDuplicate(userValue){
  const arr = new Set(userValue.split(''));
  if(arr.size === userValue.length){
    return true;
  } else{
    return false;
  }
}

function randomCom(){
  let randomArr = new Set();
  while(randomArr.size < 3){
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    randomArr.add(randomNumber);
  }
  return [...randomArr];
}

const comNumber = randomCom();
const startGame = new BaseballGame();
userSubmit.addEventListener('click', handleSubmit);
