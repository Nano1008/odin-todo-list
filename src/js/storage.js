const STORAGE_KEY = "taskCanvasData";

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
}

function loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
}

export { saveData, loadData };

