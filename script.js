let draggedElement = null;

    document.addEventListener('dragstart', function (event) {
      draggedElement = event.target;
      event.dataTransfer.setData('text/html', draggedElement.innerHTML);
    });

    document.addEventListener('dragover', function (event) {
      event.preventDefault();
    });

    document.addEventListener('drop', function (event) {
      event.preventDefault();
      if (event.target.classList.contains('image')) {
        const droppedElement = event.target;
        const tempHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = droppedElement.innerHTML;
        droppedElement.innerHTML = tempHTML;

        // Swap background images
        const tempImage = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = droppedElement.style.backgroundImage;
        droppedElement.style.backgroundImage = tempImage;
      }
    });