const Namee = document.getElementById("name")
const Cclass = document.getElementById("Class")
const Email = document.getElementById("Email")
const StudentId = document.getElementById("StudentId")
const Password = document.getElementById("Password")
let SubmitBtn = document.getElementById("SubmitBtn")
let LoginBtn = document.getElementById("LoginBtn")

document.getElementById("SubmitBtn").onclick = function(){
  let Identity = {
    Name: document.getElementById("name").value,
    Cclass: document.getElementById("Class").value,
    Email: document.getElementById("Email").value,
    StudentId: document.getElementById("StudentId").value,
    Password: document.getElementById("Password").value,
  }
}
