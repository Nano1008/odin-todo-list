import { updateData } from "./dataStore";

function editTask() {
    document.body.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.edit-btn');
        if (!editBtn) return;

        const task = editBtn.closest('.task');
        const descriptionInput = task.querySelector('.description input');
        const notesInput = task.querySelector('.notes input');

        const isEditing = editBtn.textContent === 'Save';

        if (isEditing) {
            descriptionInput.disabled = true;
            notesInput.disabled = true;
            editBtn.textContent = "Edit";
        } else {
            descriptionInput.disabled = false;
            notesInput.disabled = false;
            descriptionInput.focus();
            editBtn.textContent = "Save";
        }

        // Save changes to dataStore
        const title = task.querySelector('.task-header h3').textContent.trim();
        const description = descriptionInput.value.trim();
        const notes = notesInput.value.trim();
        const projectId = task.closest('.main-content').getAttribute('data-project');
        updateData((data) => {
            const project = data.projects[projectId];
            const taskToEdit = project.tasks.find(t => t.title === title);
            if (taskToEdit) {
                taskToEdit.description = description;
                taskToEdit.notes = notes;
            }
        });
    }
    );
}

export { editTask };