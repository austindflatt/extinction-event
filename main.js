const dinosaur = document.querySelector("#row");
const allDinosaur = document.querySelector("#row img");
const line = document.querySelectorAll("ol li");
const button = document.querySelector("#destroy-all");

dinosaur.addEventListener('click', function(event) {
    console.log('dinosaur was collapsed');
    const picture = event.target;
    picture.style.width = "0";
})

for (const list of line) {
    const element = list;
    element.addEventListener('click', () => {
        element.style.textDecoration = "line-through"
    })
}

button.addEventListener('click', () => {
    line.forEach(element => {
        element.style.textDecoration = "line-through";
    })
    allDinosaur.forEach(element => {
        element.style.width = "0";
    })
})