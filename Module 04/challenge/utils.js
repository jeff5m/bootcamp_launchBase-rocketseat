module.exports = {
	age: function(timestamp) {
		const todayDate = new Date();
		const birthDate = new Date(timestamp);
    
		let age = todayDate.getFullYear() - birthDate.getFullYear();
		const month = todayDate.getMonth() - birthDate.getMonth();
    
		if (month < 0 || month == 0 && todayDate.getDate() < birthDate.getDate()) {
			age -= 1;
		}
    
		return age;
	},
	graduation: function(degree) {
		switch (degree) {
		case 'high_school':
			degree = 'Ensino Médio Completo';
			break;
		case 'university':
			degree = 'Ensino Superior Completo';
			break;
		case 'master':
			degree = 'Mestrado';
			break;
		case 'doctorate':
			degree = 'Doutorado';
			break;
		}
		return degree;
	},
	class_type: function(class_type) {
		switch (class_type) {
		case 'elearning':
			class_type = 'EAD';
			break;
		case 'presential':
			class_type = 'Presencial';
			break;
		}
		return class_type;
	}
};