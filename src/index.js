import { addTaskBtn, tasksContainer } from "./js/dom";
import { appendTask, showTaskForm } from "./js/createTask";
import { toggleTask } from "./js/toggleTask";
import "./styles.css";

toggleTask(tasksContainer);

addTaskBtn.addEventListener("click", () => {
    showTaskForm(tasksContainer, (title, due) => {
        appendTask(tasksContainer, title, due);
    });
});