// console.log("here!!!!");

const ul = document.querySelector("ul");
const btn = document.querySelector("#addTaskButn");
const newTaskText = document.querySelector("#addTaskText");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log("click!!!");
  const li = document.createElement("li");

  li.innerHTML = `
  <div class='task-text'>
  <button class='check' onclick='clickCheck(this)'></button>
  ${newTaskText.value}</div>
  <div class='edit-delete'>
    <button class='edit'>Edit</button>
    <button class='delete'>Delete</button>
  </div>`;
  ul.appendChild(li);

  newTaskText.value = "";
});

const clickCheck = (element) => {
  console.log("here");
  console.log(element);
  if (element.innerHTML === "") {
    element.innerHTML = "V";
  } else {
    element.innerHTML = "";
  }
};
