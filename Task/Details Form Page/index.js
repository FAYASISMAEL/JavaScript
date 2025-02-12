a = document.getElementById("name")
b = document.getElementById("email")
c = document.getElementById("phone")
d = document.getElementById("display")
sbtn = document.getElementById("submit")

let arr = []

sbtn.addEventListener("click", () => {
  let obj = {
    name: a.value,
    email: b.value,
    phone: c.value,
  }

  arr.push(obj)
  let i = arr.length - 1

  let div = document.createElement("div")
  d.appendChild(div)
  div.style.marginTop="10px";

  let n = document.createElement("input")
  n.type = "text"
  n.value = arr[i].name
  n.disabled = true
  div.appendChild(n)

  let e = document.createElement("input")
  e.type = "text"
  e.value = arr[i].email
  e.disabled = true
  div.appendChild(e)

  let p = document.createElement("input")
  p.type = "text"
  p.value = arr[i].phone
  p.disabled = true
  div.appendChild(p)

  let ebtn = document.createElement("button")
  ebtn.textContent = "Edit"
  div.appendChild(ebtn)

  let savebtn = document.createElement("button")
  savebtn.textContent = "Save"
  div.appendChild(savebtn)

  let dbtn = document.createElement("button")
  dbtn.textContent = "Delete"
  div.appendChild(dbtn)

  ebtn.addEventListener("click", () => {
    n.disabled = false
    e.disabled = false
    p.disabled = false
    savebtn.disabled = false
  })

  savebtn.addEventListener("click", () => {
    arr[i].name = n.value
    arr[i].email = e.value
    arr[i].phone = p.value

    n.disabled = true
    e.disabled = true
    p.disabled = true
  })

  dbtn.addEventListener("click", () => {
    let yn = confirm("Do you want to delete the Data")
    if (yn) {
      arr.splice(i, 1)
      d.removeChild(div);
    }
  })

  a.value = ""
  b.value = ""
  c.value = ""
})