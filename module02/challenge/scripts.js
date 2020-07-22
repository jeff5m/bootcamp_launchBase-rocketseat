const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.courseCard');
const modal = document.querySelector('.modal');

for (let i=0;i<courses.length;i++) {
	const courseId = courses[i].getAttribute('id');
	courses[i].addEventListener('click', function() {
		modalOverlay.classList.add('active');
		modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`;

		document.getElementById('max').addEventListener('click', function() {
			if (!(modal.classList.contains('maximize'))){
				modal.classList.add('maximize');
			} else {
				modal.classList.remove('maximize');
			}
		});
	});
}

document.querySelector('.close-modal').addEventListener('click', function() {
	modalOverlay.classList.remove('active');
	modalOverlay.querySelector('iframe').src ='';
});
