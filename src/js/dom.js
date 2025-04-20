const addProjectBtn = document.querySelector(".add-project-btn button");
const projectList = document.querySelector(".project-list");
const appContainer = document.querySelector(".app-container");

function createTaskElement(title, dueDate) {
    const task = document.createElement('div');
    task.classList.add('task');

    task.innerHTML = `
    <div class="task-header">
      <h3>${title}</h3>
      <p class="due-date">${dueDate}</p>
    </div>
    <div class="task-details" style="display: none;">
      <div class="description">
        <label>DESCRIPTION</label>
        <input type="text" disabled>
      </div>
      <div class="notes">
        <label>NOTES</label>
        <input type="text" disabled>
      </div>
      <div class="task-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
  `;

    return task;
}

function createTaskForm(onSubmit) {
    const taskForm = document.createElement('div');
    taskForm.classList.add('task-form');

    taskForm.innerHTML = `
    <form id="task-form">
      <label for="task-title">Task Title</label>
      <input type="text" id="task-title" required>
      <label for="due-date">Due Date</label>
      <input type="date" id="due-date" required>
      <button type="submit">Add Task</button>
    </form>
  `;

    const form = taskForm.querySelector('#task-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = form['task-title'].value;
        const dueDate = form['due-date'].value;
        onSubmit(title, dueDate);
        taskForm.remove();
    });

    return taskForm;
}

function createProjectElement(name) {
    const project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("data-project", name.toLowerCase());

    project.innerHTML = `<h3>${name}</h3>`;
    return project;
}

function createMainContent(projectName) {
    const content = document.createElement("div");
    content.classList.add("main-content");
    content.setAttribute("data-project", projectName.toLowerCase());

    content.innerHTML = `
    <div class="main-header">
      <h1>${projectName}</h1>
      <button class="add-task-btn">New Task</button>
    </div>
    <div class="tasks-container"></div>
  `;

    return content;
}

export { addProjectBtn, projectList, appContainer, createTaskElement, createTaskForm, createProjectElement, createMainContent };