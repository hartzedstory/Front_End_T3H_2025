import todoList from "./src/entity/todo.js";

// Global data
let taskCache = null;
let size = 10;
let page = 1;
let currentTab = "All";
let dataSource = [];

// LocalStorage Helpers
const storageData = (object) => {
    localStorage.setItem("taskList", JSON.stringify(object));
};

const loadData = () => {
    const data = localStorage.getItem("taskList");
    if (data) {
        return JSON.parse(data);
    }
    return [];
};

const saveAndReload = () => {
    storageData(dataSource);
    reloadData();
    displayData(dataSource);
};

// Render tasks to view
const displayData = (list) => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let filteredList = [];

    if (currentTab === "All") {
        filteredList = list;
    } else if (currentTab === "Active") {
        filteredList = list.filter(task => task.isDone === false);
    } else if (currentTab === "Completed") {
        filteredList = list.filter(task => task.isDone === true);
    }

    filteredList.forEach((task) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <div class="d-flex align-items-center">
                <input type="checkbox" class="form-check-input me-2" data-id="${task.id}" ${task.isDone ? "checked" : ""}>
                <span style="${task.isDone ? 'text-decoration: line-through;' : ''}">${task.taskName}</span>
            </div>
            ${task.isDone ? `
            <button class="btn btn-link text-danger p-0 removeBtn" data-id="${task.id}">
                <i class="bi bi-trash"></i>
            </button>
            ` : ``}
        `;

        taskList.appendChild(li);
    });

    bindCheckboxEvents();
    bindRemoveButtons();

    // Show/Hide Delete All button
    const deleteAllBtn = document.getElementById("deleteAll");
    if (currentTab === "Completed" && filteredList.length > 0) {
        deleteAllBtn.classList.remove("d-none");
    } else {
        deleteAllBtn.classList.add("d-none");
    }
};




const bindCheckboxEvents = () => {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.addEventListener("change", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            toggleTaskDone(id);
        });
    });
};

const bindRemoveButtons = () => {
    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.getAttribute("data-id"));
            removeTask(id);
        });
    });
};

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }
    const newTask = {
        id: Date.now(),
        taskName,
        isDone: false
    };
    dataSource.unshift(newTask);
    taskInput.value = "";
    saveAndReload();
};

const toggleTaskDone = (id) => {
    const task = dataSource.find(t => t.id === id);
    if (task) {
        task.isDone = !task.isDone;
        saveAndReload();
    }
};

const removeTask = (id) => {
    dataSource = dataSource.filter(t => t.id !== id);
    saveAndReload();
};

const removeCompletedTasks = () => {
    if (confirm("Delete all completed tasks?")) {
        dataSource = dataSource.filter(t => !t.isDone);
        saveAndReload();
    }
};

const switchTab = (tabName) => {
    currentTab = tabName;
    reloadData();
    displayData(dataSource);
};

const reloadData = () => {
    const tableView = document.getElementById("taskList");
    tableView.innerHTML = "";
};

// Event Listeners

document.addEventListener("DOMContentLoaded", () => {
    dataSource = loadData();
    if (dataSource.length === 0) {
        dataSource = todoList;
        storageData(dataSource);
    }
    displayData(dataSource);

    document.getElementById("addTask").addEventListener("click", addTask);
    document.getElementById("deleteAll").addEventListener("click", removeCompletedTasks);

    document.getElementById("tab-all").addEventListener("click", () => switchTab("All"));
    document.getElementById("tab-active").addEventListener("click", () => switchTab("Active"));
    document.getElementById("tab-completed").addEventListener("click", () => switchTab("Completed"));
});

document.getElementById("goToLogin").addEventListener("click", () => {
    window.location.href = "welcome.html";
});

