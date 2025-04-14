// anchor button click event
(() => {
  const anchorButtons = document.querySelectorAll('.anchor-button');
  
  anchorButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetYear = this.getAttribute('data-year');
      const targetDom = document.querySelector(`#year-${targetYear}`);
      
      if (targetDom) {
        targetDom.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();


// page-top-button click event
(() => {
  const pageTopButton = document.querySelector('.page-top-button');
  pageTopButton.addEventListener('click', function () {
      const body = document.querySelector('body')
      
      if (body) {
        body.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
})();
