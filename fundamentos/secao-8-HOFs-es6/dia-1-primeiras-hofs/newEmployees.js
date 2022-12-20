const setNewEmployee = (fullName) => {
  const email = fullName.toLocaleLowerCase().replace(' ', '_');

  return { fullName, email: `${email}@trybe.com` };
}

const newEmployees = () => {
    const employees = {
      id1: setNewEmployee('Pedro Guerra'),
      id2: setNewEmployee('Luiza Drumond'),
      id3: setNewEmployee('Carla Paiva'),
      id4: setNewEmployee('Wladyr Justa')
    }
    return employees;
  };

console.log(newEmployees());
