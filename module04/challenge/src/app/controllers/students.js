const { date, grade, age } = require('../../lib/utils');

module.exports = {
	index(req, res) {
		return res.render('students/index');
	},
	create(req, res) {
		return res.render('students/create');
	},
	post(req, res) {
		const keys = Object.keys(req.body);

		for (let key of keys) {
			if (req.body[key] == '') {
				return res.send('Por favor, preencha todos os campos');
			}
		}

		let birth = Date.parse(req.body.birth);
		let hours = Number(req.body.hours);

		data.students.push({
			...req.body,
			birth,
			hours
		});

		return
	},
	show(req, res) {
		return
	},
	edit(req, res) {
		return
	},
	put(req, res) {
		const keys = Object.keys(req.body);

		for (let key of keys) {
			if (req.body[key] == '') {
				return res.send('Por favor, preencha todos os campos');
			}
		}

		let birth = Date.parse(req.body.birth);
		let hours = Number(req.body.hours);

		data.students.push({
			...req.body,
			birth,
			hours
		});

		return
	},
	delete(req, res) {
		return
	},
}
