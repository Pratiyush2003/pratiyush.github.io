const service = [
  {
    image: "bi bi-code-square js-skill",
    heading: "HTML & CSS",
    paragraph: "HTML 5 and Cascading style sheet",
  },
  {
    image: "bi bi-braces js-skill",
    heading: "JAVASCRIPT",
    paragraph: "To add functionality I use Javascript",
  },
  {
    image: "bi bi-github js-skill",
    heading: "Git & Github",
    paragraph: "Git & Github for version control",
  },
  {
    image: "bi bi-bootstrap js-skill",
    heading: "Bootstrap",
    paragraph: "Bootstrap for building responive website",
  },
  {
    image: "bi bi-globe2 js-skill",
    heading: "React and Redux",
    paragraph: "React and Redux for state managemanet",
  },
  {
    image: "bi bi-database js-skill",
    heading: "Google Firebse",
    paragraph: "Google Firebase for backend service",
  },
];

document.querySelector('.js-ham').addEventListener( 'click' , ()=>  {
  let nav = document.querySelector(".js-nav-2");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
})



let skillsHTML = "";

service.forEach((p) => {
  skillsHTML += `
      <div class="col">
          <div class="js-box p-3">
            <i class="${p.image} js-skill"></i>
            <h5>${p.heading}</h5>
            <p class="lead js-skill-font">${p.paragraph}</p>
          </div>
        </div>
      `;
});

document.querySelector(".js-generated-html").innerHTML = skillsHTML;


