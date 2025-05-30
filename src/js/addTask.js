import { createTaskElement, createTaskForm } from "./dom.js";
import { updateData, getData } from "./dataStore.js";

function showTaskForm(container, onSubmit) {
  const form = createTaskForm(onSubmit);
  container.append(form);
}

function appendTask(container, title, dueDate) {
  const newTask = createTaskElement(title, dueDate);
  container.appendChild(newTask);
}

function addTask() {
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-task-btn")) {
      const active = getData().activeProject;
      const mainContent = e.target.closest(".main-content");
      const tasksContainer = mainContent.querySelector(".tasks-container");

      if (mainContent.querySelector(".task-form")) return;

      showTaskForm(tasksContainer, (title, due) => {
        appendTask(tasksContainer, title, due);
        updateData(data => {
          data.projects[active].tasks.push({
            title,
            due,
            description: "",
            notes: ""
          });
        });
      });
    }
  });
}

export { addTask };