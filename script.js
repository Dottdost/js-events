/*Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.*/
const username = document.querySelector(".username");
username.addEventListener("keydown", (event) => {
  if (/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
});

/*Создать html-страницу с кнопкой Открыть и модальным
окном. На модальном окне должен быть текст и кнопка Закрыть.
Изначально модальное окно не отображается. При клике на
кнопку Открыть появляется модальное окно, на кнопку Закрыть –
исчезает */
const openbtn = document.querySelector(".openModal");
const closebtn = document.querySelector(".closeModal");
const modal = document.querySelector(".modal");
openbtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closebtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//третий вообще не получается

/*Создать html-страницу со светофором и кнопкой, которая
переключает светофор на следующий цвет. */
const light1 = document.querySelector(".light1");
const light2 = document.querySelector(".light2");
const light3 = document.querySelector(".light3");
const lightBtn = document.querySelector(".lightBtn");
let index = 0;

lightBtn.addEventListener("click", () => {
  light1.style.backgroundColor = "gray";
  light2.style.backgroundColor = "gray";
  light3.style.backgroundColor = "gray";
  if (index === 0) {
    light1.style.backgroundColor = "red";
  } else if (index === 1) {
    light2.style.backgroundColor = "yellow";
  } else if (index === 2) {
    light3.style.backgroundColor = "green";
  }
  index = (index + 1) % 3;
});
/*Создать html-страницу со списком книг.
При щелчке на книгу, цвет фона должен меняться на оранжевый.
Учтите, что при повторном щелчке на другую книгу, предыдущей –
необходимо возвращать прежний цвет. */
const books = document.querySelectorAll(".bookList li");
books.forEach((book) => {
  book.addEventListener("click", () => {
    books.forEach((b) => (b.style.backgroundColor = ""));
    book.style.backgroundColor = "orange";
  });
});

/* Создать html-страницу с несколькими кнопками.
При наведении на кнопку, должна появляться подсказка с текстом. По умолчанию – подсказка появляется сверху от кнопки. Но
если она не помещается сверху от кнопки, тогда отображается снизу.*/

const btn = document.querySelector(".buttons");
btn.addEventListener("mouseover", show);
btn.addEventListener("mouseout", hide);
function show(event) {}

function hide() {}
