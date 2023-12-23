hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// html ees btn elementiig olj btn huvisagcid hadgalna
const btn = document.getElementById("btn");

// html ees color elementiig olj huvisagcid hadgalna
const color = document.querySelector(".color");

// btn deer darah ued yu boloh talaarh function
btn.addEventListener("click", function () {

    // random function uusgedeg function ii tuslamjtaigaar random ongo uusgen huvisagcid hadgalah.
    let randomColor = ['#']
    for(let i = 1; i < 7; i++) {
        randomColor.push(hexColor[getRandomNumber()]);
    }
    randomColor = randomColor.join("");
    console.log(randomColor);


    // random ongoo body elementd uguh
    document.body.style.backgroundColor = randomColor;
    // random ungiig hereglegcid haruulah
    color.textContent = randomColor;
});

// Random too uusgedeg function
function getRandomNumber() {
    return Math.floor(Math.random() * 17);
}