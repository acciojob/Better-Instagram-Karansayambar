 let draggedElement;
    document.addEventListener("dragstart", function (e) {
        draggedElement = e.target;
        e.dataTransfer.setDragImage(document.createElement("div"), 0, 0);
    });

    document.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    document.addEventListener("drop", function (e) {
        e.preventDefault();

        const dropTarget = e.target.closest(".image");

        if (dropTarget && dropTarget !== draggedElement) {
            const temp = draggedElement.innerHTML;
			const background = draggedElement.style.backgroundImage;
            draggedElement.innerHTML = dropTarget.innerHTML;
            dropTarget.innerHTML = temp;
			draggedElement.style.backgroundImage = dropTarget.style.backgroundImage;
			dropTarget.style.backgroundImage = background;
        }
    });