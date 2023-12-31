let draggedElement = null;

    function allowDrop(event) {
      event.preventDefault();
      const draggedOverElement = document.elementFromPoint(event.clientX, event.clientY);
      if (draggedOverElement.classList.contains('image')) {
        draggedOverElement.classList.add('dragging');
      }
    }

    function dragStart(event) {
      draggedElement = event.target;
      event.dataTransfer.setData('text/html', draggedElement.innerHTML);
    }

    function dragEnd() {
      const draggingElements = document.querySelectorAll('.dragging');
      draggingElements.forEach(element => element.classList.remove('dragging'));
    }

    function drop(event) {
      event.preventDefault();

      const draggedOverElement = document.elementFromPoint(event.clientX, event.clientY);

      if (draggedOverElement.classList.contains('image')) {
        draggedElement.innerHTML = draggedOverElement.innerHTML;
        draggedOverElement.innerHTML = event.dataTransfer.getData('text/html');
      }

      dragEnd();
    }

    const images = document.querySelectorAll('.image');
    images.forEach(image => {
      image.addEventListener('dragstart', dragStart);
      image.addEventListener('dragend', dragEnd);
    });

    document.addEventListener('dragover', allowDrop);
    document.addEventListener('drop', drop);