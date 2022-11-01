const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const crecreateDaysOfTheMonth = () => {
    const decemberDaysList = document.querySelector('#days');

    for (let novDays = 29; novDays < 31; novDays += 1) {
        const novemberDays = novDays;
        const decemberDaysLisItem = document.createElement('Li');
        decemberDaysLisItem.innerHTML = novDays;
        decemberDaysList.appendChild(decemberDaysLisItem);
    };
    for (let monthDays = 1; monthDays <= 31; monthDays += 1) {
        const decemberDays = monthDays;
        const decemberDaysLisItem = document.createElement('Li');
        decemberDaysLisItem.innerHTML = decemberDays;
        decemberDaysList.appendChild(decemberDaysLisItem);
    };
}
crecreateDaysOfTheMonth();