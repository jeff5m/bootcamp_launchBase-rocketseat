const fs = require('fs');
const data = require('../data.json');
const { age, date } = require('../utils');

exports.index = function(req, res) {
	const members = data.members;
	let newMembers = new Array();
	
	for (let i = 0; i < members.length; i++) {
		let formatedServices = members[i].services.split(',');
		
		newMembers.push({
			...members[i],
			services: formatedServices,	
		});
	}
	
	return res.render('members/index', { newMembers });
};

exports.show = function(req, res) {
	// req.query = is any query parameters.
	// req.body = is the actual body of the request
	// req.params = is route parameters. Can catch more than one
	
	const { id } = req.params;

	const foundMember = data.members.find(function(member){
		return member.id == id;
	});

	if(!foundMember) {
		return res.send('Member not found');
	}
	
	const member = {
		...foundMember,
		age: age(foundMember.birth),
	};

	return res.render('members/show', { member });
};

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
	const id = Number(data.members.length + 1);

	
	data.members.push({
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

		return res.redirect('/members');
	});

	// return res.send(req.body);
};

exports.create = function(req, res) {
	return res.render('members/create');
};

exports.edit = function(req, res) {
	
	const { id } = req.params;

	const foundMember = data.members.find(function(members){
		return members.id == id;
	});

	if(!foundMember) {
		return res.send('Member not found');
	}
	/*
			member.birth = timestamp
			date(member.birth)
			return yyyy-mm-dd
	*/

	const member = {
		...foundMember,
		birth: date(foundMember.birth) // return yyyy, month and day without zeros
	};

	return res.render('members/edit', { member } );
};

exports.put = function(req, res) {
	const { id } = req.body;
	let index = 0;

	const foundMember = data.members.find(function(member, foundIndex) {
		if (id == member.id) {
			index = foundIndex;
			return true;
		}
	});

	if(!foundMember) return res.send('Member not found!');

	const member = {
		...foundMember,
		...req.body,
		birth: Date.parse(req.body.birth),
		id:Number(req.body.id) 
	};

	data.members[index] = member;

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if(err) return res.send('Write error!');

		return res.redirect(`/members/${id}`);
	});
};

exports.delete =function(req, res) {
	const { id } = req.body;

	const filteredMembers = data.members.filter(function(member) {
		return member.id != id;
	});

	data.members = filteredMembers;

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
		if (err) return res.send('Write file error!');
	});

	return res.redirect('/members');
};
