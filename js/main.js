let $todoInput = document.querySelector('.todoInput');
let $todoList = document.querySelector('.todoList');
let $alertInfo = document.querySelector('.alertInfo');
let $addBtn = document.querySelector('.addBtn');


class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";


        let iTimes = document.createElement('i');
        iTimes.classList.add('fas', 'fa-times');

        let iCheck = document.createElement('i');
        iCheck.classList.add('fas', 'fa-check');

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let completeButton = document.createElement('button');
        completeButton.classList.add('complete');

        let editButton = document.createElement('button');
        editButton.innerHTML = "Edit";
        editButton.classList.add('edit');

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');

        $todoList.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(completeButton);
        completeButton.appendChild(iCheck);
        itemBox.appendChild(editButton);
        itemBox.appendChild(deleteButton);
        deleteButton.appendChild(iTimes);

        completeButton.addEventListener('click', () => this.complete(input));
        editButton.addEventListener('click', () => this.edit(input));
        deleteButton.addEventListener('click', () => this.delete(itemBox));
    }

    complete(input) {
        input.classList.toggle('completed');
    }

    edit(input) {
        input.disabled = !input.disabled;
        input.focus();
    }

    delete(itemBox) {
        $todoList.removeChild(itemBox);
    }
}


function check(){
    if($todoInput.value != ''){
        new item($todoInput.value);
        $todoInput.value = '';
        $alertInfo.innerText = "";
    }
    else{
        $alertInfo.innerText = 'Wpisz treść zadania';
    }
};

$addBtn.addEventListener('click', check);

window.addEventListener('keydown', (e) => {
    if(e.code == 'Enter'){
        check();
    }
});
