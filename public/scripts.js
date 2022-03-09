const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card-receita');

for (let card of cards) {
    card.addEventListener('click', function () {
        const recipeId = card.getAttribute('id');
        const recipeTitle = card.querySelector('.title-receita').textContent
        const recipeAuthor = card.querySelector('.author-receita').textContent
        modalOverlay.classList.add('active');
        modalOverlay.querySelector('.recipe-img').src = `/assets/${recipeId}.png`
        modalOverlay.querySelector('.modal-recipe-title').textContent = recipeTitle;
        modalOverlay.querySelector('.modal-recipe-author').textContent = recipeAuthor;
    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active');
});