const fs = require('fs');
const data = require('./data.json');

//create
exports.post = function(req, res) {
	const keys = Object.keys(req.body);

	for(let key of keys) {
		if (req.body[key] == '') {
			return res.send('Por favor, preencha todos os campos');
		}
	}
  
	let { avatar_url, name, birth, degree, class_type, lectures } = req.body;
  
	birth = Date.parse(birth);
	const id = Number(data.teachers.length + 1);
	const created_at = Date.now();


	data.teachers.push({ 
		id,
		avatar_url,
		name,
		birth,
		degree,
		class_type,
		lectures,
		created_at
	});

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err){
		if (err){
			return res.send('Ocorreu um erro, tente novamente');
		}
    
		return res.redirect('/teachers');

	});
};

//show
exports.show = function(req, res) {
	const { id } = req.params;

	const foundTeacher = data.teachers.find(function(teacher){
		return teacher.id == id;
	});

	if(!foundTeacher) {
		return res.send('Professor não encontrado');
	}

	const teacher = {
		...foundTeacher,
		age: '',
		degree: '',
		class_type: '',
		lectures: '',
		created_at: '',
	};

	return res.render('teachers/show', { teacher });
};

//edit
