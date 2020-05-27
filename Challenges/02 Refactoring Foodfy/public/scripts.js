const recipeCards = document.querySelectorAll('.recipeCard')

const currentPage = location.pathname;
const menuLinks = document.querySelectorAll('.navBar .link');

for (link of menuLinks) {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
}

for (let i = 0; i < recipeCards.length; i++) {
	let recipeId = i
	recipeCards[i].addEventListener('click', function () {

		window.location.href = `/recipes/${recipeId}`
	});
}

const buttons = document.getElementsByTagName('button')

for (let button of buttons) {
	button.addEventListener('click', function () {
		if (!(button.classList.contains('clicked'))){
			button.classList.add('clicked')
			button.innerHTML = 'Mostrar'
		} else {
			button.classList.remove('clicked')
			button.innerHTML = 'Esconder'
		}
	})
}

// adicionar classe ao botão e pelo css, esconder ou mostrar conteudo da tag p 
// que vem logo apos o elemento com a classe .clicked