const name = 'Silvana';
const sex = 'F';
const age = 48;
const contributionTime = 23;

const retirementMan = (contributionTime >= 35 && (age + contributionTime) >= 95);
const retirementWoman = (contributionTime >= 30 && (age + contributionTime) >= 85);

if ((sex == 'F' && retirementWoman == true) || (sex == 'M' && retirementMan == true)) {
	console.log(`${name}, você já pode se aposentar`);
} else {
	console.log(`${name}, você não pode se aposentar`);
}
