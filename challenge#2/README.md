## 🕘setInterval() 함수를 통한 타이머 기능

[구현 코드]

```javascript
const clock = document.querySelector("h2#clock");

function getClock(){
    const xmas = new Date("2022-12-25T00:00:00") // 크리스마스 시간 설정
    const date = new Date();
    const getDday = xmas.getTime() - date.getTime(); // 현재 시간 부터 남은 시간 계산
    const day = Math.floor(getDday/(1000*60*60*24));
    const hours = String(Math.floor((getDday % (1000*60*60*24))/(1000*60*60))).padStart(2, '0');
    const minutes = String(Math.floor((getDday % (1000*60*60))/(1000*60))).padStart(2, '0');
    const seconds = String(Math.floor((getDday % (1000*60))/1000)).padStart(2, '0');
    clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000); // function, 1000ms == 1s
```

[실행 결과]

![ezgif com-gif-maker](https://user-images.githubusercontent.com/79950091/197567065-9afe7b34-57b5-4809-8526-8dd640d1aefa.gif)


### 🗒️ setTimeout(function, ms)

#### 일정 시간 기다린 후 코드를 실행해야하는 경우에 사용할 수 있다.

- 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 지연 시간을 밀리초(ms)단위로 받는다.

```javascript
function sayHello(){
  console.log('Hello!');
}

setTimeout(sayHello, 5000) // 5000ms == 5s
```

- 해당 예시는 5초의 지연시간 후 sayHello함수를 실행시켜주는 기능을 한다.
- clearTimeout()함수를 통해 타이머를 종료할 수 있다.

### 🗒️ setInterval(function, ms)

#### 웹페이지의 특정 부분을 주기적으로 업데이트 하거나, 특정 데이터를 주기적으로 받아와야 할 경우에 사용할 수 있다.


- 첫번째 인자로 실행할 코드를 담고 있는 함수를 받고, 두번째 인자로 반복 주기를 밀리초(ms)단위로 받는다.

```javascript
function callDate(){
  const date = new Date();
  console.log(date);
}

setInterval(callDate, 1000) // 1000ms == 1s
```

- 해당 예시는 1초의 주기마다 callDate함수를 호출하여 현재 시각을 출력해준다.
- clearIntervalt()함수를 통해 실행을 중지할 수 있다.

### 🗒️ String.padStart(length, v)

- 해당 문자열의 길이를 임의로 조정하고, 모자란 길이 만큼의 index를 __앞에서부터__ v로 채워준다

```javascript
const str = 'hello';

str.padStart(10, 'x');
console.log(str); // 'xxxxxhello'
```

### 🗒️ String.padEnd(length, v)

- 해당 문자열의 길이를 임의로 조정하고, 모자란 길이 만큼의 index를 __뒤에서부터__ v로 채워준다.

```javascript
const str = 'hello';

str.padEnd(10, 'x');
console.log(str); // 'helloxxxxx'
```
