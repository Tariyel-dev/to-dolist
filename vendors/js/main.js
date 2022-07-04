let btn = document.getElementById("btnadd");
let inputtext = document.getElementById("form")
let todoList = document.getElementById("todolist")
let removeAllbtn = document.getElementById("removeAll")
var todo = JSON.parse(localStorage.getItem("todolist"));

var listData =  []



if (todo) {
    for (let j = 0; j < todo.length; j++) {
        todoList.innerHTML += `<li>${todo[j]}</li>`
        listData.push(todo[j])
    }
}



removeAllbtn.onclick = function () {
   
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          localStorage.removeItem("todolist")
          todoList.innerHTML = ""
        }
      
      })
}

btn.onclick = function () {

    if (inputtext.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })

    } else {
      let evaldata = eval(inputtext.value)
        todoList.innerHTML += `<li>${evaldata}</li>`
        listData.push(evaldata)
        localStorage.setItem("todolist", JSON.stringify(listData))
        inputtext.value = ""


    }

}

