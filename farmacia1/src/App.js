// Buscar medicamentos por nombre
const searchInput = document.getElementById('search-input');
const medicineList = document.getElementById('medicine-list');
const medicines = document.getElementsByClassName('medicine-item');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  Array.from(medicines).forEach((medicine) => {
    const name = medicine.querySelector('.medicine-name').textContent.toLowerCase();
    if (name.includes(searchValue)) {
      medicine.style.display = 'block';
    } else {
      medicine.style.display = 'none';
    }
  });
});

// Ver información detallada de un medicamento
const detailButtons = document.querySelectorAll('.detail-button');
const detailModal = document.getElementById('detail-modal');
const modalCloseButton = document.getElementById('modal-close-button');

detailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    detailModal.style.display = 'block';
    // Aquí se puede obtener la información detallada del medicamento correspondiente
  });
});

modalCloseButton.addEventListener('click', () => {
  detailModal.style.display = 'none';
});

// Agregar y eliminar medicamentos del carrito de compras
const addButtons = document.querySelectorAll('.add-button');
const cartList = document.getElementById('cart-list');

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.medicine-item');
    const name = item.querySelector('.medicine-name').textContent;
    const price = item.querySelector('.medicine-price').textContent;
    const cartItem = document.createElement('li');
    cartItem.textContent = `${name} - ${price}`;
    cartList.appendChild(cartItem);
  });
});

cartList.addEventListener('click', (event) => {
  if (event.target.nodeName === 'LI') {
    cartList.removeChild(event.target);
  }
});

// Realizar un pago en línea
const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  // Aquí se puede procesar el pago utilizando una pasarela de pago en línea
});

// Agregar y actualizar medicamentos en el catálogo
const adminSection = document.getElementById('admin-section');
const addButton = document.getElementById('add-button');
const updateButton = document.getElementById('update-button');

addButton.addEventListener('click', () => {
  // Aquí se puede mostrar un formulario para agregar un nuevo medicamento
});

updateButton.addEventListener('click', () => {
  // Aquí se puede mostrar un formulario para actualizar un medicamento existente
});
