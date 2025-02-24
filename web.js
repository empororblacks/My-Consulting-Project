document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById("menu-icon");
  const nav = document.getElementById("nav");
  const closeIcon = document.getElementById("close-icon");

  const toggleNav = () => {
    nav.classList.toggle("active");
  };

  menuIcon.addEventListener("click", toggleNav);
  closeIcon.addEventListener("click", toggleNav);

  let slideIndex = 0;
  const showSlides = () => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  };
  showSlides();
});
