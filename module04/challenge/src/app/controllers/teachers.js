const { date, graduation, age, class_type } = require('../../lib/utils');
const Teacher = require('../models/Teacher');

module.exports = {
	index(req, res) {
		const { filter } = req.query

		if (filter) {
			Teacher.findBy(filter, function(newTeachers) {
				return res.render('teachers/index', {newTeachers});	
			})
		} else {
			Teacher.all(function(newTeachers) {
				return res.render('teachers/index', {newTeachers});
			})
		}
	},
	create(req, res) {
		return res.render('teachers/create');
	},
	post(req, res) {
		const keys = Object.keys(req.body);

		for (let key of keys) {
			if (req.body[key] == '') {
				return res.send('Por favor, preencha todos os campos');
			}
		}
			
		Teacher.create(req.body, function (teacher) {
			return res.redirect(`teachers/${teacher.id}`);
		});

		return;
	},
	show(req, res) {
		Teacher.find(req.params.id, function(teacher) {
			if (!teacher) return res.send('Professor não encontrado!')

			teacher.birth_date = age(Date.parse(teacher.birth_date))
			teacher.education_level = graduation(teacher.education_level)
			teacher.class_type = class_type(teacher.class_type)
			teacher.subjects_taught = teacher.subjects_taught.split(',')
			teacher.created_at = date(teacher.created_at).format

			return res.render('teachers/show', {teacher})
		})
	},
	edit(req, res) {
		Teacher.find(req.params.id, function(teacher) {
			if (!teacher) return res.send('Professor não encontrado')

			teacher.birth_date = date(teacher.birth_date).iso

			return res.render('teachers/edit', {teacher})
		})
	},
	update(req, res) {
		const keys = Object.keys(req.body);

		for (let key of keys) {
			if (req.body[key] == '') {
				return res.send('Por favor, preencha todos os campos');
			}
		}

		Teacher.update(req.body, function() {
			return res.redirect(`/teachers/${req.body.id}`);
		})
	},
	delete(req, res) {
		Teacher.delete(req.body.id, function() {
			return res.redirect('/teachers')
		})
	},
};
