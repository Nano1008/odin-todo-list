import "./styles.css";
import { tasksContainer } from "./js/dom";
import { addTask } from "./js/addTask";
import { toggleTask } from "./js/toggleTask";
import { editTask } from "./js/editTask";
import { deleteTask } from "./js/deleteTask";
import { addProject, selectProject } from "./js/project";

// Task
toggleTask(tasksContainer);
addTask(tasksContainer);
editTask(tasksContainer);
deleteTask(tasksContainer);

// Project
addProject();
selectProject();

