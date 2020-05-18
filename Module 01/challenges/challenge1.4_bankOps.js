const user = {
	name: 'Mariana',
	transactions: [],
	balance: 0
};

function createTransaction (transaction) {
	user.transactions.push(transaction);
	if (transaction.type == 'credit') {
		user.balance = user.balance + transaction.value;
	}
	if (transaction.type == 'debit') {
		user.balance = user.balance - transaction.value;
	}
}

function getHigherTransactionByType (transactionType) {
	let higherTransactionValue = 0;
	let higherTransaction;
	for (let i = 0; i < user.transactions.length; i++) {
		if (transactionType == user.transactions[i].type && user.transactions[i].value > higherTransactionValue) {
			higherTransactionValue = user.transactions[i].value;
			higherTransaction = user.transactions[i];
		}
	}

	return higherTransaction;
}

function getAverageTransactionValue (transactions) {
	let transactionsAveregeValue = 0;
	for (let i = 0; i < transactions.length; i++) {
		transactionsAveregeValue += transactions[i].value;
	}

	return transactionsAveregeValue / transactions.length;
}

function getTransactionsCount (transactions) {
	let countCredit = 0;
	let countDebit = 0;
	for (let i = 0; i < transactions.length; i++) {
		if (transactions[i].type == 'credit') {
			countCredit++;
		}
		if (transactions[i].type == 'debit') {
			countDebit++;
		}
	}

	return { credit: `${countCredit}`, debit: `${countDebit}` };
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });

console.log(user.balance);

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

console.log(getAverageTransactionValue(user.transactions));

console.log(getTransactionsCount(user.transactions));
