function toggleTask() {
    document.body.addEventListener("click", (e) => {
        const header = e.target.closest(".task-header");
        if (!header) return;

        const task = header.closest(".task");
        const details = task.querySelector(".task-details");

        if (details.style.display === "none" || !details.style.display) {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    });
}

export { toggleTask };