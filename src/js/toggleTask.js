function toggleTask(container) {
    container.addEventListener("click", (e) => {
        const header = e.target.closest(".task-header");
        if (!header) return;

        const task = header.parentElement;
        const details = task.querySelector(".task-details");

        // Toggle visibility
        if (details.style.display === "none" || !details.style.display) {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    });
}

export { toggleTask };