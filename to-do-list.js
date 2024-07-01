
    document.getElementById('add-task').addEventListener('click', addTask);
    document.getElementById('clear-completed').addEventListener('click', clearCompletedTasks);

    function addTask() {
      const taskInput = document.getElementById('new-task');
      const taskText = taskInput.value.trim();


      if (taskText) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskCompletion);
        
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×';
        deleteButton.addEventListener('click', deleteTask);
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
      }
    }

    function toggleTaskCompletion(event) {
      const checkbox = event.target;
      const li = checkbox.parentElement;
      li.classList.toggle('completed', checkbox.checked);
    }

    function deleteTask(event) {
      const deleteButton = event.target;
      const li = deleteButton.parentElement;
      li.remove();
    }

    function clearCompletedTasks() {
      const taskList = document.getElementById('task-list');
      const completedTasks = taskList.querySelectorAll('li.completed');
      completedTasks.forEach(task => task.remove());
    }