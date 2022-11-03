const form =  document.querySelector("#create-task-form")

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", submitForm)
});

function submitForm(e) {
  e.preventDefault()

  const todoList = document.querySelector("#new-task-description").value
  const li = document.createElement("li")
  li.textContent = todoList

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "X"
  
  deleteButton.addEventListener("click", () => li.remove)
  li.append(deleteButton)
  tasks.appendChild(li)
  form.reset()
}

