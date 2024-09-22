let users = JSON.parse(localStorage.getItem("usersss")) || []

let btnsign = document.getElementById("btnsign")

console.log(users);

btnsign.addEventListener("click", function(){

    users.forEach(user => {
        let inp1 = document.getElementById("inp1")
        let inp2 = document.getElementById("inp2")
        
        let emailValue = inp1.value;
        let passwordValue = inp2.value;

        if(user.email === emailValue && user.password === passwordValue){
            window.location.href = "../first/index.html"
            localStorage.setItem(JSON.stringify(user.nameANDsurname))
        }
    });
});