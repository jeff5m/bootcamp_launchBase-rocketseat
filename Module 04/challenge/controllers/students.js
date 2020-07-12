const fs = require('fs');
const data = require('../data.json');
const { age, graduation, class_type, date } = require('../utils');
const Intl = require('intl');

exports.index = function(req, res) {
	return res.render('students/index', { students: data.students });
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
	const id = Number(data.students.length + 1);
	const created_at = Date.now();


	data.students.push({ 
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
    
		return res.redirect('/students');

	});
};

exports.create = function(req, res) {
	return res.render('students/create');
};

//show
exports.show = function(req, res) {
	const { id } = req.params;

	const foundStudent = data.students.find(function(student){
		return student.id == id;
	});

	if(!foundStudent) {
		return res.send('Professor não encontrado');
	}

	const student = {
		...foundStudent,
		age: age(foundStudent.birth),
		degree: graduation(foundStudent.degree),
		class_type: class_type(foundStudent.class_type),
		lectures: foundStudent.lectures.split(','),
		created_at: new Intl.DateTimeFormat('pt-BR').format(foundStudent.created_at),
	};

	return res.render('students/show', { student });
};

//edit
exports.edit = function(req, res) {
	const { id } = req.params;

	const foundStudent = data.students.find(function(student){
		return student.id == id;
	});

	if(!foundStudent) {
		return res.send('Professor não encontrado');
	}

	const student = {
		...foundStudent,
		// degree: graduation(foundStudent.degree),
		birth: date(foundStudent.birth),
	};

	return res.render('students/edit', { student });
};

//put
exports.update = function(req, res) {
	const { id } = req.params;
	let index = 0;

	const foundStudent = data.students.find(function(student, foundIndex) {
		if (id == student.id) {
			index = foundIndex;
			return true;
		}
	});

	if (!foundStudent) return res.send('Student not Found!');

	const student = {
		...foundStudent,
		...req.body,
		id: Number(req.body.id),
		birth: Date.parse(req.body.birth)
	};

	data.students[index] = student;

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if(err) return res.send('Write error!');

		return res.redirect(`/students/${id}`);
	});
};

exports.delete = function(req, res) {
	const { id } = req.body;

	const filteredStudents = data.students.filter(function(student) {
		return student.id != id;
	});

	data.students = filteredStudents;

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if(err) return res.send('Write file error!');
	});

	return res.redirect('/students');
};