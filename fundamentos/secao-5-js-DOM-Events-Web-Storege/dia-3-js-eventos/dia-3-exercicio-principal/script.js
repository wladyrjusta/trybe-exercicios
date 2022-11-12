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
  
 
    const monthsDaysList = document.getElementById('days');
    for (let index = 29; index <= 30; index += 1) {
        let novemberDays = document.createElement('li');
        novemberDays.innerHTML = index;
        novemberDays.className = 'days';
        monthsDaysList.appendChild(novemberDays);
    }
    for (let index2 = 1; index2 <= 31; index2 += 1) {
        let dezemberDays = document.createElement('li');
        dezemberDays.innerHTML = index2;
        dezemberDays.className = 'days';
        monthsDaysList.appendChild(dezemberDays);
    }

    let decemberDays = document.getElementsByClassName('days');
    decemberDays[26].classList.add('holiday');
    decemberDays[27].classList.add('holiday');
    decemberDays[32].classList.add('holiday');
    decemberDays[5].classList.add('friday');
    decemberDays[12].classList.add('friday');
    decemberDays[19].classList.add('friday');
    decemberDays[26].classList.add('friday');

 let buttonContainer = document.querySelector('.buttons-container');
 let buttonHoliday = document.createElement('button');
 buttonHoliday.id = 'btn-holiday';
 buttonHoliday.className = 'btn btn-danger';
 buttonHoliday.innerText = 'Feriados';
 buttonContainer.appendChild(buttonHoliday); 
 

 
 
  