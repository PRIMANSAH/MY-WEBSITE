// JavaScript untuk Formulir Kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Mendapatkan data dari form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Proses pengiriman pesan (simulasi)
  const status = document.getElementById("formStatus");
  status.innerHTML = `Thanks, ${name}! your message has been sent.`;

  // Reset form setelah submit
  document.getElementById("contactForm").reset();
});
