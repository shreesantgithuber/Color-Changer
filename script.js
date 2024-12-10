
const allContainers = document.querySelectorAll('.color');

Array.from(allContainers).map((element, index) => {
    element.addEventListener('click', (e) => {
        if (e.target.id === "blue") {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "green") {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "purple") {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "yellow") {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "lightgreen") {
            document.body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "lightblue") {
            document.body.style.backgroundColor = e.target.id;
        }
    })
})

