import { createProjectElement } from "./domFactory.js";
import { addProjectBtn, projectList } from "./dom.js";

function addProject() {
    addProjectBtn.addEventListener("click", () => {
        const name = prompt("Enter a new project name:");
        if (!name) return;

        const newProject = createProjectElement(name);
        projectList.appendChild(newProject);
    });
}

function selectProject() {
    projectList.addEventListener("click", (e) => {
        const selectedProject = e.target.closest(".project");
        if (!selectedProject) return;

        // Remove 'active' from all projects
        projectList.querySelectorAll(".project").forEach((proj) => {
            proj.classList.remove("active");
        });

        selectedProject.classList.add("active");
    });
}

export { addProject, selectProject };
