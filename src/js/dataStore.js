import { loadData, saveData } from "./storage.js";

const defaultData = {
    projects: {
        default: {
            name: "Default",
            tasks: [
                {
                    title: "Example Task",
                    due: "2025-04-18",
                    description: "",
                    notes: ""
                }
            ]
        }
    },
    activeProject: "default"
};

let data = loadData() || defaultData;

function getData() {
    return data;
}

function updateData(updaterFn) {
    updaterFn(data);
    saveData(data);
}

export { getData, updateData };