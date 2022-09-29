const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");
const superEventHandler = {
  handleEnter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: function () {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleRightClick: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[4];
  }
};
// 마우스가 올라갔을 때
h2.addEventListener("mouseenter", superEventHandler.handleEnter);
// 마우스가 내려갔을 때
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
// 브라우저 창의 사이즈가 변했을 때
window.addEventListener("resize", superEventHandler.handleResize);
// 마우스를 우클릭 했을 때
window.addEventListener("contextmenu", superEventHandler.handleRightClick);
