const dev = {
	name: 'Carlos',
	age: 32,
	techs: [
		{ name: 'C++', specialty: 'Desktop' },
		{ name: 'Python', specialty: 'Data Science' },
		{ name: 'JavaScript', specialty: 'Web/Mobile' }
	]
};

console.log(`O usuário ${dev.name} tem ${dev.age} anos e usa a tecnologia ${dev.techs[0].name} com especialidade em ${dev.techs[0].specialty}`);
