// Création du corps du document
const body = document.createElement("body");

// Création du bouton
const button = document.createElement("button");
button.textContent = "Click-me";

// Ajout d'une alerte au clic du bouton 
button.addEventListener("click", function() {
    alert("Vous avez cliqué sur le bouton !");
});

// Ajout du bouton au corps du document
body.appendChild(button);

// Ajout du corps du document au document
document.documentElement.appendChild(body);

async function fetchRandomQuote() {
    try {
        const response = await fetch('https://thatsthespir.it/api');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération de la citation');
        }
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

async function displayRandomQuote() {
    const quote = await fetchRandomQuote();
    if (quote) {
        alert(quote);
    } else {
        alert('Erreur lors de la récupération de la citation');
    }
}

displayRandomQuote();
