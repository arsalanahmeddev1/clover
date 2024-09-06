let header = document.querySelector('.header');
let topBar = document.querySelector('.primary-top-bar');
if (topBar) {
  if (window.scrollY === 0) {
    header.style.top = '41px'; // Position the header at the top
  }
  if (window.innerWidth <= 480) {
    header.style.top = '61px'; 
  }
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 5) {
      header.style.top = '0'; // Position the header at the top
    } else if (this.window.innerWidth <= 480) {
      header.style.top = '61px';
    } else {
      header.style.top = '41px';
    }
  });
}
// mobile menu 
// Cache DOM elements
let navs = document.querySelectorAll('.primary-navs li a');
let crossBtns = document.querySelectorAll('.menu-toggle');
let sidebars = document.querySelectorAll('.side-bar-drop-down');
let primaryNavs = document.querySelector('.primary-navs');

// Function to handle click on nav links
function handleNavClick(event) {
  event.stopPropagation(); // Prevent the event from propagating

  // Check if the clicked link is already active
  const isActive = event.currentTarget.classList.contains('active');

  // Remove 'active' class from all links
  navs.forEach(nav => nav.classList.remove('active'));

  // Toggle 'active' class on the clicked link based on its previous state
  if (!isActive) {
    event.currentTarget.classList.add('active'); // Add active class if it wasn't active
  }
}

// Function to handle click on cross buttons
function handleCrossBtnClick(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up

  console.log('Cross button clicked'); // Debug log to check button clicks

  // Remove 'active' class from all nav links
  navs.forEach(nav => nav.classList.remove('active'));
}

// Function to handle click outside of primary navigation and sidebars
function handleClickOutside(event) {
  if (
    !primaryNavs.contains(event.target) &&
    !Array.from(sidebars).some(sidebar => sidebar.contains(event.target))
  ) {
    navs.forEach(nav => nav.classList.remove('active'));
  }
}

// Attach event listeners
navs.forEach(nav => nav.addEventListener('click', handleNavClick));
crossBtns.forEach(btn => btn.addEventListener('click', handleCrossBtnClick));
document.addEventListener('click', handleClickOutside);

// Ensure clicks inside inner-drop-navs do not close the dropdown
document.querySelectorAll('.inner-drop-navs a').forEach(link => {
  link.addEventListener('click', event => event.stopPropagation());
});

// mobile menu end


// for lazy load in images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.setAttribute('loading', 'lazy');
});
$('.dual-slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.dual-slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  // infinite: false,
});
$('.dual-slider-for').slick({
  // infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.dual-slider-nav'
});

// bubble button 
document.addEventListener('DOMContentLoaded', function () {
  // Handle button click to toggle the hidden content
  document.querySelectorAll('.butbble-btn-lg').forEach(button => {
    button.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the event from propagating to document

      // Close any open hidden content
      document.querySelectorAll('.butbble-hidden-content').forEach(content => {
        content.classList.remove('active');
      });

      // Open the clicked button's corresponding hidden content
      const hiddenContent = this.closest('.butbble-wrapper').querySelector('.butbble-hidden-content');
      hiddenContent.classList.add('active');
    });
  });

  // Handle click outside to close the hidden content
  document.addEventListener('click', function () {
    document.querySelectorAll('.butbble-hidden-content').forEach(content => {
      content.classList.remove('active');
    });
  });

  // Prevent closing when clicking inside the hidden content
  document.querySelectorAll('.butbble-hidden-content').forEach(content => {
    content.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the event from propagating to document
    });
  });

  // Handle click on the cross button to close the hidden content
  document.querySelectorAll('.cross-btn').forEach(crossButton => {
    crossButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the event from propagating to document

      // Close the closest hidden content
      const hiddenContent = this.closest('.butbble-hidden-content');
      hiddenContent.classList.remove('active');
    });
  });
});
// dual slider
$(".slider-nav").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: ".slider-single", // Link slider-nav with slider-single and slider-single-2
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true,
  infinite: false,
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right',
  speed: 1200, // Adjust the speed for smoothness
  cssEase: 'ease-in-out',
  fade: false,
});
$(".slider-single").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  useTransform: true,
  asNavFor: ".slider-nav", // Link slider-single with slider-nav and slider-single-2
  draggable: true,
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right',
  speed: 1200, // Adjust the speed for smoothness
  cssEase: 'ease-in-out',
  infinite: false,
});
$(document).ready(function () {
  $(".option").click(function () {
      // Remove active class from all .option and .option-bottom-content elements
      $(".option").removeClass("active");
      $(".option-bottom-content").removeClass("active");
      
      // Add active class to the clicked .option
      $(this).addClass("active");

      // Get the index of the clicked .option
      var index = $(this).index();

      // Add active class to the corresponding .option-bottom-content based on index
      $(".option-bottom-content").eq(index).addClass("active");
  });
  
});


