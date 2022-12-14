## ๐setInterval() ํจ์๋ฅผ ํตํ ํ์ด๋จธ ๊ธฐ๋ฅ

[๊ตฌํ ์ฝ๋]

```javascript
const clock = document.querySelector("h2#clock");

function getClock(){
    const xmas = new Date("2022-12-25T00:00:00") // ํฌ๋ฆฌ์ค๋ง์ค ์๊ฐ ์ค์ 
    const date = new Date();
    const getDday = xmas.getTime() - date.getTime(); // ํ์ฌ ์๊ฐ ๋ถํฐ ๋จ์ ์๊ฐ ๊ณ์ฐ
    const day = Math.floor(getDday/(1000*60*60*24));
    const hours = String(Math.floor((getDday % (1000*60*60*24))/(1000*60*60))).padStart(2, '0');
    const minutes = String(Math.floor((getDday % (1000*60*60))/(1000*60))).padStart(2, '0');
    const seconds = String(Math.floor((getDday % (1000*60))/1000)).padStart(2, '0');
    clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000); // function, 1000ms == 1s
```

[์คํ ๊ฒฐ๊ณผ]

![ezgif com-gif-maker](https://user-images.githubusercontent.com/79950091/197567065-9afe7b34-57b5-4809-8526-8dd640d1aefa.gif)


### ๐๏ธ setTimeout(function, ms)

#### ์ผ์  ์๊ฐ ๊ธฐ๋ค๋ฆฐ ํ ์ฝ๋๋ฅผ ์คํํด์ผํ๋ ๊ฒฝ์ฐ์ ์ฌ์ฉํ  ์ ์๋ค.

- ์ฒซ๋ฒ์งธ ์ธ์๋ก ์คํํ  ์ฝ๋๋ฅผ ๋ด๊ณ  ์๋ ํจ์๋ฅผ ๋ฐ๊ณ , ๋๋ฒ์งธ ์ธ์๋ก ์ง์ฐ ์๊ฐ์ ๋ฐ๋ฆฌ์ด(ms)๋จ์๋ก ๋ฐ๋๋ค.

```javascript
function sayHello(){
  console.log('Hello!');
}

setTimeout(sayHello, 5000) // 5000ms == 5s
```

- ํด๋น ์์๋ 5์ด์ ์ง์ฐ์๊ฐ ํ sayHelloํจ์๋ฅผ ์คํ์์ผ์ฃผ๋ ๊ธฐ๋ฅ์ ํ๋ค.
- clearTimeout()ํจ์๋ฅผ ํตํด ํ์ด๋จธ๋ฅผ ์ข๋ฃํ  ์ ์๋ค.

### ๐๏ธ setInterval(function, ms)

#### ์นํ์ด์ง์ ํน์  ๋ถ๋ถ์ ์ฃผ๊ธฐ์ ์ผ๋ก ์๋ฐ์ดํธ ํ๊ฑฐ๋, ํน์  ๋ฐ์ดํฐ๋ฅผ ์ฃผ๊ธฐ์ ์ผ๋ก ๋ฐ์์์ผ ํ  ๊ฒฝ์ฐ์ ์ฌ์ฉํ  ์ ์๋ค.


- ์ฒซ๋ฒ์งธ ์ธ์๋ก ์คํํ  ์ฝ๋๋ฅผ ๋ด๊ณ  ์๋ ํจ์๋ฅผ ๋ฐ๊ณ , ๋๋ฒ์งธ ์ธ์๋ก ๋ฐ๋ณต ์ฃผ๊ธฐ๋ฅผ ๋ฐ๋ฆฌ์ด(ms)๋จ์๋ก ๋ฐ๋๋ค.

```javascript
function callDate(){
  const date = new Date();
  console.log(date);
}

setInterval(callDate, 1000) // 1000ms == 1s
```

- ํด๋น ์์๋ 1์ด์ ์ฃผ๊ธฐ๋ง๋ค callDateํจ์๋ฅผ ํธ์ถํ์ฌ ํ์ฌ ์๊ฐ์ ์ถ๋ ฅํด์ค๋ค.
- clearIntervalt()ํจ์๋ฅผ ํตํด ์คํ์ ์ค์งํ  ์ ์๋ค.

### ๐๏ธ String.padStart(length, v)

- ํด๋น ๋ฌธ์์ด์ ๊ธธ์ด๋ฅผ ์์๋ก ์กฐ์ ํ๊ณ , ๋ชจ์๋ ๊ธธ์ด ๋งํผ์ index๋ฅผ __์์์๋ถํฐ__ v๋ก ์ฑ์์ค๋ค

```javascript
const str = 'hello';

str.padStart(10, 'x');
console.log(str); // 'xxxxxhello'
```

### ๐๏ธ String.padEnd(length, v)

- ํด๋น ๋ฌธ์์ด์ ๊ธธ์ด๋ฅผ ์์๋ก ์กฐ์ ํ๊ณ , ๋ชจ์๋ ๊ธธ์ด ๋งํผ์ index๋ฅผ __๋ค์์๋ถํฐ__ v๋ก ์ฑ์์ค๋ค.

```javascript
const str = 'hello';

str.padEnd(10, 'x');
console.log(str); // 'helloxxxxx'
```
