// Fungsi untuk menambahkan task
document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTaskToList(taskText);
        taskInput.value = ''; // Reset input setelah task ditambahkan
    }
});

// Fungsi untuk menambahkan task ke dalam ul
function addTaskToList(taskText) {
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="taskText">${taskText}</span>
        <div class="taskButtons">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </div>
    `;

    // Tambahkan event listener untuk tombol edit
    listItem.querySelector('.editBtn').addEventListener('click', function () {
        editTask(listItem);
    });

    // Tambahkan event listener untuk tombol delete
    listItem.querySelector('.deleteBtn').addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
}

// Fungsi untuk mengedit task
function editTask(listItem) {
    const taskTextElement = listItem.querySelector('.taskText');
    const originalText = taskTextElement.textContent;
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = originalText;

    taskTextElement.replaceWith(inputField);

    const editBtn = listItem.querySelector('.editBtn');
    editBtn.textContent = 'Save';
    editBtn.removeEventListener('click', editTask);

    editBtn.addEventListener('click', function () {
        saveTask(listItem, inputField);
    });
}

// Fungsi untuk menyimpan task yang telah diedit
function saveTask(listItem, inputField) {
    const taskText = inputField.value.trim();

    if (taskText !== '') {
        const newTaskTextElement = document.createElement('span');
        newTaskTextElement.className = 'taskText';
        newTaskTextElement.textContent = taskText;

        inputField.replaceWith(newTaskTextElement);

        const editBtn = listItem.querySelector('.editBtn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            editTask(listItem);
        });
    }
}