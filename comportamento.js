// Rolagem suave no menu

const links = document.querySelectorAll("nav a");
  links.forEach(link => {

  link.addEventListener("click", function(event){

event.preventDefault();

const section = document.querySelector(this.getAttribute("href"));

section.scrollIntoView({
behavior: "smooth"
         });
     });
 });

 // Animação nos cards ao passar o mouse

    const cards = document.querySelectorAll(".card");

     cards.forEach(card => {

         card.addEventListener("mouseenter", () => {

             card.style.transform = "scale(1.05)";
             card.style.transition = "0.3s";
             });

   card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";
         });
        });

 // Mensagem ao clicar no email

    const email = document.querySelector("#contact p");

     email.addEventListener("click", () => {

    alert("Email copiado! Entre em contato comigo.");

     navigator.clipboard.writeText("kdavidcorreia@gmail.com");
    });