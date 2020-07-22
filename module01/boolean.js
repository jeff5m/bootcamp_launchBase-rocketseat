const classAStudents = [
  { name: 'Mayk', score: 9.8 },
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

function averageCalculator (students) {
  let add = 0

  for (let i = 0; i < students.length; i++) {
    add = add + students[i].score
  }

  const average = add / students.length

  return average
}

function sendMessage (average, className) {
  if (average > 5) {
    console.log(`Kudos guys, the ${className} average was ${average}.`)
  } else {
    console.log(`You need to study more. The ${className} average was ${average}.`)
  }
}

function markAsDisapproved (student) {
  student.disapproved = false

  if (student.score < 5) {
    student.disapproved = true
  }
}

function sendMessageDisapproved (student) {
  if (student.disapproved) {
    console.log(`The Student ${student.name} is disappoved!`)
  }
}

function studentsDisapproved (students) {
  for (const student of students) {
    markAsDisapproved(student)
    sendMessageDisapproved(student)
  }
}

const average1 = averageCalculator(classAStudents)
const average2 = averageCalculator(classBStudents)

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')

studentsDisapproved(classAStudents)
studentsDisapproved(classBStudents)
