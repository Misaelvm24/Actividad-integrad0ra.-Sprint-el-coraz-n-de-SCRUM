// Definir productos
const products = [
  {
    id: 1,
    name: "Ibuprofeno",
    price: 5.99,
    image: "images/ibuprofeno.jpg",
  },
  {
    id: 2,
    name: "Paracetamol",
    price: 4.99,
    image: "images/paracetamol.jpg",
  },
  {
    id: 3,
    name: "Aspirina",
    price: 3.99,
    image: "images/aspirina.jpg",
  },
];

// Inicializar carrito
let cart = [];

// Obtener elementos del DOM
const productList = document.querySelector("#product-list");
const cartList = document.querySelector("#cart-list");
const cartTotal = document.querySelector("#cart-total");

// Función para mostrar productos en el DOM
function showProducts() {
  let output = "";
  products.forEach((product) => {
    output += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="btn-add-to-cart" data-id="${product.id}">Agregar al carrito</button>
      </div>
    `;
  });
  productList.innerHTML = output;
}

// Función para agregar producto al carrito
function addToCart(event) {
  const id = parseInt(event.target.dataset.id);
  const productToAdd = products.find((product) => product.id === id);
  if (productToAdd) {
    const existingProductIndex = cart.findIndex((product) => product.id === id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity++;
    } else {
      cart.push({
        id: productToAdd.id,
        name: productToAdd.name,
        price: productToAdd.price,
        image: productToAdd.image,
        quantity: 1,
      });
    }
  }
  showCart();
}

// Función para mostrar el carrito en el DOM
function showCart() {
  let output = "";
  let total = 0;
  cart.forEach((product) => {
    output += `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <div class="cart-item-details">
          <h4>${product.name}</h4>
          <p class="price">$${product.price.toFixed(2)}</p>
          <p class="quantity">Cantidad: ${product.quantity}</p>
        </div>
      </div>
    `;
    total += product.price * product.quantity;
  });
  cartList.innerHTML = output;
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para inicializar la aplicación
function init() {
  showProducts();
  productList.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-add-to-cart")) {
      addToCart(event);
    }
  });
}

// Iniciar aplicación
init();
