// html ees color elementiig olj huvisagcid hadgalna
const color = document.querySelector(".color");

const text_field = document.getElementById("text_field");

// btn deer darah ued yu boloh talaarh function
btn.addEventListener("click", function () {
    //text-inputaas utgiig ni avah
    let text = text_field.value;
    if(colorChecker(text)) {
        document.body.style.backgroundColor = text;
    }else {
        alert("Please enter valid color!!!");
    }
    color.textContent = text;
});

const colorChecker = color => {
    const s = new Option().style;
    s.color = color;
    if(s.color !== '') {
        return true;
    }else {
        return false;
    }
}
