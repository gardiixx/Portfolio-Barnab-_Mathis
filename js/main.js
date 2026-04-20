(function () {
  var btn = document.getElementById("contact-submit");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var nom     = document.getElementById("contact-nom").value.trim();
    var objet   = document.getElementById("contact-objet").value.trim();
    var message = document.getElementById("contact-message").value.trim();

    if (!nom || !objet || !message) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    var sujet = encodeURIComponent(objet);
    var corps = encodeURIComponent(
      "De : " + nom + "\n\n" +
      "Message :\n" + message
    );

    window.location.href = "mailto:mathisbarnabe.pro@gmail.com?subject=" + sujet + "&body=" + corps;
  });
})();
