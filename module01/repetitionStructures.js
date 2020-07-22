// Criar um programa que calcula a média
// das turmas de alunos e envia uma
// menssagem do cálculo da média

const classAStudents = [
  { name: 'Mayk', score: 1.8 },
  { name: 'Diego', score: 10 },
  { name: 'Fulano', score: 2 },
  { name: 'One more Student', score: 10 }
]

const classBStudents = [
  { name: 'Robson', score: 10 },
  { name: 'Robson', score: 10 },
  { name: 'Siclano', score: 0 },
  { name: 'New Student', score: 5 }
]

// Se a média for maior que 5, parabenizar a turma

function averageCalculator (students) {
  let add = 0
  for (let i = 0; i < students.length; i++) {
    add = add + students[i].score
  }

  const average = add / students.length
  return average
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
