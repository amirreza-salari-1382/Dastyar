const form = document.querySelector("form");
const todo_list = document.querySelector("ul");
const input_task = document.querySelector(".box_add_task input");
const showValue = (value) => {
  const divElement = document.createElement("div");
  divElement.classList.add("tasks");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  const liElement = document.createElement("li");
  liElement.innerHTML = value;
  const divBoxIcon = document.createElement("div");
  divBoxIcon.classList.add("box_icon_todo");
  divBoxIcon.innerHTML = `<i class="bx bxs-trash"></i>`;
  divElement.append(checkBox);
  divElement.append(liElement);
  divElement.append(divBoxIcon);
  todo_list.prepend(divElement);
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input_task.value;
  let userValue = inputValue.trim();
  userValue == "" ? null : showValue(userValue);
  input_task.value = "";
  saveTasks();
});
todo_list.addEventListener("click", (e) => {
  let clickElement = e.target;
  if (clickElement.classList.contains("bxs-trash")) {
    clickElement.parentElement.parentElement.remove();
  }
  saveTasks();
});
function saveTasks() {
  localStorage.setItem("time", todo_list.innerHTML);
}
function showTasks() {
  todo_list.innerHTML = localStorage.getItem("time");
}
showTasks();
