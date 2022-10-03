# Vanilla_JS

### [HTML DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## ✏️ Element.className vs Element.classList

#### Element.className = 'class names'

- 기존의 class가 없으면 추가해 넣고, 있으면 기존 것을 변경
- className 자체가 재정의 되기 때문에 기존에 있던 class가 사라진다.

#### Element.classList('class names')

- 기존 class에 새로운 클래스를 추가한다.
- class가 새로 추가되기 때문에 기존에 있던 class를 남길 수 있다.
- 기존의 class를 유지한 채로 사용하고 싶을 때 사용

##### Element.classList.toggle('class names')

- if, else문을 통한 클래스 check 로직을 사용하지 않고 해당 class Name이 존재하면 remove, 존재하지 않으면 add


## ✏️ event.preventDefault()

- a태그나 submit역할을 하는 form이 실행되면 브라우저가 자동으로 새로고침 되기 때문에 이를 방지하기 위해 사용한다.
- preventDefault()를 사용하지 않고 submit을 진행할 경우 해당 정보가 submit되는 동시에 브라우저가 <br> 새로고침 되기 때문에 정보를 전달하지 못하고 정보가 초기화 된다.

## ✏️ Window.localStorage()

- 유저의 이름이나 아이디 같은 기억해야 할 데이터를 저장하기 위한 로컬 저장소이다.

### localStorage.setItem('key', 'value');

- localStorage에 key-value 값을 저장한다.

### localStorage.getItem('key');

- localStorage에 저장되어 있는 key값에 대한 value를 가져온다.

### localStorage.removeItem('key');

- localStorage에 있는 해당 key 데이터를 삭제한다.
