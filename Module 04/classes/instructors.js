const fs = require('fs');
const data = require('./data.json');
const { age } = require('./utils');
const Intl = require ('intl');

// show
exports.show = function(req, res) {
	// req.query = is any query parameters.
	// req.body = is the actual body of the request
	// req.params = is route parameters. Can catch more than one
	
	const { id } = req.params;

	const foundInstructor = data.instructors.find(function(instructors){
		return instructors.id == id;
	});

	if(!foundInstructor) {
		return res.send('Instructor not found');
	}
	
	const instructor = {
		...foundInstructor,
		age: age(foundInstructor.birth),
		services: foundInstructor.services.split(','),
		created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at),
	};

	return res.render('instructors/show', { instructor });
};

// create
exports.post = function(req, res) {
	const keys = Object.keys(req.body); // return only object keys 
	
	for (let key of keys) {
		if (req.body[key] == '') {
			return res.send('Please, fill all the fields!');
		}
	}

	let { avatar_url, birth, name, services, gender } = req.body;

	birth = Date.parse(birth);
	const created_at = Date.now();
	const id = Number(data.instructors.length + 1);

	
	data.instructors.push({
		id,
		avatar_url,
		name,
		birth,
		gender,
		services,
		created_at
	});

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if(err) return res.send('Wright file error!');

		return res.redirect('/instructors');
	});

	// return res.send(req.body);
};

// update


// delete

