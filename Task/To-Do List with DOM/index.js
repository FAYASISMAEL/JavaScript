a = document.getElementById("add")
b = document.getElementById("dis")
box = document.getElementById("box")

editing = null
a.addEventListener("click", () => {
  const task = b.value.trim()

  if (task === "") {
    alert("Please enter a task.")
    return
  }
  if (editing){
    editing.textContent = task
    editing = null
  }else{
    const div = document.createElement("div")
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    const desc = document.createElement("span")
    desc.textContent = task
    const ebtn = document.createElement("button");
    ebtn.textContent = "Edit"
    const dbtn = document.createElement("button")
    dbtn.textContent = "Delete"

    checkbox.addEventListener("change", () => {
      desc.style.textDecoration = checkbox.checked ? "line-through" : "none"
    })

    ebtn.addEventListener("click", () => {
      b.value = desc.textContent
      b.focus()
      editing = desc
    })

    dbtn.addEventListener("click", () => {
      box.removeChild(div)
    })

    div.appendChild(checkbox)
    div.appendChild(desc)
    div.appendChild(ebtn)
    div.appendChild(dbtn)

    box.appendChild(div)
  }

  b.value = ""
})