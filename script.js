// Funcoes relacionadas ao menu Header
function goToHome(){window.open('./index.html');}           // Abertura da pagina principal
function openContact(){window.open('wa.me/5562993882350');} // Abertura da API do WhatsApp
let block1 = document.getElementById("block1");
let home = document.getElementById("home");

block1.style.display = "none";

home.addEventListener('click', function(event)){ block1.style.display = "block"; }
