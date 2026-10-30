window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const addBtn = document.querySelector("#add-btn");
   addBtn.addEventListener("click", addBtnClick);

   const taskInput = document.querySelector("#new-task");
   taskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   const taskInput = document.querySelector("#new-task");
   const newTask = taskInput.value;

   if (newTask !== "") {
      addTask(newTask);
   }

   taskInput.value = "";
   taskInput.focus();
}

function addTask(newTask) {
   const li = document.createElement("li");
   li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;

   const ol = document.querySelector("ol");
   ol.appendChild(li);

   const doneButtons = document.querySelectorAll(".done-btn");
   doneButtons[doneButtons.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {
   const li = event.target.parentNode;
   const ol = li.parentNode;
   ol.removeChild(li);
}
