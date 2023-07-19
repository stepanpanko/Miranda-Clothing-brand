
const colorFilter = document.getElementById('color-filter');
const sortBy = document.getElementById('sort-by');
const resetFilterBtn = document.getElementById('reset-filter');

// Get references to the product container and products
const proContainer = document.querySelector('.pro-container');
const products = Array.from(proContainer.getElementsByClassName('pro'));

// Function to filter products based on color
function filterProducts(color) {
  products.forEach((product) => {
    const productColor = product.dataset.color;
    if (color === '' || productColor === color) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Function to sort products based on price
function sortProducts(sortBy) {
  const sortedProducts = [...products];
  if (sortBy === 'price-low-to-high') {
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.dataset.price);
      const priceB = parseFloat(b.dataset.price);
      return priceA - priceB;
    });
  } else if (sortBy === 'price-high-to-low') {
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.dataset.price);
      const priceB = parseFloat(b.dataset.price);
      return priceB - priceA;
    });
  }
  proContainer.innerHTML = '';
  sortedProducts.forEach((product) => {
    proContainer.appendChild(product);
  });
}

// Function to reset the filter and sorting
function resetFilterAndSort() {
  colorFilter.value = '';
  sortBy.value = 'default';
  filterProducts('');
  sortProducts('default');
}

// Apply default filter and sorting upon page load
window.addEventListener('load', () => {
  filterProducts('');
  sortProducts('default');
});

// Event listeners for filter, sort, and reset button
colorFilter.addEventListener('change', () => {
  const selectedColor = colorFilter.value;
  filterProducts(selectedColor);
});

sortBy.addEventListener('change', () => {
  const selectedSortBy = sortBy.value;
  sortProducts(selectedSortBy);
});

resetFilterBtn.addEventListener('click', () => {
  resetFilterAndSort();
});

