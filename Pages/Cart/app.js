const sampleItems = [
    {
      id: 1,
      name: "Blissful Dress",
      quantity: 2,
      price: 75.0,
    },
    {
      id: 2,
      name: "Celine Dress",
      quantity: 1,
      price: 90.0,
    },
    {
      id: 3,
      name: "Majestic Dress",
      quantity: 3,
      price: 75.0,
    },
  ];

// Get the cart items container element
const cartItemsContainer = document.getElementById('cart-items');

// Iterate over the sample items and create HTML for each item
sampleItems.forEach((item, index) => {
  // Create a table row for the item
  const row = document.createElement('tr');

  // Create table cells for each item property
  const nameCell = document.createElement('td');
  nameCell.textContent = item.name;

  const quantityCell = document.createElement('td');
  
  // Create minus button
  const minusButton = document.createElement('button');
  minusButton.textContent = '-';
  minusButton.classList.add('quantity-button');
  minusButton.addEventListener('click', () => {
    // Subtract one from the quantity and update the total
    if (item.quantity > 1) {
      item.quantity--;
      updateCartItem(row, item);
    }
  });
  
  // Create quantity text
  const quantityText = document.createElement('span');
  quantityText.textContent = item.quantity;
  
  // Create plus button
  const plusButton = document.createElement('button');
  plusButton.textContent = '+';
  plusButton.classList.add('quantity-button');
  plusButton.addEventListener('click', () => {
    // Add one to the quantity and update the total
    item.quantity++;
    updateCartItem(row, item);
  });
  
  // Append the minus button, quantity text, and plus button to the quantity cell
  quantityCell.appendChild(minusButton);
  quantityCell.appendChild(quantityText);
  quantityCell.appendChild(plusButton);

  const priceCell = document.createElement('td');
  priceCell.textContent = `$${item.price.toFixed(2)}`;

  const totalCell = document.createElement('td');
  const total = item.quantity * item.price;
  totalCell.textContent = `$${total.toFixed(2)}`;

  // Append the cells to the row
  row.appendChild(nameCell);
  row.appendChild(quantityCell);
  row.appendChild(priceCell);
  row.appendChild(totalCell);

  // Append the row to the cart items container
  cartItemsContainer.appendChild(row);

  // Function to update the cart item when the quantity changes
  function updateCartItem(row, item) {
    quantityText.textContent = item.quantity;
    totalCell.textContent = `$${(item.quantity * item.price).toFixed(2)}`;
  }

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    // Remove the item from the sampleItems array and update the cart
    sampleItems.splice(index, 1);
    cartItemsContainer.removeChild(row);
  });

  // Append the delete button to the row
  row.appendChild(deleteButton);
});
