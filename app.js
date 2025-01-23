// app.js

// To-Do List Module
const TodoApp = (() => {
    // Private Variables
    const lists = [];
    let activeList = null;

    // DOM Elements
    const elements = {
        listsNav: document.getElementById("lists-nav"),
        todoList: document.getElementById("todo-list"),
        newListBtn: document.getElementById("new-list-btn"),
        newTaskBtn: document.getElementById("task-btn"),
        todayDate: document.getElementById("today-date"),
    };

    // Utility: Format today's date
    const formatDate = () => {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        return new Date().toLocaleDateString("en-US", options);
    };

    // Render Lists
    const renderLists = () => {
        elements.listsNav.innerHTML = ""; // Clear existing lists
        lists.forEach((list, index) => {
            const listItem = document.createElement("div");
            listItem.className = "list-item";
            listItem.innerHTML = `
                <span>${list.name}</span>
                <span class="list-count">${list.tasks.length}</span>
            `;
            listItem.addEventListener("click", () => setActiveList(index));
            elements.listsNav.appendChild(listItem);
        });
    };

    // Render Tasks
    const renderTasks = () => {
        if (!activeList) {
            elements.todoList.innerHTML = "<p>Select a list to view tasks</p>";
            return;
        }

        elements.todoList.innerHTML = ""; // Clear existing tasks
        activeList.tasks.forEach((task, index) => {
            const taskItem = document.createElement("div");
            taskItem.className = "todo-item";
            taskItem.innerHTML = `
                <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                <label for="task-${index}">${task.name}</label>
                <span class="time">${task.time}</span>
            `;
            taskItem.querySelector("input").addEventListener("change", () => toggleTaskCompletion(index));
            elements.todoList.appendChild(taskItem);
        });
    };

    // Set Active List
    const setActiveList = (index) => {
        activeList = lists[index];
        renderTasks();
    };

    // Toggle Task Completion
    const toggleTaskCompletion = (taskIndex) => {
        activeList.tasks[taskIndex].completed = !activeList.tasks[taskIndex].completed;
        renderTasks();
    };

    // Add New List
    const addNewList = () => {
        const listName = prompt("Enter list name:");
        if (listName) {
            lists.push({ name: listName, tasks: [] });
            renderLists();
        }
    };

    // Add New Task
    const addNewTask = () => {
        if (!activeList) {
            alert("Please select a list first.");
            return;
        }

        const taskName = prompt("Enter task name:");
        const taskTime = prompt("Enter task time (e.g., 09:00 - 10:00):");
        if (taskName && taskTime) {
            activeList.tasks.push({ name: taskName, time: taskTime, completed: false });
            renderTasks();
        }
    };

    // Initialize App
    const init = () => {
        elements.todayDate.textContent = formatDate();

        // Event Listeners
        elements.newListBtn.addEventListener("click", addNewList);
        elements.newTaskBtn.addEventListener("click", addNewTask);

        // Initial Render
        renderLists();
    };

    return { init };
})();

// Initialize the To-Do App
document.addEventListener("DOMContentLoaded", TodoApp.init);
