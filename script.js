const btn = document.querySelector("[data-form-btn]");



const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value= input.value;
    input.value="";
    const task= document.createElement("li");
    const list=document.querySelector("[data-list]")
    
    const content= `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  console.log(content);
  task.innerHTML=content;
  task.classList.add("card");
  list.appendChild(task);
}

btn.addEventListener("click", createTask);