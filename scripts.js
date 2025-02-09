function filterCards() {
    console.log("Búsqueda iniciada");
    
    var input, filter, cards, card, title, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();  // Convertir a mayúsculas para comparar sin distinción
    cards = document.getElementsByClassName('card-item');  // Seleccionamos todas las tarjetas

    console.log("Filtro de búsqueda:", filter);

    // Primero ocultamos todas las tarjetas
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }

    // Luego, mostramos solo las tarjetas que coinciden
    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        title = card.getElementsByClassName('card-title')[0];  // Obtener el título de cada tarjeta
        if (title) {
            // Comprobar si el título contiene el texto de búsqueda
            if (title.textContent.toUpperCase().indexOf(filter) > -1) {
                card.style.display = "";  // Mostrar tarjeta si coincide
            }
        }
    }
}
