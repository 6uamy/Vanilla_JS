### User Input값이 없을 경우 alert()를 통한 알림

[구현 코드]
```javascript
function handleSubmit(event) {
  event.preventDefault(); // form 입력을 통한 페이지 새로고침을 막아준다. 
  if (userInput.value === "" || machineInput.value === "") { // input 값이 있는지 확인
    alert("Input value is null! Please check input value.");
  } else if (userInput.value < 0 || machineInput.value < 0) { // input 값이 음수인지 확인
    alert("Input value can't negative!");
  } else {
    machineRandom(machineInput.value);
  }
}
```
[실행 결과]

<img src='https://user-images.githubusercontent.com/79950091/197561272-72939faa-3c54-4d25-8e29-5f4f21a94006.png' width='700px' height='300px' />

### 컴퓨터의 랜덤 값과 유저의 입력 값 비교를 통한 일치 여부 확인

[구현 코드]
```javascript
function machineRandom(randNum) {
  const user = userInput.value;

  const num = Math.floor(Math.random() * (parseInt(randNum) + 1)); // 입력한 숫자 범위의 랜덤한 숫자 값을 저장 (0 ~ 입력 값 까지)
  inGame.innerText = `You chose: ${user}, the machine chose: ${num}.`;
  inGame.classList.remove(HIDDEN_CLASS);

  if (parseInt(user) === num) { // 숫자가 일치할 경우의 조건문
    result.innerText = "You won!";
    result.classList.remove(HIDDEN_CLASS);
  } else {       
    result.innerText = "You lost!"; // 숫자가 일치하지 않을 경우의 조건문
    result.classList.remove(HIDDEN_CLASS);
  }
}
```
[실행 결과]

<img src='https://user-images.githubusercontent.com/79950091/197561278-1653cc5d-f9cb-4dc7-9850-d0ef0704e0cc.png' width='700px' height='300px' />


<img src='https://user-images.githubusercontent.com/79950091/197561280-9f2d023a-e774-4df5-b50f-02f02e9b8d26.png' width='700px' height='300px' />
