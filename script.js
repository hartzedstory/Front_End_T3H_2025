import studentList from "./src/entity/student_entity.js";

//LocalStorage
const storageData = (object) => {
    localStorage.setItem("studentList", JSON.stringify(object)); //-- Su dung stringify de convert array object --> string
}


//Render list to view
const displayData = (list) => {
    const tableView = document.getElementById("table")
    list.forEach((obj, index) => {
        const indexPath = document.createElement("tr");
        indexPath.innerHTML = `
            <td>${index + 1}</td>
            <td>${obj.name}</td>
            <td>${obj.gender}</td>
            <td>${obj.mathScore}</td>
            <td>${obj.englishScore}</td>
            <td>${obj.literatureScore}</td>
            <td>${((obj.mathScore + obj.englishScore + obj.literatureScore) / 3)}</td>
            <td>
                <button class="btn btn-success btn-sm me-1">Update</button>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>`;
        tableView.appendChild(indexPath);
    })
}


storageData(studentList);

//Check key: Su dung IIFE
(function(){
    if (localStorage.getItem("studentList").length == 0) {
        console.log("Data not found");
    } else {
        displayData(
            JSON.parse(localStorage.getItem("studentList")) //JSON.parse: Su dung de parse nguoc string --> model
        );
    }

})();

//Add student


const clearInput = () => {
        document.getElementById("student_name").value = "",
        (document.querySelector('input[name="gender"]:checked')).checked = false ,
        document.getElementById("math_score").value = "",
        document.getElementById("english_score").value = "",
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

//PRAGMA MARK: Add listeners
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("create_student");
    btn.addEventListener("click", addStudent);
});