const addBtn = document.getElementById('add-task-btn'); // Add Task Button
const taskCard = document.querySelector('.task-card');
const addContainerBtn = document.getElementById('add-container-btn'); 

addBtn.addEventListener('click', () => {
    // ✅ Task Card ko visible karo
    taskCard.classList.add("show");
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
    taskSecDiv.classList.add('cards'); // ✅ CSS Class Add
    taskContainer.appendChild(taskSecDiv); // ✅ New Task Append

    textContainer.value = ""; // ✅ Input Field Clear Karo
    taskCard.classList.remove("show"); // ✅ Task Card ko unvisible karo

    // ✅ **Double Click Par Edit Mode (Direct h3 Editable)**
    h3.addEventListener('dblclick', () => {
        h3.contentEditable = true; // ✅ h3 directly editable ho jayega
        h3.focus(); // ✅ Auto-focus for editing

        // ✅ Edit mode me Enter ya Blur hone par save ho jaye
        h3.addEventListener('blur', () => {
            h3.contentEditable = false; // ✅ Editing mode hatao
            if (h3.innerText.trim() === "") h3.innerText = "Untitled Task"; // ✅ Default Text
        });

    });
});
