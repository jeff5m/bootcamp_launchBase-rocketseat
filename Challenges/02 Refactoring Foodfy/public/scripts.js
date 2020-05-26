const recipeCards = document.querySelectorAll('.recipeCard')

let selectedRecipe = 0

for (let i = 0; i < recipeCards.length; i++) {
	recipeCards[i].setAttribute('index', i)
	recipeCards[i].addEventListener('click', function () {

		selectedRecipe = this.getAttribute('index')

		window.location.href=`/recipes/${selectedRecipe}`

	});
}