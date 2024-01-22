let dragged;

document.addEventListener("drag", function (event) {
    // store a reference to the dragged element
    dragged = event.target;
});

document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
});

document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();

    // if the element is a draggable div, swap the positions
    if (event.target.classList.contains("draggable")) {
        // swap background images
        const temp = dragged.style.backgroundImage;
        dragged.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = temp;
    }
});
