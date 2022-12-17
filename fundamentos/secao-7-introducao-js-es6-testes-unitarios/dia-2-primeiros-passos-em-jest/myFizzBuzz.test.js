const myFizzBuzz = require('./myFizzBuzz');

describe('Vrifica se a função myFizzBuzz(num) tem os retornos esperados.', () => {
  it('Vrifica se a função myFizzBuzz(num), sendo num um número divisível por 3 e 5 tem o retorno esperado.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Vrifica se a função myFizzBuzz(num), sendo num um número divisível por 3 tem o retorno esperado.', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Vrifica se a função myFizzBuzz(num), sendo num um número divisível por 5 tem o retorno esperado.', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Vrifica se a função myFizzBuzz(num), sendo num um número NÃO divisível por 3 e 5 tem o retorno esperado.', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('Vrifica se a função myFizzBuzz(num), sendo num um parâmetro que NÃO é um número tem o retorno esperado.', () => {
    expect(myFizzBuzz('4')).toBe(false);
  });
});