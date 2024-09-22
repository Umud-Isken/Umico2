let users = JSON.parse(localStorage.getItem("usersss")) || []

let btnregister = document.getElementById("btnregister")

btnregister.addEventListener("click", function(){
    let inp9 = document.getElementById("inp9")
    let inp3 = document.getElementById("inp3")
    let inp4 = document.getElementById("inp4")
    let inp5 = document.getElementById("inp5")

    let newuser = {
        email:inp9.value,
        nameANDsurname:inp3.value,
        password:inp4.value,
    }

        users.push(newuser)


    

    localStorage.setItem("usersss", JSON.stringify(users))
})