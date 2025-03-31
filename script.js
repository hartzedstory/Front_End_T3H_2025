const randomArray = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `NGuyễn văn A ${index}`,
    age: Math.floor(Math.random() * (50 - 18 + 1)) + 18, // Random tuổi từ 18 đến 50
    score: Math.floor(Math.random() * 10) + 1,
}));

console.log(randomArray);

// in ra màn hình các bạn có điểm chẵn
// Su dung arrow function
const evenScoreStudent = () => {
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i].score % 2 === 0) {
            console.log("===================");
            console.log(randomArray[i]);
            console.log("===================");
        }
    }
}
evenScoreStudent();
console.log("*********************************************\n*********************************************\n");
// in ra màn hình các bạn có độ tuổi từ 22 -> 30 và có điểm trên 8
const ageInRangeWithDesiredScore = () => {
    for (let i = 0; i < randomArray.length; i++) {
        if ((22 < randomArray[i].age < 30) && randomArray[i].score > 8) {
            console.log("===================");
            console.log(randomArray[i]);
            console.log("===================");
        }
    }
}
ageInRangeWithDesiredScore();
