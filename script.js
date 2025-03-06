const addBtn = document.getElementById('add-task-btn'); // Add Task Button
const taskCard = document.querySelector('.task-card');
const addContainerBtn = document.getElementById('add-container-btn');

addBtn.addEventListener('click', () => {
    // ✅ Task Card ko visible karo
    taskCard.classList.toggle("show");
});

addContainerBtn.addEventListener('click', () => {
    const textContainer = document.getElementById('textId');
    const taskContainer = document.getElementById('task-section');

    let inputValue = textContainer.value.trim(); // Trim se extra spaces remove

    if (inputValue === "") {
        window.alert('Enter your Task');
        return;
    }

    let taskSecDiv = document.createElement('div'); // ✅ New Task Container
    let h3 = document.createElement('h3'); // ✅ Heading Element Create
    h3.innerText = inputValue;
    h3.classList.add('card-h3');

    taskSecDiv.appendChild(h3);
    taskSecDiv.classList.add('cards'); //  CSS Class Add
    taskContainer.appendChild(taskSecDiv); //  New Task Append

    textContainer.value = ""; //  Input Field Clear Karo

    // **Double Click Par Edit Mode (Direct h3 Editable)**
    h3.addEventListener('dblclick', () => {
        h3.contentEditable = true; //  h3 directly editable ho jayega
        h3.focus(); //  Auto-focus for editing

        //  Edit mode me Enter ya Blur hone par save ho jaye
        h3.addEventListener('blur', () => {
            h3.contentEditable = false; //  Editing mode hatao
            if (h3.innerText.trim() === "") h3.innerText = "Untitled Task"; // ✅ Default Text
        });

    });
});

// Select elements
const toggleButton = document.querySelector('.add-TAsk'); // Toggle task input
const taskDiv = document.getElementById('taskAdd'); // Task input container
const taskListContainer = document.querySelector(".taskItem"); // Select correct task list container

// Toggle input box visibility
toggleButton.addEventListener('click', () => {
    taskDiv.classList.toggle('show'); // Toggle "show" class
});

// Select input and button
const taskInput = document.getElementById("text2Id");
const addButton = document.getElementById("btn");

// Add task function
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Get input value

    if (taskText === "") {
        alert("Please enter a task!"); // Prevent empty tasks
        return;
    }

    // Create task wrapper (new task entry)
    let taskEntry = document.createElement("div");
    taskEntry.setAttribute('draggable',true)
    taskEntry.classList.add("taskItem"); 

    // Create circle element
    let circle = document.createElement("span");
    circle.classList.add("circle");

    // Create text container
    let textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    // Create task description paragraph
    let taskP = document.createElement("p");
    taskP.classList.add("taskText");
    taskP.textContent = taskText;

    // Create date-time span
    let dateSpan = document.createElement("span");
    dateSpan.classList.add("dateTime");
    dateSpan.textContent = getCurrentDateTime(); // Get dynamic date & time

    // Append task text and date-time to text container
    textContainer.appendChild(taskP);
    textContainer.appendChild(dateSpan);

    // Append circle and text container to task entry
    taskEntry.appendChild(circle);
    taskEntry.appendChild(textContainer);

    // Append task entry inside the task list container
    cards.append(taskEntry);

    // Clear input field after adding task
    taskInput.value = "";
    
});

// Function to get current date & time dynamically
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
