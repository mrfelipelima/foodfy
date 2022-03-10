const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card-receita');

for (let card of cards) {
    card.addEventListener('click', function () {
        window.location.href = `/recipe/${recipeId}`
    })
}