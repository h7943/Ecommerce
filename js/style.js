function toggleNavbar() {
    var navbarList = document.querySelector('.navbar-list');
    navbarList.classList.toggle('show');
  }
// Get the element with the class "all-categories"
var allCategories = document.querySelector('.categories-button');

// Get the element with the class "categories"
var categoriesList = document.querySelector('.categories ul');

// Add a click event listener to the "all-categories" element
allCategories.addEventListener('click', function() {
    // Toggle the max-height property to control the slide effect
    categoriesList.style.maxHeight = categoriesList.style.maxHeight === '0px' ? categoriesList.scrollHeight + 'px' : '0';
});

const slider = document.getElementById('slider');
    const dotContainer = document.getElementById('dot-container');
    let slideIndex = 0;

    function showSlides() {
        // Increment the slide index
        slideIndex++;

        // Check if it's the last slide, then reset to the first slide
        if (slideIndex >= slider.children.length) {
            slideIndex = 0;
        }

        // Calculate the new transform value to slide to the next image
        const transformValue = -slideIndex * 100 + '%';
        slider.style.transform = 'translateX(' + transformValue + ')';

        // Update the active dot
        updateDots();
    }

    function updateDots() {
        const dots = dotContainer.children;
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[slideIndex].classList.add('active');
    }

    // Create dots based on the number of slides
    for (let i = 0; i < slider.children.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotContainer.appendChild(dot);
        dot.addEventListener('click', function() {
            slideIndex = i;
            const transformValue = -slideIndex * 100 + '%';
            slider.style.transform = 'translateX(' + transformValue + ')';
            updateDots();
        });
    }

    setInterval(showSlides, 2000);

// tabss
function openTab(tabId) {
    var tabContents = document.getElementsByClassName('tab-details');
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }

    var tabButtons = document.querySelectorAll('.products-tabs button');
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove('active');
    }

    document.getElementById(tabId).style.display = 'block';

    event.currentTarget.classList.add('active');
  }

  openTab('tab1');