// acc-mobile-slider 
$(".accordion-slider-mobile").slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  // centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".business-slider").slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  // centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '.b-arrow-left',
  nextArrow: '.b-arrow-right',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});
$('.tab-slider').slick({
  dots: true,
  customPaging: function (slider, i) {
      // Define the custom text for each dot based on the index
      const customTitles = ['Restaurants', 'Retail', 'Services'];
      return `<button type="button">${customTitles[i]}</button>`;
  },
  // Additional Slick settings as needed
  arrows: true, // If you want navigation arrows
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
});
$('.tab-slider-ap').slick({
  dots: true,
  customPaging: function (slider, i) {
      // Define the custom text for each dot based on the index
      const customTitles = ['Instore', 'Onthego', 'Online', 'Onthephone'];
      return `<button type="button">${customTitles[i]}</button>`;
  },
  // Additional Slick settings as needed
  arrows: true, // If you want navigation arrows
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
});
// acc-mobile-slider end
const tabs = document.querySelectorAll('.nav-link');
const accordionBtns = document.querySelectorAll('.center-content-inner-wrap');

let previousIndex = null; // Track the index of the previously opened button

accordionBtns.forEach((accordionBtn, index) => {
  accordionBtn.setAttribute('data-index', index); // Assign an index to each button

  accordionBtn.addEventListener('click', function (e) {
    // Remove 'acc-activated' class from all buttons
    accordionBtns.forEach(btn => btn.classList.remove('acc-activated'));

    // Add 'acc-activated' class to the currently clicked button
    e.target.classList.add('acc-activated');

    // Find the active tab
    const activeTab = document.querySelector('.nav-link.active');
    if (!activeTab) return; // Exit if no active tab is found

    // Get the target ID from the active tab
    const targetId = activeTab.getAttribute('data-bs-target');
    const container = document.querySelector(targetId);

    if (!container) return; // Exit if no container is found

    // Find the accordions inside the active tab
    const targetAccordions = container.querySelectorAll('.accordion-button');
    const targetAccordionsCollapse = container.querySelectorAll('.accordion-collapse');

    // If there is a previously opened accordion, reset its state
    if (previousIndex !== null && previousIndex !== index) {
      const prevAccordionButtons = container.querySelectorAll('.accordion-button');
      const prevAccordionCollapses = container.querySelectorAll('.accordion-collapse');

      prevAccordionButtons.forEach((accordionButton, idx) => {
        if (idx === previousIndex) {
          accordionButton.classList.add('collapsed');
        }
      });

      prevAccordionCollapses.forEach((accordionCollapse, idx) => {
        if (idx === previousIndex) {
          accordionCollapse.classList.add('collapse');
          accordionCollapse.classList.remove('show'); // Ensure 'show' is removed
        }
      });
    }

    // Remove 'collapsed' class from target accordion buttons for this button's index
    targetAccordions.forEach((accordionButton, idx) => {
      if (idx === index) {
        accordionButton.classList.remove('collapsed');
      }
    });

    // Remove 'collapse' and 'show' classes from target accordion collapses for this button's index
    targetAccordionsCollapse.forEach((accordionCollapse, idx) => {
      if (idx === index) {
        accordionCollapse.classList.remove('collapse');
        accordionCollapse.classList.add('show');
      }
    });

    // Update the previousIndex to the current button's index
    previousIndex = index;
  });
});


