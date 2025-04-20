import { addProjectBtn, projectList, appContainer, createProjectElement, createMainContent } from "./dom.js";

function addProject() {
    addProjectBtn.addEventListener("click", () => {
        const name = prompt("Enter a new project name:");
        if (!name) return;

        // 1. Create sidebar project
        const newProject = createProjectElement(name);
        projectList.querySelectorAll(".project").forEach((proj) =>
            proj.classList.remove("active")
        );
        newProject.classList.add("active");
        projectList.appendChild(newProject);

        // 2. Create main-content
        const content = createMainContent(name);

        // 3. Hide all main-content sections
        document.querySelectorAll(".main-content").forEach((section) => {
            section.style.display = "none";
        });

        // 4. Show new one
        content.style.display = "block";
        appContainer.appendChild(content);
    });
}

function selectProject() {
    projectList.addEventListener("click", (e) => {
        const selectedProject = e.target.closest(".project");
        if (!selectedProject) return;

        const projectName = selectedProject.getAttribute("data-project");

        // Set active style
        projectList.querySelectorAll(".project").forEach((proj) => {
            proj.classList.remove("active");
        });
        selectedProject.classList.add("active");

        const mainContents = document.querySelectorAll(".main-content");

        // Toggle main-content views
        mainContents.forEach((content) => {
            content.style.display = "none";
            if (content.getAttribute("data-project") === projectName) {
                content.style.display = "block";
            }
        });
    });
}

export { addProject, selectProject };
