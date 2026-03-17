// ==========================
// SCROLL SUAVE (delegação)
// ==========================

document.querySelector("nav").addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (!link) return;

    const targetId = link.getAttribute("href");

    if (targetId.startsWith("#")) {
        e.preventDefault();

        const section = document.querySelector(targetId);

        section?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});

// ==========================
// ANIMAÇÃO DOS CARDS (CSS FIRST)
// ==========================

const card = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("card-hover");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("card-hover");
    });
});

// ==========================
// COPIAR EMAIL (mais preciso)
// ==========================

const emailLink = document.querySelector('a[href^="mailto"]');

    if (emailLink) {
    emailLink.addEventListener("click", async (e) => {
        e.preventDefault();

        const email = emailLink.textContent.trim();

        try {
            await navigator.clipboard.writeText(email);
            alert("Email copiado! 🚀");
                        } catch (err) {
                             alert("Erro ao copiar email.");
                         }
                    });
               }// Rolagem suave no menu

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

    const showToast = (msg) => {
    const toast = document.createElement("div");
    toast.textContent = msg;
    toast.className = "toast";

    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2000);
};

