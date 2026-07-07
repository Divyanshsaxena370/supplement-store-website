let checkoutCart = JSON.parse(localStorage.getItem("cart")) || [];

let checkoutItems = document.getElementById("checkoutItems");
let checkoutTotal = document.getElementById("checkoutTotal");

let total = 0;

checkoutCart.forEach(item => {

    total += Number(item.price) * (item.quantity || 1);

    checkoutItems.innerHTML += `
    <div class="summary-item">
        <span>${item.name} x ${item.quantity || 1}</span>
        <span>₹${item.price}</span>
    </div>
    `;

});

checkoutTotal.innerText = total;
// placeorder function
const placeOrderBtn = document.getElementById("placeOrderBtn");

if(placeOrderBtn){

    placeOrderBtn.addEventListener("click", function(){

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if(cart.length === 0){
            alert("Your cart is empty!");
            return;
        }

        alert("Order Placed Successfully!");

        localStorage.removeItem("cart");

        window.location.href = "index.html";

    });

}