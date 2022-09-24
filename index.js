const todo = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const inputDiv = document.querySelector(".input_div");
const container = document.querySelector(".container");
const editButton = document.querySelector(".editButton");

let todos = [];

const createMarkup = function () {
  return todos.map(
    (el, i) =>
      `<div class="item">
          <div class="item_input">
            <p>${el}</p>
            <div>
              <button class="editButton" onclick="editTodo(${i})">EDIT</button>
              <button class="deleteButton" onclick="deleteTodo(${i})" >DELETE</button>
            </div>
          </div>
      </div>`
  );
};

const createTodo = function () {
  if (todo.value) todos.push(todo.value);

  container.innerHTML = "";

  //   container.insertAdjacentHTML("beforeend", markup.join(""));
  container.innerHTML = createMarkup().join("");

  todo.value = "";
  todo.focus();
};

addButton.addEventListener("click", createTodo);

inputDiv.addEventListener("keydown", (e) => {
  if (e.key === "Enter") createTodo();
});

const editTodo = function (i) {
  if (todo.value) todos[i] = todo.value;

  container.innerHTML = createMarkup().join("");

  todo.value = "";
  todo.focus();
};

const deleteTodo = function (index) {
  todos = todos.filter((el, i) => todos[index] !== el);

  container.innerHTML = createMarkup().join("");

  todo.focus();
};
