// Sticky Navigation Menu Js
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.addEventListener("scroll", function() {
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block"; // Show scroll button
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none"; // Hide scroll button
  }
  
  // Fading effect for home section text
  let homeContent = document.querySelector(".home-content");
  let scrollPosition = window.scrollY;
  let homeOffset = homeContent.offsetTop;
  let homeHeight = homeContent.offsetHeight;

  if (scrollPosition >= homeOffset && scrollPosition <= homeOffset + homeHeight) {
    let opacity = 1 - (scrollPosition - homeOffset) / homeHeight;
    homeContent.style.opacity = opacity;
  }
});

// Delay function to add delay before displaying the content
window.onload = function() {
  setTimeout(function() {
    document.getElementById("about").classList.remove("section-hidden");
  }, 10000); // Adjusted delay time to 10000 milliseconds (10 seconds)
};

document.addEventListener('DOMContentLoaded', function() {
  // Event listener for the "Hire Me" button
  var hireMeButton = document.querySelector('.button button');
  hireMeButton.addEventListener('click', function() {
      alert('Thank you for your interest!');
  });

  // Event listener for the "Download CV" button
  var downloadCVButton = document.querySelector('.download-cv-btn');
  downloadCVButton.addEventListener('click', function() {
      // Add functionality to download CV
      // For example:
      window.location.href = 'path_to_your_cv_file.pdf';
  });


  // Display text elements one by one
  var textOne = document.querySelector('.text-one');
  var textTwo = document.querySelector('.text-two');
  var textThree = document.querySelector('.text-three');

  setTimeout(function() {
      textOne.classList.add('visible');
  }, 500); // Delay for the first text

  setTimeout(function() {
      textTwo.classList.add('visible');
  }, 1500); // Delay for the second text

  setTimeout(function() {
      textThree.classList.add('visible');
  }, 2500); // Delay for the third text
});


// Side Navigation Menu Js
document.addEventListener('DOMContentLoaded', function() {
  let body = document.querySelector("body");
  let navBar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");
  let menu = document.querySelector(".menu");

  menuBtn.onclick = function() {
    console.log("Menu button clicked");
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    menu.style.left = "0"; 
  }

  cancelBtn.onclick = function() {
    console.log("Cancel button clicked");
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    menu.style.left = "-100%";
  }

  // Side Navigation Bar Close While We click On Navigation Links
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      console.log("Navigation link clicked");
      navBar.classList.remove("active");
      menuBtn.style.opacity = "1";
      menuBtn.style.pointerEvents = "auto";
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById("projectModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Project data
  var projects = {
    'web-development': {
      title: "Welcome 🖐 to the aesthetic web gallery",
      description: "It is a simple and beautiful gallery with aesthetic images using HTML, CSS & JS.",
      duration: "2 Days",
      technologies: "HTML, CSS, JavaScript",
      role: "FrontEnd Developer",
      link: "file:///C:/Users/nivit/Desktop/web%20gallery/index.html",
      screenshot: "C:\\Users\\nivit\\OneDrive\\Pictures\\project.png"
    },
    'dinosaur-game': {
      title: "Welcome to the Dinosaur Game 🦕",
      description: "This web app allows you to play the dinosaur game where you have to make the dinosaur jump and save himself from the cactus. If the dinosaur touches the cactus, the player loses. This is a fun game to play. Also, a good game to get started with Javascript.",
      duration: "3 Days",
      technologies: "HTML, CSS, JavaScript",
      role: "Game Developer",
      link: "file:///C:/Users/nivit/Desktop/Game/index.html",
      screenshot: "C:\\Users\\nivit\\OneDrive\\Pictures\\pro2,png.png"
    },
    'to-do-list': {
      title: "To-Do List",
      description: "A simple and efficient To-Do List app to help you manage your tasks. Built using HTML, CSS, and JavaScript, this app lets you add, delete, and mark tasks as complete.",
      duration: "1 Day",
      technologies: "HTML, CSS, JavaScript",
      role: "FrontEnd Developer",
      link: "file:///C:/Users/nivit/Desktop/to-do-List-main/index.html",
      screenshot: "C:\\Users\\nivit\\OneDrive\\Pictures\\list.png"
    }
  };

  // Set up the click event for each project box
  Object.keys(projects).forEach(function(key) {
    document.getElementById(key).onclick = function() {
      var project = projects[key];
      document.getElementById("modalTitle").innerText = project.title;
      document.getElementById("modalDescription").innerText = project.description;
      document.getElementById("modalDuration").innerHTML = "<strong>Project Duration:</strong> " + project.duration;
      document.getElementById("modalTechnologies").innerHTML = "<strong>Technologies Used:</strong> " + project.technologies;
      document.getElementById("modalRole").innerHTML = "<strong>Role:</strong> " + project.role;
      document.getElementById("modalLink").href = project.link;
      document.getElementById("projectScreenshot").src = project.screenshot;
      modal.style.display = "block";
    };
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});



// Skill Section Animation
const skillsSection = document.getElementById('skills');
const skillNumbers = document.querySelectorAll('.skills .boxes .box .per span.num');

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillNumbers.forEach(num => {
        const target = +num.getAttribute('data-num');
        const increment = target / 100; // Adjust this value for smoother animations
        let count = 0;

        const updateCount = () => {
          count += increment;
          if (count < target) {
            num.innerText = `${Math.ceil(count)}%`;
            requestAnimationFrame(updateCount);
          } else {
            num.innerText = `${target}%`;
          }
        }

        updateCount();

        num.style.setProperty('--progress-width', `${target}%`);
      });
      observer.unobserve(skillsSection); // Stop observing after the animation runs once
    }
  });
}, { threshold: 0.5 });

skillObserver.observe(skillsSection);
