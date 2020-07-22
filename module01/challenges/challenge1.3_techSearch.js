const users = [
	{ name: 'Carlos', techs: ['HTML', 'CSS'] },
	{ name: 'Jasmine', techs: ['JavaScript', 'CSS'] },
	{ name: 'Tuane', techs: ['HTML', 'Node.js'] }
];

function checkIfUserUseCSS (user) {
	// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
	for (let i = 0; i < user.techs.length; i++) {
		// SE encontrar, retorne true da função, caso contrário retorne false
		if (user.techs[i] == 'CSS') {
			return true;
		}
	}
	return false;
}

for (let i = 0; i < users.length; i++) {
	const userUseCSS = checkIfUserUseCSS(users[i]);

	if (userUseCSS) {
		console.log(`O usuário ${users[i].name} trabalha com CSS`);
	}
}
