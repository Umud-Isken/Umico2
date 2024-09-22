let basket = JSON.parse(localStorage.getItem("myBasket")) || [];
console.log(basket);

let container = document.querySelector(".secondstyle");

basket.forEach((element, index) => {

    let card = document.createElement("div");
    card.className = "card";
    let Newcard2 = `
    <img class="img" src="${element.image}" alt="">
    <h3 class="h3" style="color: red;">${element.price}</h3>
    <p class="p">${element.nameOfproduct}</p>
    <p class="p2" style="color: blue;">${element.priceOfDroduct}</p>
    <button class="btnbtn">Buy it now</button>
    <button class="btn2" style="background-color: #4CAF50;">Etrafli</button>
    `;

    card.innerHTML = Newcard2;
    container.appendChild(card);

    card.querySelector(".btn2").addEventListener("click", function() {
        let modal = document.querySelector(".modal");
        let modalContent = modal.querySelector(".modal-content");

        modal.style.display = "flex";

        modalContent.querySelector("img").src = element.image;
        modalContent.querySelector("h1").textContent = element.nameOfproduct;
        modalContent.querySelector("p").textContent = element.description || "Описание отсутствует";
    });
});



document.querySelector(".Xbtn").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
});
