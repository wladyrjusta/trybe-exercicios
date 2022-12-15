const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const setProperties = (object, key, value) => object[key] = value;
setProperties(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log('---------------------------------');
const listObjectKeys = (object) => Object.keys(object);
console.log(listObjectKeys(lesson1));
console.log('---------------------------------');
const objectLength = (object) => Object.keys(object).length;
console.log(objectLength(lesson3));
console.log('---------------------------------');
const listObjectValues = (object) => Object.values(object);
console.log(listObjectValues(lesson2));
console.log('---------------------------------');
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
console.log('---------------------------------');
const totalOfStudents = (object, key) => {
  let amount = 0;
  for (let index in object) {
    amount += object[index][key];
  }
  return amount;
};
console.log(totalOfStudents(allLessons, 'numeroEstudantes'));
console.log('---------------------------------');
const getValueByNumber = (object, index) => {
  let value = Object.values(object);
  return value[index]
};
console.log(getValueByNumber(lesson1, 0));
console.log('---------------------------------');
const totalOfStudentsPresence = (obj, key, value) => {
  let totalPresence = 0;
  for (let index in obj) {
    if (obj[index][key] === value) {
      totalPresence += obj[index].numeroEstudantes;
    } else {
      totalPresence += 0;
    }
  }
  return console.log(totalPresence);
};
totalOfStudentsPresence(allLessons, 'materia','Matemática');
console.log('---------------------------------');
const getInfos = (obj, name) => {
  let schoolSubject = [];
  let allStudents = 0;
  for (let index in obj) {
    if (obj[index].professor === name) {
      schoolSubject.push(obj[index].materia);
      allStudents += obj[index].numeroEstudantes;
    };
  }
  return {aulas: schoolSubject, estudantes: allStudents};
};
console.log(getInfos(allLessons, 'Maria Clara'));
console.log('---------------------------------');
const createReport = (obj, professor) => {
  const report = { professor, };
  Object.assign(report, getInfos(allLessons, professor));
  return report;
};
console.log(createReport(allLessons, 'Maria Clara'));
