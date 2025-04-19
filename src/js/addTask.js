import { createTaskElement, createTaskForm } from "./domFactory";
import { addTaskBtn } from "./dom";

function showTaskForm(container, onSubmit) {
  const form = createTaskForm(onSubmit);
  container.append(form);
}

function appendTask(container, title, dueDate) {
  const newTask = createTaskElement(title, dueDate);
  container.appendChild(newTask);
}

function addTask(container) {
  addTaskBtn.addEventListener("click", () => {
    showTaskForm(container, (title, due) => {
      appendTask(container, title, due);
    });
  });

}

export { addTask };