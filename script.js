 import checkComplete from "./componentes/checkComplete.js";
 import deletIcon from "./componentes/deletIcon.js";


  const btn = document.querySelector("[data-form-btn]");

const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value= input.value;
    input.value="";
    const task= document.createElement("li");
    const list=document.querySelector("[data-list]")
    
    
    const taskContent= document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask=document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText=value;
    taskContent.appendChild(titleTask);
    
   
  
  //task.innerHTML=content;
  task.appendChild(taskContent);
  task.appendChild(deletIcon());
  task.classList.add("card");
  list.appendChild(task);
}

btn.addEventListener("click", createTask);




