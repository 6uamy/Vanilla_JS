# Vanilla_JS

### [HTML DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

### Element.className vs Element.classList

#### Element.className = 'class names'

- 기존의 class가 없으면 추가해 넣고, 있으면 기존 것을 변경
- className 자체가 재정의 되기 때문에 기존에 있던 class가 사라진다.

#### Element.classList('class names')

- 기존 class에 새로운 클래스를 추가한다.
- class가 새로 추가되기 때문에 기존에 있던 class를 남길 수 있다.
- 기존의 class를 유지한 채로 사용하고 싶을 때 사용

##### Element.classList.toggle('class names')

- if, else문을 통한 클래스 check 로직을 사용하지 않고 해당 class Name이 존재하면 remove, 존재하지 않으면 add
