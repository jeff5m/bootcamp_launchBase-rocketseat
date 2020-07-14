const fs = require('fs');
const data = require('../data.json');
const { age, graduation, class_type, date } = require('../utils');
const Intl = require('intl');

exports.index = function(req, res) {
	const teachers = data.teachers;
	let newTeachers = new Array();
	
	for (let teacher of teachers) {
		const formatedLectures = teacher.lectures.split(',');

		newTeachers.push({
			...teacher,
			lectures: formatedLectures
		});
	}

	return res.render('teachers/index', { newTeachers });
};

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

exports.create = function(req, res) {
	return res.render('teachers/create');
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
		age: age(foundTeacher.birth),
		degree: graduation(foundTeacher.degree),
		class_type: class_type(foundTeacher.class_type),
		lectures: foundTeacher.lectures.split(','),
		created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
	};

	return res.render('teachers/show', { teacher });
};

//edit
exports.edit = function(req, res) {
	const { id } = req.params;

	const foundTeacher = data.teachers.find(function(teacher){
		return teacher.id == id;
	});

	if(!foundTeacher) {
		return res.send('Professor não encontrado');
	}

	const teacher = {
		...foundTeacher,
		// degree: graduation(foundTeacher.degree),
		birth: date(foundTeacher.birth).iso,
	};

	return res.render('teachers/edit', { teacher });
};

//put
exports.update = function(req, res) {
	const { id } = req.params;
	let index = 0;

	const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
		if (id == teacher.id) {
			index = foundIndex;
			return true;
		}
	});

	if (!foundTeacher) return res.send('Teacher not Found!');

	const teacher = {
		...foundTeacher,
		...req.body,
		id: Number(req.body.id),
		birth: Date.parse(req.body.birth)
	};

	data.teachers[index] = teacher;

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if(err) return res.send('Write error!');

		return res.redirect(`/teachers/${id}`);
	});
};

exports.delete = function(req, res) {
	const { id } = req.body;

	const filteredTeachers = data.teachers.filter(function(teacher) {
		return teacher.id != id;
	});

	data.teachers = filteredTeachers;

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if(err) return res.send('Write file error!');
	});

	return res.redirect('/teachers');
};