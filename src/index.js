import "./styles.css";
import { addTask } from "./js/addTask";
import { toggleTask } from "./js/toggleTask";
import { editTask } from "./js/editTask";
import { deleteTask } from "./js/deleteTask";
import { addProject, selectProject } from "./js/project";
import { appContainer, projectList, createProjectElement, createMainContent, createTaskElement } from "./js/dom";
import { getData } from "./js/dataStore";

// Render the app by default
const data = getData();
const active = data.activeProject;
Object.entries(data.projects).forEach(([id, project]) => {
    const projectElem = createProjectElement(project.name);
    projectList.appendChild(projectElem);

    const content = createMainContent(project.name);
    const taskContainer = content.querySelector(".tasks-container");

    project.tasks.forEach((task) => {
        const taskElem = createTaskElement(task.title, task.due, id);
        taskContainer.appendChild(taskElem);
    });

    content.style.display = id === active ? "block" : "none";
    if (id === active) projectElem.classList.add("active");

    appContainer.appendChild(content);
});

// Toggle Task
toggleTask();

// Edit Task
editTask();

// Delete Task
deleteTask();

// Add Task
addTask();

// Add Project
addProject();

// Select Project
selectProject();

