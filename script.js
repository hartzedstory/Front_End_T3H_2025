// Đồng bộ và bất đồng bộ

function test(a) {
    return a();
}
test(() => {
    console.log("test callback function");
})

//setTimeout --> set thoi gian cho
setTimeout(() => {
    console.log("test setTimeout function");
}, 1000)

//setInterval -->  set thoi gian lap lai
// let i = 0;
// setInterval(() => {
//     console.log("test setInterval function", i++);
// }, 1000)


// Promise
// const a = true;
// const demoPromise = new Promise((resolve, reject) => {
//     if (a) {
//         resolve("Du lieu duoc fetch thanh cong"); // Dung resolve de hung du lieu success
//     } else {
//         reject("Da co loi xay ra"); // Dung reject de hung du lieu fail
//     }
// })
//
// demoPromise.then(value => {
//     console.log(value)
// }) // Dung then de lay du lieu success
//
// demoPromise.catch(value => {
//     console.log(value)
// }) // dung catch de lay du lieu fail
//
// demoPromise.finally(() => {
//     console.log("test finally");
// })

//Thực hanh fetch API
// let lstWeather;
// /*Du lieu tra ve duoc tra o dang promise luon*/
// const data = fetch("https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
//     .then(res => res.json())
//     .then(data => {
//         data.list.map(weatherItem => {
//             return `
//             <div>
//                 <div>
//                     ${weatherItem.name}
//                 </div>
//             </div>`
//         });
//     })
//     .catch(err => console.log(err));

//async. await
let city = ""
city = prompt("Enter city name")
let lstWeather;
async function getAPIData() {
    try {
        const res = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=09a71427c59d38d6a34f89b47d75975c&units=metric");
        const data = await res.json();

        const container = document.getElementById("weather-container");

        data.list.slice(0, 24).forEach(item => {
            const time = item.dt_txt;
            const temp = item.main.temp;
            const description = item.weather[0].description;
            const icon = item.weather[0].icon;

            const card = document.createElement("div");
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.margin = "10px";
            card.style.borderRadius = "8px";
            card.style.maxWidth = "250px";

            card.innerHTML = `
            <h3>${time}</h3>
            <p>Nhiệt độ: ${temp}°C</p>
            <p>Thời tiết: ${description}</p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
          `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Lỗi khi fetch API:", error);
    }
}

getAPIData();