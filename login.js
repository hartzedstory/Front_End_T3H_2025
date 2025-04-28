import users from "./src/entity/users.js";

const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        alert("User not found")
    } else {
        window.location.href = "./post.html";
    }
}

document.getElementById("doLogin")?.addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    login(email, password);
});

// document.getElementById("registerBtn")?.addEventListener("click", () => {
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById("registerEmail").value;
//     const password = document.getElementById("registerPassword").value;
//     register(firstName, lastName, email, password);
// });