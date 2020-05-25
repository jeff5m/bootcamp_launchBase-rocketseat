const modalOverlay = document.querySelector('.modal-overlay');
const recipeCards = document.querySelectorAll('.recipeCard');

console.log(location.pathname);

for (let i = 0; i < recipeCards.length; i++) {
	recipeCards[i].addEventListener('click', function () {
		const recipeId = recipeCards[i].getAttribute('id');
		const recipeTitle = recipeCards[i].querySelector('.recipeTitle').innerHTML;
		const chefName = recipeCards[i].querySelector('.chefName').innerHTML;

		modalOverlay.classList.add('active');
		modalOverlay.querySelector('img').src = `assets/${recipeId}.png`;
		modalOverlay.querySelector('h3').innerText = `${recipeTitle}`;
		modalOverlay.querySelector('p').innerText = `${chefName}`;
	});
}

document.querySelector('.closeButton').addEventListener('click', function () {
	modalOverlay.classList.remove('active');
});
