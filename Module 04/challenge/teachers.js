const fs = require('fs');
const data = require('./data.json');

exports.post = function(req, res) {
	const keys = Object.keys(req.body);

	for(let key of keys) {
		if (req.body[key] == '') {
			return res.send('Por favor, preencha todos os campos');
		}
	}
  
	let { avatar_url, name, birth, degree, class_type, lectures } = req.body;
  
	birth = Date.parse(birth);
	const id = Number(data.instructors.length + 1);
	const created_at = Date.now();


	data.instructors.push({ 
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