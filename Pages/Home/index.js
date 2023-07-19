let bar = document.querySelector('.menu-icon');
let close = document.querySelector('.close');
let nav = document.querySelector('.navbar');

// nav bar close button
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
};
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};

// about page more button
let articleSections = document.querySelectorAll('.main-article-section');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  let description = articleSection.querySelector('.description');
  let originalHeight = description.offsetHeight;

  moreButton.onclick = function () {
    if (articleSection.classList.contains('short')) {
      description.style.height = originalHeight + 'px';
      moreButton.textContent = 'Show Less';
      articleSection.classList.remove('short');
    } else {
      description.style.height = 'auto';
      moreButton.textContent = 'Show More';
      articleSection.classList.add('short');
    }
  };
}







