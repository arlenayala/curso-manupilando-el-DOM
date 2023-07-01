const deletIcon= ()=>{
    const i= document.createElement("i")
     i.classList.add("fas","fa-trash-alt","trashIcon","icon");
    i.addEventListener("click" , deletTask)
     return i
   
   }
   
   const deletTask=(event)=> {
     
     const parent= event.target.parentElement;
     parent.remove();
   }

   export default deletIcon;