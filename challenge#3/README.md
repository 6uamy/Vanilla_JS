### ๐ผ๏ธ clickํ  ๋๋ง๋ค ์์์ด ์์ธ ๋ฐฐ๊ฒฝํ๋ฉด ์ถ๋ ฅ

[๊ตฌํ ์ฝ๋]
```javascript
  function handleClick() {
    const firstColor = Math.floor(Math.random() * colors.length); // ๋ฐฐ์ด์ ์ ์ฅ๋ ์์ ์ฝ๋๋ฅผ ๋๋คํ๊ฒ ์ ์ฅ
    const secondColor = Math.floor(Math.random() * colors.length);
    body.style.background = `linear-gradient(to left, ${colors[firstColor]}, ${colors[secondColor]})`; // ์ ์ฅ๋ ๋ ์์์ ์ ํ์ผ๋ก ์กฐํฉํ์ฌ background๋ก ์ถ๋ ฅ
  }
```

[์คํ ๊ฒฐ๊ณผ]

![2022-10-25-00-41-57-_online-video-cutter com_](https://user-images.githubusercontent.com/79950091/197569356-feb82223-6805-4427-a13c-3846db8a7020.gif)
