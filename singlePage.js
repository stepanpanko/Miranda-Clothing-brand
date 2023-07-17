let specsToggle = document.getElementById('specs-toggle');
let specsContainer = document.getElementById('specs-container');
let plusMinus = document.querySelector('.plus-minus');
let mainImg = document.getElementById('main-img');
let smallImg = document.querySelectorAll('.small-img');


// single pro product specs
specsToggle.addEventListener('click', () => {
    specsContainer.classList.toggle('visible');
    if (plusMinus.textContent === '-') {
    plusMinus.textContent = '+';
    } else {
    plusMinus.textContent = '-';
    }
});

  // single pro image slider
function changeImage(index) {
    mainImg.src = smallImg[index].src;

    for (let i = 0; i < smallImg.length; i++) 
    { if (i === index) {
        smallImg[i].classList.add('active'); 
    } else {
        smallImg[i].classList.remove('active');
    }
    };
};

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = () => {
    changeImage(i);
    };
};

function addToCart() {
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.textContent = 'Proceed to Checkout';
    addToCartButton.classList.add('proceed-to-checkout');
    addToCartButton.removeEventListener('click', addToCart);
    addToCartButton.addEventListener('click', proceedToCheckout);
  };
  
  function proceedToCheckout() {
    // Add your logic here to handle adding the selected item to the cart and redirecting to the cart page
    const productId = document.querySelector('.add-to-cart').getAttribute('data-id');
    // Add the necessary code to add the item to the cart and redirect to the cart page
    // For example, you can store the item details in localStorage or send a request to a server
    // Then redirect to the cart page using window.location.href or any other method
  
    // Example: Redirecting to the cart page
    window.location.href = '/cart.html';
  }
  