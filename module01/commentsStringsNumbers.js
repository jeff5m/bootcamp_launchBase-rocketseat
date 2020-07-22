// Criar um programa que calcula a média
// das notas entre alunos e envia uma
// menssagem do cálculo da média

const student1 = 'Jeff'
const scoreStudent1 = 9.8

const student2 = 'Mayk'
const scoreStudent2 = 10

const student3 = 'Fulano'
const scoreStudent3 = 2

const media = (scoreStudent1 + scoreStudent2 + scoreStudent3) / 3

// Se a média for maior que 5, parabenizar a turma

if (media > 5) {
  console.log(`Parabéns turma, a média foi ${media}.`)
} else {
  console.log(`Vocês precisam estudar mais. Sua média foi de ${media}.`)
}
