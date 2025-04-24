import studentList from "./src/entity/student_entity.js";
//Global data
let studentCache = null;
let size = 10
let page = 1
let pagi = size;
let dataSource
let maxPageAllow
//LocalStorage
const storageData = (object) => {
    localStorage.setItem("studentList", JSON.stringify(object)); //-- Su dung stringify de convert array object --> string
}


//Render list to view
const displayData = (list) => {
    const tableView = document.getElementById("table")
    const start = (page - 1) * size;
    const end = start + size;
    const pageArray = list.slice(start, end)

    pageArray.forEach((obj, index) => {
        const indexPath = document.createElement("tr");
        indexPath.innerHTML = `
            <td>${obj.id}</td>
            <td>${obj.studentName}</td>
            <td>${obj.gender}</td>
            <td>${obj.mathScore}</td>
            <td>${obj.englishScore}</td>
            <td>${obj.literatureScore}</td>
            <td>${((obj.mathScore + obj.englishScore + obj.literatureScore) / 3)}</td>
            <td>
                <button class="updateBtn btn btn-success btn-sm me-1" data-id="${index}">Update</button>
                <button class="removeBtn btn btn-danger btn-sm" data-id="${index}">Delete</button>
            </td>`;
        tableView.appendChild(indexPath);

        //TODO: Change appendChild --> innerHTML +=
    })
}


storageData(studentList);

//Check key: Su dung IIFE
(function(){
    if (localStorage.getItem("studentList").length == 0) {
        console.log("Data not found");
    } else {
        dataSource = JSON.parse(localStorage.getItem("studentList")) //JSON.parse: Su dung de parse nguoc string --> model
        maxPageAllow = dataSource.length / size
        displayData(dataSource);

        //TODO: Create paging render field
    }

})();

//Add student

const addStudent = () => {
    if (localStorage.getItem("studentList").length == 0) {
        console.log("Data not found");
    } else {
        var data = dataSource
        if (validateInput()) {
            data.unshift(
                {
                    id: data.length,
                    name: document.getElementById("student_name").value,
                    gender: document.querySelector('input[name="gender"]:checked').value,
                    mathScore: Number(document.getElementById("math_score").value),
                    englishScore: Number(document.getElementById("english_score").value),
                    literatureScore: Number(document.getElementById("literature_score").value)
                }
            );

            //Add xong, clear
            clearInput();
            reloadData()
            showAlert()
            displayData(data);
        }
    }
}

const clearInput = () => {
        document.getElementById("student_name").value = "";
        (document.querySelector('input[name="gender"]:checked')).checked = false;
        document.getElementById("math_score").value = "";
        document.getElementById("english_score").value = "";
        document.getElementById("literature_score").value = "";
}

const validateInput = () => {
    const name = document.querySelector("#student_name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const math = document.querySelector("#math_score").value.trim();
    const english = document.querySelector("#english_score").value.trim();
    const literature = document.querySelector("#literature_score").value.trim();
    if (name === "") {
        alert("Please enter a name!");
        document.querySelector("#student_name").focus();
        return false
    }
    if (gender === null) {
        alert("Please select a gender!");
        return false
    }
    if (math === "") {
        alert("Please enter a math score!");
        document.querySelector("#math_score").focus();
        return false
    }
    if (english === "") {
        alert("Please enter a english score!");
        document.querySelector("#english_score").focus();
        return false
    }
    if (literature === "") {
        alert("Please enter a literature score!");
        document.querySelector("#literature_score").focus();
        return false
    }

    if (math < 0 || math > 10) {
        alert("Please enter valid math score in range 0 - 10");
        document.querySelector("#math_score").focus();
        return false
    }
    if (english < 0 || english > 10) {
        alert("Please enter valid english score in range 0 - 10");
        document.querySelector("#english_score").focus();
        return false
    }
    if (literature < 0 || literature > 10) {
        alert("Please enter valid literature score in range 0 - 10");
        document.querySelector("#literature_score").focus();
        return false
    }

    return true;
}
const showAlert = () => {
    const alert = document.getElementById("alert");
    alert.classList.remove("d-none");
    alert.classList.add("show");
    setTimeout(() => {
        const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
        bsAlert.close();
    }, 3000);
};

const selectStudent = (id) => {
        var data = dataSource
        const item = data.find(element => element.id === id);
        if (item) {
            //Update data nguoc len view
            document.getElementById("student_name").value = item.studentName;
            document.querySelectorAll('input[name="gender"]').forEach(input => {
                input.checked = input.value === item.gender;
            });
            document.getElementById("math_score").value = item.mathScore;
            document.getElementById("english_score").value = item.englishScore;
            document.getElementById("literature_score").value = item.literatureScore;
            document.getElementById("literature_score").value = item.literatureScore;

            studentCache = item;
        } else {
            alert("Khong the truy van thong tin sinh vien " + id);
        }
}

const updateStudent = () => {
        var data = dataSource
        const obj = data.find(element => element.id == studentCache.id);
        if (obj !== null) {
            //TODO: luu element document global, luu data parse global
            console.log("Co data");
            obj.studentName = document.getElementById("student_name").value;
            obj.gender = document.querySelector('input[name="gender"]:checked').value;
            obj.mathScore = Number(document.getElementById("math_score").value);
            obj.englishScore = Number(document.getElementById("english_score").value);
            obj.literatureScore = Number(document.getElementById("literature_score").value);

            clearInput();
            reloadData()
            displayData(data);
        } else {
            alert("Loi truy van")
        }
}

const removeStudent = (id) => {
        if (confirm("Xac nhan xoa?")) {
            var data = dataSource
            const obj = data.find(element => element.id === id);
            if (obj !== null) {
                data.splice(id,1);
            }
            reloadData()
            displayData(data);
        }
}

const searchStudent = (name) => {
    var data = dataSource;
    reloadData()
    if (name.length > 0) {
        const result = data.filter(element => element.studentName.toLowerCase().includes(name.toLowerCase()));
        displayData(result);
    } else {
        displayData(data);
    }
}

const reloadData = () => {
    const tableView = document.getElementById("table")
    while (tableView.firstChild) {
        tableView.removeChild(tableView.firstChild);
    }
}


//PRAGMA MARK: Add listeners
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("create_student");
    btn.addEventListener("click", addStudent);
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("update_student");
    btn.addEventListener("click", updateStudent);
});

document.addEventListener("DOMContentLoaded", () => {
    const updateButtons = document.querySelectorAll(".updateBtn");
    updateButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            selectStudent(parseInt(id));
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const updateButtons = document.querySelectorAll(".removeBtn");
    updateButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            removeStudent(id);
        });
    });
});

const input = document.getElementById("searchField");
input.addEventListener('input', function () {
    const name = input.value;
    searchStudent(name)
});

//Paging
document.getElementById('prevPage').addEventListener('click', () => {
    let current = parseInt(currentPage.textContent);
    if (current > 1) {
        const currentPage = document.getElementById("currentPage");
        const currentLink = currentPage.querySelector("a");
        let current = parseInt(currentLink.textContent);
        currentLink.textContent = current - 1;
        page = currentPage.textContent
        reloadData()
        displayData(dataSource)
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const currentPage = document.getElementById("currentPage");
    const currentLink = currentPage.querySelector("a");
    let current = parseInt(currentLink.textContent);
    if (current <= maxPageAllow) {
        currentLink.textContent = current + 1;
        page = currentPage.textContent
        reloadData()
        displayData(dataSource)
    }
});