# TaskCanvas

**TaskCanvas** is a clean, modular to-do list app built with vanilla JavaScript, CSS, and HTML. It supports multiple projects, editable tasks, and uses localStorage to persist your data across sessions.

---

## Features

- Create and manage multiple projects
- Add, edit, and delete tasks
- Toggle task detail views (expand/collapse)
- Each project has its own dedicated task list and UI
- Automatic data persistence via `localStorage`
- Modular ES Module structure for scalable code
- Elegant and responsive UI built with CSS

---

## Data Model

Data is saved in `localStorage` using the following structure:

```js
{
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
    },
    personal: { name: "Personal", tasks: [...] },
    work: { name: "Work", tasks: [...] }
  },
  activeProject: "default"
}
```