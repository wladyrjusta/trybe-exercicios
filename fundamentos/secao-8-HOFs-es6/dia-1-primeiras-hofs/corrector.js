const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrector = (testAnswer, studentAnswer) => {
  let totalPoints = 0;
  for (let index in studentAnswer) {
    if (studentAnswer[index] === testAnswer[index]) {
      totalPoints += 1;
    } else if (studentAnswer[index] === 'N.A') {
      totalPoints += 0;
    } else if (studentAnswer[index] !== testAnswer[index]) {
      totalPoints -= 0.5;
    }
  }

  return console.log(`Resultado final: ${totalPoints} pontos`);
}

corrector(RIGHT_ANSWERS, STUDENT_ANSWERS);