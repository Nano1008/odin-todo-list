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
    }
    );
}

export { editTask };