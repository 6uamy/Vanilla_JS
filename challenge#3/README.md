### 🖼️ click할 때마다 색상이 섞인 배경화면 출력

[구현 코드]
```javascript
  function handleClick() {
    const firstColor = Math.floor(Math.random() * colors.length); // 배열에 저장된 색상 코드를 랜덤하게 저장
    const secondColor = Math.floor(Math.random() * colors.length);
    body.style.background = `linear-gradient(to left, ${colors[firstColor]}, ${colors[secondColor]})`; // 저장된 두 색상을 선형으로 조합하여 background로 출력
  }
```

[실행 결과]

![2022-10-25-00-41-57-_online-video-cutter com_](https://user-images.githubusercontent.com/79950091/197569356-feb82223-6805-4427-a13c-3846db8a7020.gif)
