var typed = new Typed(".text", {
  strings: ["Programming", "Cybersecurity", "Web Development"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//------------------------------------------------------------------------------------------------------------------------------------------------------

function sliding_menu() {
  document.getElementById("myLinks").classList.toggle("show");
}

document.addEventListener("click", function (event) {
  var menu = document.getElementById("myLinks");
  var button = document.getElementById("btn-btn");

  if (!menu.contains(event.target) && event.target !== button) {
    menu.classList.remove("show");
  }
});
