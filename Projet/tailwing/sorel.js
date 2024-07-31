var modal = document.getElementById("imageModal");

// pour selectionner la balise image
var modalImg = document.getElementById("modalImage");

var productCards = document.querySelectorAll(".product-card");


// pour chaque image clique, on affiche
productCards.forEach((card)  => {
  card.addEventListener("click", function() {
    let bgImage = window.getComputedStyle(card).backgroundImage;
    var imageUrl = bgImage.slice(5, -2); // Extract the URL from the background-image style
    modal.style.display = "block";
    modalImg.src = imageUrl;
  });
});



// fermer la photo si on click dans le vide
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Au cas ou tu veux ajouter la X pour fermer

var span = document.getElementsByClassName("close")[0];

// Cliquer sur la croix pour fermer
span.onclick = function() { 
  modal.style.display = "none";
}