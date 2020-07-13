const fs = require('fs');
const data = require('../data.json');
const { date, grade, age } = require('../utils');

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
  
	let id = 1;
	const lastStudent = data.students[data.students.length - 1];

	if (lastStudent) 
		id = lastStudent.id + 1;

	let birth = Date.parse(req.body.birth);
	let hours = Number(req.body.hours);
	
	data.students.push({ 
		id,
		...req.body,
		birth,
		hours
	});

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err){
		if (err){
			return res.send('Ocorreu um erro, tente novamente');
		}
    
		return res.redirect(`/students/${id}`);

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
		grade: grade(foundStudent.grade),
		birth: age(foundStudent.birth),
		birthDay: date(foundStudent.birth).birthDay
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
		grade: grade(foundStudent.grade),
		birth: date(foundStudent.birth).iso,
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