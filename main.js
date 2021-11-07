const dinosaur = document.querySelector("#row");
const button = document.querySelector("#destroy-all");

dinosaur.addEventListener('click', function(event) {
    console.log('dinosaur was collapsed');
    const picture = event.target;
    picture.style.width = "0";
})

button.addEventListener('click', function () {
    const ordered = document.querySelectorAll('ol li');
    for(let i = 0; i < ordered.length; i++) {
        const item = ordered[i];
        item.style.textDecoration = 'line-through';
    }
    const unordered = document.querySelectorAll('ul li');
    for(let i = 0; i < unordered.length; i++) {
        const item = unordered[i];
        item.style.opacity = 0;
    }
    const dinos = document.querySelectorAll('img');
    for(let i = 0; i < dinos.length; i++) {
        const images = dinos[i];
        images.style.width = 0;
    }
});