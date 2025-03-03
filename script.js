const addBtn = document.getElementById('add-task-btn'); //add-container-btn 
const taskCard = document.querySelector('.task-card');
const addContainerBtn = document.getElementById('add-container-btn ');

//

addBtn.addEventListener('click', () => {
    // ✅ Task Card ko visible karo
    taskCard.classList.add("show");

});
addContainerBtn.addEventListener('click', () => {
    const textContainer = document.getElementById('textId');
    const taskContainer = document.getElementById('task-section');
    let taskSecDiv = document.createElement('div'); // New Div
    let h3 = document.createElement('h3'); // ✅ Heading Element Create
    h3.innerText = textContainer.value; // ✅ Input Value Assign
    h3.classList.add('card-h3')
    taskSecDiv.appendChild(h3);
    taskSecDiv.classList.add('cards'); // Classes Add    heading


    taskContainer.appendChild(taskSecDiv); // ✅ New Div Append
})
