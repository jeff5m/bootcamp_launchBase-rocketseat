const courses = document.querySelectorAll('.courseCard');

for (let i=0;i<courses.length;i++) {
	courses[i].addEventListener('click', function() {
		const courseId = courses[i].getAttribute('id');
		window.location.href = `/courses/${courseId}`;
	});
}
