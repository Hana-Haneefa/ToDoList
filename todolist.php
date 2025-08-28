<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>todolist</title>
    <link rel="stylesheet" href="./Assests/CSS/todolist.css">
</head>
<body>

    <a href="index.html"><div class="mid">
        <img src="./Assests/Images/Logo.PNG" alt="Logo" class="logo">
    </div></a>

    <div class="task">
        <input type="text" placeholder="Add a new task" id="newTask">
        <button id="addTaskBtn" onclick="addTask()">Add</button>
    </div>

    <div class="taskList">
        <ul id="taskListUl">
            <!-- Task items will be added here dynamically -->
        </ul>
    </div>
    <!-- js -->
    <script src="./Assests/JS/todolist.js"></script>
</body>
</html>