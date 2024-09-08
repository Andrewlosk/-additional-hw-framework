import { nanoid } from 'nanoid/non-secure'

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');


const addTaskAndRemove = () => {
    const taskText = taskInput.value
    const taskId = nanoid(2)
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `<input type="checkbox" class="checkBox"> <p class="textForTask">${taskText}</p> <button class="deleteBtn">delete</button> `
    taskList.appendChild(taskItem);
    taskInput.value = ''
    taskItem.id = taskId
    const deleteBtn = taskItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        taskItem.remove()
    })
    const checkBox = document.querySelector('.checkBox');
    const textForTask = document.querySelector('.textForTask')
    checkBox.addEventListener('change', () =>{
        textForTask.classList.toggle('toggleGreen')
        // textForTask.style.color = '#0db53a'
    })


}




// const deleteTask = () => {
    
    // deleteBtn.addEventListener('click', () => {
    //     taskList.removeChild()
    // })
// }

addTaskBtn.addEventListener('click', addTaskAndRemove)
// deleteBtn.addEventListener('click', deleteTask)
