// Tap hop cac node Element chu khong phai tap hop mang

// const getElement = document.getElementsByTagName("div")[0];
// const getElementById = document.getElementById("testing-dom")
// console.log(getElement, getElement.innerText);
//
// getElementById.innerText= "Xin chao lan 2";
// getElementById.innerHTML = `<li> </li>`;



const addNewItem = () => {
    const input = document.getElementById('get_new_item');
    if (input.value !== "") {
        const newLi = document.createElement('li');
        newLi.textContent = input.value;
        newLi.className = 'favorite-list-item';
        document.getElementById('favorite-list').appendChild(newLi);
        input.value = ""; // handle cache
    }
}

const changeColor = () => {
    const items = document.querySelectorAll('.favorite-list-item')
    items.forEach(item => {
        item.textContent = "I love this thing";
        item.style.color = "red";
    })
}