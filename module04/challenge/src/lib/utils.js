module.exports = {
	age(timestamp) {
		const todayDate = new Date();
		const birthDate = new Date(timestamp);
    
		let age = todayDate.getFullYear() - birthDate.getFullYear();
		const month = todayDate.getMonth() - birthDate.getMonth();
    
		if (month < 0 || month == 0 && todayDate.getDate() < birthDate.getDate()) {
			age -= 1;
		}
    
		return age;
	},
	graduation(education_level) {
		switch (education_level) {
		case 'high_school':
			education_level = 'Ensino Médio Completo';
			break;
		case 'university':
			education_level = 'Ensino Superior Completo';
			break;
		case 'master':
			education_level = 'Mestrado';
			break;
		case 'doctorate':
			education_level = 'Doutorado';
			break;
		}
		return education_level;
	},
	class_type(class_type) {
		switch (class_type) {
		case 'elearning':
			class_type = 'EAD';
			break;
		case 'presential':
			class_type = 'Presencial';
			break;
		}
		return class_type;
	},
	date(timestamp) {
		const date = new Date(timestamp);
		
		const year = date.getUTCFullYear();
		const month = `0${date.getUTCMonth() + 1}`.slice(-2);
		const day = `0${date.getUTCDate()}`.slice(-2);

		return {
			day,
			month,
			year,
			iso: `${year}-${month}-${day}`,
			birthDay: `${day}/${month}`,
			format: `${day}/${month}/${year}`
		};
	},
	grade(grade) {
		switch (grade) {
		case '5th':
			grade = '5º Ano do Ensino Fundamental';
			break;

		case '6th':
			grade = '6º Ano do Ensino Fundamental';
			break;
			
		case '7th':
			grade = '7º Ano do Ensino Fundamental';
			break;
			
		case '8th':
			grade = '8º Ano do Ensino Fundamental';
			break;

		case '9th':
			grade = '9º Ano do Ensino Fundamental';
			break;
	
		case '1th':
			grade = '1º Ano do Ensino Médio';
			break;
				
		case '2th':
			grade = '2º Ano do Ensino Médio';
			break;
				
		case '3th':
			grade = '3º Ano do Ensino Médio';
			break;
		}
		return grade;
	}
};