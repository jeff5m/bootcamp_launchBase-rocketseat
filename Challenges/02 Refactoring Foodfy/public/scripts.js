const recipeCards = document.querySelectorAll('.recipeCard')

for (let i = 0; i < recipeCards.length; i++) {
	let recipeId = i
	recipeCards[i].addEventListener('click', function () {
		
		window.location.href=`/recipes/${recipeId}`
	});
}