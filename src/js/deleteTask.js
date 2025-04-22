import { updateData } from './dataStore.js';

function deleteTask() {
    document.body.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete-btn');
        if (!deleteBtn) return;

        const task = deleteBtn.closest(".task");
        const projectId = task.closest('.main-content').getAttribute('data-project');
        const title = task.querySelector(".task-header h3").textContent.trim();

        // 1. Remove from DOM
        task.remove();

        // 2. Remove from dataStore
        updateData((data) => {
            data.projects[projectId].tasks = data.projects[projectId].tasks.filter(
                (task) => task.title !== title
            );
        });
    });
}

export { deleteTask };