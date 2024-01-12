
document.querySelector('.js-ham').addEventListener( 'click' , ()=>  {
  let nav = document.querySelector(".js-nav-2");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
})