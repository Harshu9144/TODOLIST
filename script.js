//  var createlist = document.querySelector("#createlist");
//  var addbtn = document.querySelector("#add");
//  var tasklist = document.querySelector("#tasklist");



//  addbtn.addEventListener("click", function(){
//   if(createlist.value.length == 0){
//     alert("Please Enter Your Task !!");
//   }
//   else{
//     tasklist.innerHTML += `    <div class="task">
//     <span id="taskname"><i class="ri-focus-fill" id="point"></i>${createlist.value}</span>
//      <div class="icon">
//       <i class="ri-delete-bin-5-fill"></i>
//      </div>
//       </div>`;

//       var currentTask = document.querySelector(".ri-delete-bin-5-fill");
//       for(var i = 0; i<currentTask.length; i++){
//         currentTask[i].onclick = function(){
//           this.parentNode.remove();
//         }
//       }
//   }

//  })



document.querySelector('#add').onclick = function(){
  if(document.querySelector('#createlist').value.length == 0){
      alert("Please Enter a Task")
  }

  else{
      document.querySelector('#tasklist').innerHTML += `
      <div class="task">
      <span id="taskname"><i class="ri-focus-fill" id="point"></i>${document.querySelector("#createlist").value} </span>
       <div class="icon">
        <i class="ri-delete-bin-5-fill"></i>
       </div>
        </div>
      `;

      var current_tasks = document.querySelectorAll(".icon");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }



      var task = document.querySelectorAll(".task");
      for(var i=0; i<task.length; i++){
          task[i].addEventListener("click", function(){
            this.style.backgroundColor = "grey"
          })
      }

    
      
  }
}

document.querySelector("#add").addEventListener("click", function(){
  document.querySelector("#createlist").value = " ";
})
