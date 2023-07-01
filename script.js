 ( () => {
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
  task.classList.add("card");
  list.appendChild(task);
}

btn.addEventListener("click", createTask);

const checkComplete= ()=> {

  const i = document.createElement("i");
  i.classList.add("far","fa-check-square","icon");
  i.addEventListener("click",completeTask);
  return i
}

const completeTask=(event)=> {

const element= event.target
element.classList.toggle("fas");
element.classList.toggle("completeIcon");
element.classList.toggle("far");

}
})()
const iconTask= ()=>{
 const i= document.createElement("i")
  iconTask.classList.add("fas","fa-trash-alt","trashIcon","icon");
 
  return i

} 
