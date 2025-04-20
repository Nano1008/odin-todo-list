function deleteTask() {
    document.body.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete-btn');
        if (!deleteBtn) return;

        const task = deleteBtn.closest('.task');
        task.remove();
    });
}

export { deleteTask };