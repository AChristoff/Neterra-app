function dragAndDrop() {

    function sortable(draggableList) {
        let dragEl;

        [].slice.call(draggableList.children).forEach(function (itemEl) {
            itemEl.draggable = true;
        });

        draggableList.addEventListener('dragstart', function (evt) {
            dragEl = evt.target;

            evt.dataTransfer.effectAllowed = 'move';
            evt.dataTransfer.setData('Text', dragEl.textContent);

            draggableList.addEventListener('dragover', _onDragOver, false);
            draggableList.addEventListener('dragend', _onDragEnd, false);

            setTimeout(() => dragEl.classList.add('ghost'), 0)

        }, false);

        function _onDragOver(evt) {
            
            evt.dataTransfer.dropEffect = 'move';

            let target = evt.target;
            if (target && target !== dragEl && target.nodeName === 'LI') {

                draggableList.insertBefore(dragEl, target.nextSibling || target.previousSibling || target);
            }
        }

        function _onDragEnd() {

            dragEl.classList.remove('ghost');
            draggableList.removeEventListener('dragover', _onDragOver, false);
            draggableList.removeEventListener('dragend', _onDragEnd, false);
        }
    }

    sortable(document.getElementById('draggableList'));
}
