module.exports = {
	age: function (timestamp) { // object name is the function name
		const today = new Date();
		const birthDate = new Date(timestamp);
		
		// 2019 - 1984 = 35
		let age = today.getFullYear() - birthDate.getFullYear();
		const month = today.getMonth() - birthDate.getMonth();
		
		// 11 - 12 = -1
		// 11 - 11 = 0
		if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
			age = age - 1;
		}
	
		return age;
	} 
};

