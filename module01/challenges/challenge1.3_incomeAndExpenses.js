const users = [
	{
		name: 'Salvio',
		incomes: [115.3, 48.7, 98.3, 14.5],
		expenses: [85.3, 13.5, 19.9]
	},
	{
		name: 'Marcio',
		incomes: [24.6, 214.3, 45.3],
		expenses: [185.3, 12.1, 120.0]
	},
	{
		name: 'Lucia',
		incomes: [9.8, 120.3, 340.2, 45.3],
		expenses: [450.2, 29.9]
	}
];

function addNumbers (numbers) {
	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total = total + numbers[i];
	}

	return total;
}

function balanceCalculation (incomes, expenses) {
	const totalIncomes = addNumbers(incomes);
	const totalExpenses = addNumbers(expenses);
	const balance = totalIncomes - totalExpenses;

	return balance;
}

for (let i = 0; i < users.length; i++) {
	const balance = balanceCalculation(users[i].incomes, users[i].expenses);

	if (balance > 0) {
		console.log(`${users[i].name} possui saldo POSITIVO de ${balance}`);
	} else {
		console.log(`${users[i].name} possui saldo NEGATIVO de ${balance}`);
	}
}
