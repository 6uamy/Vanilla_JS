### ๐ท๏ธ ๋ธ๋ง๋ ์ฝ๋์ ['๋ฐ๋๋ผ JS ์ฑ๋ฆฐ์ง'](https://nomadcoders.co/) ํ์ต์ ์งํํ๋ฉฐ ๊ธฐ๋กํ๊ธฐ ์ํ Repository์๋๋ค.

#### [HTML DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
#### [JavaScript ์น ๋ฌธ์ ํ์ค ์ฐธ๊ณ ](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ๐ฉ Challenge vanilla

- [Random number game](https://github.com/6uamy/Vanilla_JS/tree/main/challenge%231)
- [Christmas timer](https://github.com/6uamy/Vanilla_JS/tree/main/challenge%232)
- [Random background](https://github.com/6uamy/Vanilla_JS/tree/main/challenge%233)
- [toDo site](https://6uamy.github.io/)

## โ๏ธ Element.className vs Element.classList

#### Element.className = 'class names'

- ๊ธฐ์กด์ class๊ฐ ์์ผ๋ฉด ์ถ๊ฐํด ๋ฃ๊ณ , ์์ผ๋ฉด ๊ธฐ์กด ๊ฒ์ ๋ณ๊ฒฝ
- className ์์ฒด๊ฐ ์ฌ์ ์ ๋๊ธฐ ๋๋ฌธ์ ๊ธฐ์กด์ ์๋ class๊ฐ ์ฌ๋ผ์ง๋ค.

#### Element.classList('class names')

- ๊ธฐ์กด class์ ์๋ก์ด ํด๋์ค๋ฅผ ์ถ๊ฐํ๋ค.
- class๊ฐ ์๋ก ์ถ๊ฐ๋๊ธฐ ๋๋ฌธ์ ๊ธฐ์กด์ ์๋ class๋ฅผ ๋จ๊ธธ ์ ์๋ค.
- ๊ธฐ์กด์ class๋ฅผ ์ ์งํ ์ฑ๋ก ์ฌ์ฉํ๊ณ  ์ถ์ ๋ ์ฌ์ฉ

##### Element.classList.toggle('class names')

- if, else๋ฌธ์ ํตํ ํด๋์ค check ๋ก์ง์ ์ฌ์ฉํ์ง ์๊ณ  ํด๋น class Name์ด ์กด์ฌํ๋ฉด remove, ์กด์ฌํ์ง ์์ผ๋ฉด add


## โ๏ธ event.preventDefault()

- aํ๊ทธ๋ submit์ญํ ์ ํ๋ form์ด ์คํ๋๋ฉด ๋ธ๋ผ์ฐ์ ๊ฐ ์๋์ผ๋ก ์๋ก๊ณ ์นจ ๋๊ธฐ ๋๋ฌธ์ ์ด๋ฅผ ๋ฐฉ์งํ๊ธฐ ์ํด ์ฌ์ฉํ๋ค.
- preventDefault()๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  submit์ ์งํํ  ๊ฒฝ์ฐ ํด๋น ์ ๋ณด๊ฐ submit๋๋ ๋์์ ๋ธ๋ผ์ฐ์ ๊ฐ <br> ์๋ก๊ณ ์นจ ๋๊ธฐ ๋๋ฌธ์ ์ ๋ณด๋ฅผ ์ ๋ฌํ์ง ๋ชปํ๊ณ  ์ ๋ณด๊ฐ ์ด๊ธฐํ ๋๋ค.

## โ๏ธ Window.localStorage()

- ์ ์ ์ ์ด๋ฆ์ด๋ ์์ด๋ ๊ฐ์ ๊ธฐ์ตํด์ผ ํ  ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๊ธฐ ์ํ ๋ก์ปฌ ์ ์ฅ์์ด๋ค.

### localStorage.setItem('key', 'value');

- localStorage์ key-value ๊ฐ์ ์ ์ฅํ๋ค.

### localStorage.getItem('key');

- localStorage์ ์ ์ฅ๋์ด ์๋ key๊ฐ์ ๋ํ value๋ฅผ ๊ฐ์ ธ์จ๋ค.

### localStorage.removeItem('key');

- localStorage์ ์๋ ํด๋น key ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํ๋ค.
