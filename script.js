// Task Add Karne Ka Button
const addBtn = document.getElementById('add-task-btn'); 
const taskCard = document.querySelector('.task-card');
const addContainerBtn = document.getElementById('add-container-btn');

//  Task Card Ko Show/Hide Karne Ka Event
addBtn.addEventListener('click', () => {
    taskCard.classList.toggle("show");
});

// Naya Task Container (Board) Add Karna click karne pe
addContainerBtn.addEventListener('click', () => {
    const textContainer = document.getElementById('textId');
    const taskContainer = document.getElementById('task-section');

    let inputValue = textContainer.value.trim(); // Extra spaces remove karo

    if (inputValue === "") {
        window.alert('Enter your Task');
        return;
    }

    //  Naya Task Container (Board) Bana Rahe Hain
    let taskSecDiv = document.createElement('div'); 
    let h3 = document.createElement('h3'); // 
    h3.innerText = inputValue;
    h3.classList.add('card-h3');

    taskSecDiv.appendChild(h3);
    taskSecDiv.classList.add('cards'); // 
    taskContainer.appendChild(taskSecDiv); //

    textContainer.value = ""; // ✅ Input Field Clear

    // Double Click Par Edit Mode (h3 Editable)
    h3.addEventListener('dblclick', () => {
        h3.contentEditable = true;
        h3.focus();
        h3.addEventListener('blur', () => {
            h3.contentEditable = false;
            if (h3.innerText.trim() === "") h3.innerText = "Untitled Task"; 
        });
    });

    //  Naya Board Bhi Droppable Hoga (Tasks Accept Kare)
    taskSecDiv.addEventListener('dragover', (event) => {
        event.preventDefault(); 
    });

    taskSecDiv.addEventListener('drop', (event) => {
        event.preventDefault();
        const flyingElement = document.querySelector('.flying'); 
        if (flyingElement) {
            taskSecDiv.appendChild(flyingElement); // ✅ Task Drop Ho Raha Hai
        }
    });
});

// ✅ Input Box Show/Hide Toggle
const toggleButton = document.querySelector('.add-TAsk'); 
const taskDiv = document.getElementById('taskAdd');

toggleButton.addEventListener('click', () => {
    taskDiv.classList.toggle('show');
});

// ✅ Task Input & Button
const taskInput = document.getElementById("text2Id");
const addButton = document.getElementById("btn");

// ✅ Task Add Karne Ka Function
addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); 

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // ✅ Naya Task Bana Rahe Hain
    let taskEntry = document.createElement("div");
    taskEntry.classList.add("taskItem");
    taskEntry.setAttribute("draggable", true); 

    let circle = document.createElement("span");
    circle.classList.add("circle");

    let textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    let taskP = document.createElement("p");
    taskP.classList.add("taskText");
    taskP.textContent = taskText;

    let dateSpan = document.createElement("span");
    dateSpan.classList.add("dateTime");
    dateSpan.textContent = getCurrentDateTime();

    textContainer.appendChild(taskP);
    textContainer.appendChild(dateSpan);
    taskEntry.appendChild(circle);
    taskEntry.appendChild(textContainer);

    // ✅ Task Ko Pehle Board Me Dalna
    document.querySelector('.cards').appendChild(taskEntry);

    // ✅ Task Draggable Banna Rahe Hain (Direct Code)
    taskEntry.addEventListener('dragstart', (event) => {
        event.target.classList.add('flying'); 
    });

    taskEntry.addEventListener('dragend', (event) => {
        event.target.classList.remove('flying'); 
    });

    // ✅ Input Field Clear Karo
    taskInput.value = "";
});


// ✅ Function To Get Current Date & Time
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
// ✅ Pehle Se Existing Tasks Ko Draggable Banao
document.querySelectorAll('.taskItem').forEach(taskItem => {
    taskItem.setAttribute("draggable", true);
    taskItem.addEventListener('dragstart', (event) => {
        event.target.classList.add('flying'); 
    });
    taskItem.addEventListener('dragend', (event) => {
        event.target.classList.remove('flying'); 
    });
});

// ✅ Pehle Se Existing Boards Ko Droppable Banao
document.querySelectorAll('.cards').forEach((board) => {
    board.addEventListener('dragover', (event) => {
        event.preventDefault(); 
    });

    board.addEventListener('dragover', (event) => {
        event.preventDefault();
        const flyingElement = document.querySelector('.flying');
        if (flyingElement) {
            board.appendChild(flyingElement);
        }
    });
});


