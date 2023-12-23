
// html ees btn elementiig olj btn huvisagcid hadgalna
const btn = document.getElementById("btn");

// html ees color elementiig olj huvisagcid hadgalna
const color = document.querySelector(".color");

const text_field = document.getElementById("text_field");

// btn deer darah ued yu boloh talaarh function
btn.addEventListener("click", function () {
    //text-inputaas utgiig ni avah
    //let text = text_field.value;
    
    // random function uusgedeg function ii tuslamjtaigaar random ongo uusgen huvisagcid hadgalah.
    const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()} )`
    
    // random ongoo body elementd uguh
    document.body.style.backgroundColor = randomColor;
    // random ungiig hereglegcid haruulah
    color.textContent = randomColor;

    //console.log(text);
});

// Random too uusgedeg function
function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}