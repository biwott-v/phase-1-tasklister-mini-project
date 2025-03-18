document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.querySelector("#tasks");
  const submit = document.querySelector("#create-task-form");
  const description = document.querySelector("#new-task-description");
  const selection = document.querySelector("#selection");
  const time=document.querySelector("#time");
  submit.addEventListener("submit", (event) => {
    const newtask = document.createElement("li");
    const rmbtn = document.createElement("button");
    const editbtn = document.createElement("button");
    rmbtn.textContent = "X";
    editbtn.textContent = "EDIT";
    newtask.textContent = `${description.value},  ${time.value}`;
    tasks.appendChild(newtask);
    newtask.appendChild(rmbtn);
    newtask.appendChild(editbtn);
    rmbtn.style.margin = "10px";
    editbtn.style.margin = "20px";
    rmbtn.addEventListener("click", (event) => {
      newtask.remove();
    });
    editbtn.addEventListener("click", (event) => {
      editedTask = prompt("Enter task here");
      newtask.textContent = editedTask;
      newtask.appendChild(rmbtn);
      newtask.appendChild(editbtn);
    });
    if (selection.value === "high") {
      newtask.style.color = "red";
    } else if (selection.value === "medium") {
      newtask.style.color = "yellow";
    } else if (selection.value === "low") {
      newtask.style.color = "green";
    }
    description.value = "";
    time.value="";
    event.preventDefault();
    const allitems=document.getElementsByTagName("li");
    for(let i=0,k;i<allitems.length;i++){
      if(allitems[i].style.color==="red"){
        k=i;
      }
      if((allitems[i].style.color === "yellow" || allitems[i].style.color === "green") && allitems[i+1].style.color === "red"){
        tasks.insertBefore(allitems[i+1],allitems[0]);
      }
      else if(allitems[i].style.color==="green"  && allitems[i+1].style.color==="yellow"){
        tasks.insertBefore(allitems[i+1],allitems[k+1]);
      }
    }
      
  });
});
