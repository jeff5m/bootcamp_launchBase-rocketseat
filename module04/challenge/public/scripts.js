const currentPage = location.pathname;
const menuItems = document.querySelectorAll('header .links a');

for (let item of menuItems) {
	if(currentPage.includes(item.getAttribute('href'))) {
		item.classList.add('active');
	}
}

function paginate(selectedPage, totalPages) {
	let pages = []
	let oldPage
	
	for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
		const firstsAndLastPages = (currentPage == 1 || currentPage == 2) || (currentPage == totalPages || currentPage == totalPages - 1)
		const pagesAfterSelectedPage = currentPage <= selectedPage + 1
		const pagesBeforeSelectedPage = currentPage >= selectedPage - 1

		if (firstsAndLastPages || pagesAfterSelectedPage && pagesBeforeSelectedPage) {
			if (oldPage && currentPage - oldPage > 2) {
				pages.push('...')
			}
			if (oldPage && currentPage - oldPage == 2) {
				pages.push(oldPage + 1)
			}
			pages.push(currentPage)
			oldPage = currentPage
		}		
	}

	return pages
}

function createPagination(pagination) {
	const page = Number(pagination.dataset.page)
	const total = Number(pagination.dataset.total)
	const pages = paginate(page, total)

	const filter = pagination.dataset.filter

	let elements = ''

	for (let page of pages) {
		if (String(page).includes('...')) {
			elements += `<span>${page}</span>`
		} else {
			if(filter) {
				elements += `<a href='?page=${page}&filter=${filter}'>${page}</a>`
			} else {
				elements += `<a href='?page=${page}'>${page}</a>`
			}
		}
	}

	pagination.innerHTML = elements	
}

const pagination = document.querySelector('.pagination')

createPagination(pagination)