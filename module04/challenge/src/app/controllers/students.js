const { date, grade, age } = require('../../lib/utils');
const Student = require('../models/Student')

module.exports = {
	index(req, res) {
		Student.all(function(students) {
			return res.render('students/index', {students});
		})
	},
	create(req, res) {
		Student.teachersSelectOptions(function(options) {
			return res.render('students/create', { teacherOptions: options });
		})
	},
	post(req, res) {
		const keys = Object.keys(req.body);

		for (let key of keys) {
			if (req.body[key] == '') {
				return res.send('Por favor, preencha todos os campos');
			}
		}

		Student.create(req.body, function(student) {
			res.redirect(`students/${student.id}`)
		})
	},
	show(req, res) {
		Student.find(req.params.id, function(student) {
			if(!student) return res.send('Estudante não encontrado!')

			student.birthDay = date(student.birth_date).birthDay
			student.birth_date = age(student.birth_date)
			student.grade = grade(student.grade)

			return res.render ('students/show', {student})
		})
	},
	edit(req, res) {
		Student.find(req.params.id, function(student) {
			if(!student) return res.send('Estudante não encontrado!')

			student.birth_date = date(student.birth_date).iso

			Student.teachersSelectOptions(function(options) {
				return res.render('students/edit', { student, teacherOptions: options });
			})
		})
	},
	update(req, res) {
		const keys = Object.keys(req.body);

		for (let key of keys) {
			if (req.body[key] == '') {
				return res.send('Por favor, preencha todos os campos');
			}
		}

		Student.update(req.body, function() {
			res.redirect(`/students/${req.body.id}`)
		})
	},
	delete(req, res) {
		Student.delete(req.body.id, function() {
			return res.redirect('/students')
		})
	},
};
