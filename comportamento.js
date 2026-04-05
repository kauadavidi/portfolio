function initSmoothScroll() {
  const headerNav = document.querySelector("nav");
  
  if (!headerNav) return;
  headerNav.addEventListener("click", handleNavClick);
}

function handleNavClick(event) {
  const navLink = event.target.closest("a");

  if (!navLink) return;

  const targetId = navLink.getAttribute("href");

  if (isExternalLink(navLink)) {
    return; 
  }

  if (isAnchorLink(targetId)) {
    event.preventDefault();
    scrollToElement(targetId);
  }
}
function isExternalLink(link) {
  const href = link.getAttribute("href");
  return href && (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));
}

function isAnchorLink(href) {
  return href && href.startsWith("#");
}

function scrollToElement(elementId) {
  const targetElement = document.querySelector(elementId);
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

initSmoothScroll();

function initEmailCopy() {
  const emailLink = document.querySelector('a[href^="mailto"]');

  if (!emailLink) return;

  emailLink.addEventListener("click", handleEmailClick);
}

async function handleEmailClick(event) {
  event.preventDefault();

  const emailAddress = "kauadavidcorreia@gmail.com";

  try {
    await navigator.clipboard.writeText(emailAddress);
    showEmailCopySuccess();
  } catch (error) {
    console.error("Erro ao copiar email:", error);
    showEmailCopyError();
  }
}

function showEmailCopySuccess() {
  alert("Email copiado! 🚀");
}

function showEmailCopyError() {
  alert("Erro ao copiar email. Tente novamente.");
}

initEmailCopy();
