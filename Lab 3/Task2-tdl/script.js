document.getElementById('addTask').addEventListener('click', addTask);

function addTask() {
  console.log('Button clicked');  
  const taskInput = document.getElementById('newTask');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleDone);

  const text = document.createElement('span');
  text.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerHTML = "<i class='bx bx-trash'></i>";

  deleteButton.addEventListener('click', function() {
    li.remove(); 
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(deleteButton);

  taskList.appendChild(li);
  
  taskInput.value = '';
}

function toggleDone(event) {
  const taskItem = event.target.parentElement;
  taskItem.classList.toggle('done');
}








