import { createTaskElement, createTaskForm } from "./domFactory";

function showTaskForm(container, onSubmit) {
  const form = createTaskForm(onSubmit);
  container.append(form);
}

function appendTask(container, title, dueDate) {
  const newTask = createTaskElement(title, dueDate);
  container.appendChild(newTask);
}

export { appendTask, showTaskForm };