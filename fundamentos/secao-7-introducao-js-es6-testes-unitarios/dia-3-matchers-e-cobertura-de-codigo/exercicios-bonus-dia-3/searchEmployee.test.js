const { professionalBoard, searchEmployee } = require('./searchEmployee');

describe('Test the function searchEmployee', () => {
  it('searchEmployee is defeined', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('searchEmployee(id, detail) returns the correct detail from the correct professional', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });
  it('searchEmployee(detail) throws the Error: ID não identificada', () => {
    expect(() => searchEmployee('firstName')).toThrow(new Error('ID não identificada'));
  });
  it('searchEmployee(wrongId, detail) throws the Error: ID não identificada', () => {
    expect(() => searchEmployee('5569-8', 'firstName')).toThrow(new Error('ID não identificada'));
  });
  it('searchEmployee(id) throws the Error: Informação indisponível', () => {
    expect(() => searchEmployee('5569-4')).toThrow(new Error('Informação indisponível'));
  });
  it('searchEmployee(id, wrongDetail) throws the Error: Informação indisponível', () => {
    expect(() => searchEmployee('5569-4', 'name')).toThrow(new Error('Informação indisponível'));
  });
});