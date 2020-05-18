// Criar um programa que calcula a média
// das turmas de alunos e envia uma
// menssagem do cálculo da média

const classAStudents = [
  { name: 'Mayk', score: 1.8 },
  { name: 'Diego', score: 10 },
  { name: 'Fulano', score: 2 }
]

const classBStudents = [
  { name: 'Robson', score: 10 },
  { name: 'Robson', score: 10 },
  { name: 'Siclano', score: 0 }
]

// Se a média for maior que 5, parabenizar a turma

function averageCalculator (students) {
  return ((students[0].score + students[1].score + students[2].score) / 3)
}

const average1 = averageCalculator(classAStudents)
const average2 = averageCalculator(classBStudents)

function sendMessage (average, className) {
  if (average > 5) {
    console.log(`Kudos guys, the ${className} average was ${average}.`)
  } else {
    console.log(`You need to study more. The ${className} average was ${average}.`)
  }
}

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')
