/* ======================

    Objetos possuem propriedades ou funcionalidades.

    Ex.: console.log() 
            |      |
         objeto  funcionalidade

    Objeto é uma coleção de propriedades que recebem valores ou funcionalidades.

=======================*/


const student1 = {
    name: 'Mayk',
    score: 9.8
}

const student2 = {
    name: 'Diego',
    score: 10
}

const student3 = {
    name: 'Fulano',
    score: 2
}

// Criar um programa que calcula a média
// das notas entre alunos e envia uma
// menssagem do cálculo da média
// Se a média for maior que 5, parabenizar a turma

const average = (student1.score + student2.score + student3.score) / 3

if (average > 5) {
    console.log(`Kudos guys, the average grade was ${average}.`)
} else {
    console.log(`You need to study more. Your average was ${average}.`)
} 

/* ========================================================================
 É possível agrupar objetos em uma única variável, chamada de ARRAY.

 ps.: também posso escrever assim:
   
   const studentsNames = ['Paulo', 'Markus', 'Narciso']

   console.log(names[0])
=============================================================================== */

const students = [
    { name:'Mayk', score: 9.8 },
    { name:'Diego', score: 10 },
    { name:'Fulano', score: 2 },
]

const average = (students[0].score + students[1].score + students[2].score) / 3

if (average > 5) {
    console.log(`Kudos guys, the average grade was ${average}.`)
} else {
    console.log(`You need to study more. Your average was ${average}.`)
} 

