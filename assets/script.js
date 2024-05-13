// Création du bouton
const button = document.createElement("button");
button.textContent = "Click-me";

// Ajout d'une alerte au clic du bouton 
button.addEventListener("click", displayQuote);

// Ajout du bouton au corps du document
document.body.appendChild(button);


// Ajout du bouton au corps du document
body.appendChild(button);

// Ajout du corps du document au document
document.documentElement.appendChild(body);

async function fetchQuote() {
    try {
        const response = await fetch('https://thatsthespir.it/api');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération de la citation :', error);
        throw error;
    }
}
async function displayQuote() {
    try {
        const quoteData = await fetchQuote();
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = `
            <blockquote>
                <p>${quoteData.quote}</p>
                <footer>${quoteData.author}</footer>
            </blockquote>
        `;
    } catch (error) {
        // Gérer l'erreur
    }
}






// async function fetchRandomQuote() {
//     try {
//         const response = await fetch('https://thatsthespir.it/api');
//         if (!response.ok) {
//             throw new Error('Erreur lors de la récupération de la citation');
//         }
//         const data = await response.json();
//         return data.content;
//     } catch (error) {
//         console.error(error.message);
//         return null;
//     }
// }

// async function displayRandomQuote() {
//     const quote = await fetchRandomQuote();
//     if (quote) {
//         alert(quote);
//     } else {
//         alert('Erreur lors de la récupération de la citation');
//     }
// }
