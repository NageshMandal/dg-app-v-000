class Bindu {

    constructor(options = {}) {
        this.options = options;
        this.bindus = [];
        this.isPlanting = false;
        this.loadAnnotations();

        // Event listeners
        document.getElementById('plant-bindu-button').addEventListener('click', this.enablePlanting.bind(this));
        document.getElementById('export-button').addEventListener('click', this.exportAnnotations.bind(this));
        document.addEventListener('click', this.handlePageClick.bind(this));
        document.addEventListener('contextmenu', this.handleRightClick.bind(this));
    }

    enablePlanting() {
        console.log("Please wait 2 seconds before placing a bindu.");
        setTimeout(() => {
            this.isPlanting = true;
            console.log("You can now plant a bindu by clicking on the page.");
        }, 1000);
    }

    handlePageClick(event) {
        if (this.isPlanting) {
            this.placeBindu(event.pageX, event.pageY);
            this.isPlanting = false; // Disable planting after one bindu is placed
        }
    }

    handleRightClick(event) {
        event.preventDefault(); // Prevent the default context menu

        const contextMenu = this.createContextMenu(event.pageX, event.pageY);
        document.body.appendChild(contextMenu);

        document.addEventListener('click', () => {
            if (contextMenu.parentElement) {
                contextMenu.parentElement.removeChild(contextMenu);
            }
        }, { once: true });
    }

    createContextMenu(x, y) {
        const menu = document.createElement('div');
        menu.classList.add('context-menu');
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;

        const menuItem = document.createElement('div');
        menuItem.classList.add('context-menu-item');
        menuItem.innerText = 'Add Bindu';
        menuItem.addEventListener('click', () => {
            this.placeBindu(x, y);
            menu.parentElement.removeChild(menu);
        });

        menu.appendChild(menuItem);
        return menu;
    }

    placeBindu(x, y) {
        const bindu = document.createElement('div');
        bindu.classList.add('bindu');
        bindu.style.left = `${x}px`;
        bindu.style.top = `${y}px`;

        if (this.options.binduColor) {
            bindu.style.backgroundColor = this.options.binduColor;
        }

        bindu.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showCommentBox(bindu);
        });

        document.body.appendChild(bindu);
        this.bindus.push({ x, y, comment: '' });
        this.saveAnnotations();
    }

    showCommentBox(bindu) {
        const existingCommentBox = document.querySelector('.comment-box');
        if (existingCommentBox) {
            document.body.removeChild(existingCommentBox);
        }

        const commentBox = document.createElement('div');
        commentBox.classList.add('comment-box');
        commentBox.style.left = `${bindu.style.left}`;
        commentBox.style.top = `${parseInt(bindu.style.top) + 15}px`;

        if (this.options.commentBoxBgColor) {
            commentBox.style.backgroundColor = this.options.commentBoxBgColor;
        }

        const textarea = document.createElement('textarea');
        textarea.value = bindu.comment || '';
        textarea.placeholder = 'Add your comment here...';

        const saveButton = document.createElement('button');
        saveButton.innerText = 'Save';
        saveButton.addEventListener('click', () => {
            this.saveComment(bindu, textarea.value);
            document.body.removeChild(commentBox);
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            this.deleteBindu(bindu);
            document.body.removeChild(commentBox);
        });

        commentBox.appendChild(textarea);
        commentBox.appendChild(saveButton);
        commentBox.appendChild(deleteButton);
        document.body.appendChild(commentBox);
        textarea.focus();
    }

    saveComment(bindu, comment) {
        const index = this.bindus.findIndex(b => b.x === parseInt(bindu.style.left) && b.y === parseInt(bindu.style.top));
        if (index !== -1) {
            this.bindus[index].comment = comment;
            bindu.comment = comment;
            this.saveAnnotations();
        }
    }

    deleteBindu(bindu) {
        const index = this.bindus.findIndex(b => b.x === parseInt(bindu.style.left) && b.y === parseInt(bindu.style.top));
        if (index !== -1) {
            this.bindus.splice(index, 1);
            document.body.removeChild(bindu);
            this.saveAnnotations();
        }
    }

    saveAnnotations() {
        localStorage.setItem('bindus', JSON.stringify(this.bindus));
    }

    loadAnnotations() {
        const savedBindus = JSON.parse(localStorage.getItem('bindus')) || [];
        savedBindus.forEach(binduData => {
            const bindu = document.createElement('div');
            bindu.classList.add('bindu');
            bindu.style.left = `${binduData.x}px`;
            bindu.style.top = `${binduData.y}px`;
            bindu.comment = binduData.comment;

            if (this.options.binduColor) {
                bindu.style.backgroundColor = this.options.binduColor;
            }

            bindu.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showCommentBox(bindu);
            });

            document.body.appendChild(bindu);
            this.bindus.push(binduData);
        });
    }

    exportAnnotations() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.bindus));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "annotations.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Bindu({
        binduColor: 'none',
        commentBoxBgColor: 'lightyellow'
    });
});
