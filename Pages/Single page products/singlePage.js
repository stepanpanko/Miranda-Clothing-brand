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

// add to cart button
function addToCart() {
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.textContent = 'Proceed to Checkout';
    addToCartButton.classList.add('proceed-to-checkout');
    addToCartButton.removeEventListener('click', addToCart);
    addToCartButton.addEventListener('click', proceedToCheckout);
};

function proceedToCheckout() {
    window.location.href = '/Pages/Cart/cart.html';
}
