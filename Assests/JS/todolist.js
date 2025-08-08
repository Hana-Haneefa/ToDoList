function addTask() {
    const taskInput = document.getElementById("newTask");
    const taskValue = taskInput.value.trim(); //removes leading/trailing spaces to prevent empty or whitespace-only tasks.
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskValue;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = function() {
        li.classList.toggle("completed");
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function() {
        if(editBtn.textContent === "Edit") {
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = span.textContent;
            editInput.className = "edit-input";

            li.insertBefore(editInput, span);
        li.removeChild(span);
        editBtn.textContent = "Save";
    } else {
        const newText = li.querySelector(".edit-input").value.trim();
        if (newText !== "") {
            span.textContent = newText;
            li.insertBefore(span, li.querySelector(".edit-input"));
            li.removeChild(li.querySelector(".edit-input"));
            editBtn.textContent = "Edit";
        }
    }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        li.remove();
    };
    
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);
    btnGroup.appendChild(editBtn);
    li.appendChild(btnGroup);
    li.appendChild(span);
    document.getElementById("taskListUl").appendChild(li);
    taskInput.value = ""; // Clear the input field
}

