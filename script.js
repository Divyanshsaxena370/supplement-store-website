// Product Details
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

        alert("Product Added To Cart ✅");
    });
}

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");

}, 3000);
// 
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product-cart");

let timer;

searchInput.addEventListener("input", function () {

    clearTimeout(timer);

    timer = setTimeout(function () {

        const value = searchInput.value.toLowerCase();
        let firstMatch = null;

        products.forEach(function (product) {

            if (
                value === "" ||
                product.innerText.toLowerCase().includes(value)
            ) {
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

    }, 1000); // 1 second baad scroll hoga

});
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});