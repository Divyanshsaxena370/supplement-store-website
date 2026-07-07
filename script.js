// Product Detail
const nameEl = document.getElementById("product-name");
const priceEl = document.getElementById("product-price");
const imageEl = document.getElementById("product-image");
const descriptionEl = document.getElementById("product-description");

if (nameEl) {
    nameEl.innerText = localStorage.getItem("name");
    priceEl.innerText = "Rs. " + localStorage.getItem("price");
    imageEl.src = localStorage.getItem("image");
    descriptionEl.innerText=localStorage.getItem("description");
}

// Open Product
function showProduct(name, price, image,description) {
    localStorage.setItem("name", name);
    localStorage.setItem("price", price);
    localStorage.setItem("image", image);
    localStorage.setItem("description", description);

    window.location.href = "product.html";
}

// Add To Cart
const cartBtn = document.getElementById("cartBtn");

if (cartBtn) {
    cartBtn.addEventListener("click", () => {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name: localStorage.getItem("name"),
            price: localStorage.getItem("price"),
            image: localStorage.getItem("image"),
            description: localStorage.getItem("description"),
            qty: 1
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCart();
        openCart();

        // alert("Product Added To Cart ✅");
    });
}
console.log(JSON.parse(localStorage.getItem("cart")))

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    setInterval(() => {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");

    }, 3000);
}
// 
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-cart");

if (searchInput) {

    let timer;

    searchInput.addEventListener("input", function () {

        clearTimeout(timer);

        timer = setTimeout(function () {

            const value = searchInput.value.toLowerCase();
            let firstMatch = null;

            products.forEach(function (product) {

                if (value === "" || product.innerText.toLowerCase().includes(value)) {
                    product.style.display = "";

                    if (firstMatch === null && value !== "") {
                        firstMatch = product;
                    }

                } else {
                    product.style.display = "none";
                }

            });

            if (firstMatch) {
                firstMatch.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        }, 1000);

    });

}
// const cartIcon = document.getElementById("cartIcon");

// if (cartIcon) {
//     cartIcon.addEventListener("click", openCart);
// }
// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSidebar = document.querySelector(".cart-sidebar");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");
const closeCart = document.getElementById("closeCart");
const cartIcon = document.getElementById("cartIcon");


document.querySelector(".checkout-btn").addEventListener("click", function () {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    window.location.href = "checkout.html"
});

function updateCart() {

    if (!cartItems) return;

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        if (!item.quantity) {
    item.quantity = 1;
}

        total += Number(item.price) * 
        item.quantity;

        cartItems.innerHTML += `
        <div class="cart-item" style="display:flex;align-items:center;gap:10px;margin-bottom:15px;">
            <img src="${item.image}" width="60" height="60" style="object-fit:cover;border-radius:8px;">
            <div style="flex:1;">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
                <div class="quantity">
                <button onclick="decreaseQty(${index})">-</button>
              <span>${item.quantity}</span>
               <button onclick="increaseQty(${index})">+</button>
         </div>
            </div>
            <button onclick="removeItem(${index})">X</button>
        </div>
        `;
    });

    cartCount.innerText = cart.length;
    totalPrice.innerText = total;
}

function openCart() {
    console.log("cartSidebar")
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
    updateCart();
}

function closeCartBox() {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
}

if (cartIcon) {
    cartIcon.addEventListener("click", function(e) {
        e.preventDefault();
        openCart();
    });
}

if (closeCart) {
    closeCart.addEventListener("click", closeCartBox);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartBox);
}

window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}
window.increaseQty = function(index) {
    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

window.decreaseQty = function(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

updateCart();
const cartNumber =document.getElementById("cartOpen");

if(cartNumber){
    cartNumber.innerText = cart.length;
}
