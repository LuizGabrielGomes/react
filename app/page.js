"use client"

export default function Home() {


const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

// console.log(students)
// console.log(students[0])
// console.log(students[0].name)
// console.log(students[0].grade)
// // Dado o array de objetos acima, faça uma função que retorne somente os nomes de cada estudante.

// function pick(students) {
//   return students.map(item => item.name)
// }

// console.log(pick(students))

// // faça uma função que retorne apenas os estudantes com nota maior ou igual a 90.



// function take(students) {
//     return students.map(item => item.grade >=90 ? item.name : "nok")
// }
// console.log(take(students))






  return (
    <ul>
      {students.map(item => item.grade >=90 ? <li key={item.name}>{item.name}</li> : null)}
    </ul> 
  )
}
