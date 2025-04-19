import "./styles.css";
import { addTaskBtn, tasksContainer } from "./js/dom";
import { appendTask, showTaskForm } from "./js/createTask";
import { toggleTask } from "./js/toggleTask";
import { editTask } from "./js/editTask";
import { deleteTask } from "./js/deleteTask";

toggleTask(tasksContainer);
editTask(tasksContainer);
deleteTask(tasksContainer);

addTaskBtn.addEventListener("click", () => {
    showTaskForm(tasksContainer, (title, due) => {
        appendTask(tasksContainer, title, due);
    });
});