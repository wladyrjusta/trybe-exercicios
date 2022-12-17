const {mapString, encode, decode} = require('./encodeDecode');

describe('Testa se a função encode', () => {
  it('Verifica se encode é uma função', () => {
    expect(typeof encode).toBe('function'); 
  });
  it('Verifica se encode recebendo como parâmetro (aeiou) retorna 12345', () => {
    expect(encode('aeiou')).toBe('12345'); 
  });
  it('Verifica se as demais letras não são convertidos para cada caso.', () => {
    expect(encode('bcdfg')).toBe('bcdfg'); 
  });
  it('Verifica se a string que é retornada pela função decode tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('bcdfg').length).toBe(('bcdfg').length); 
  });
});

describe('Testa se a função decode', () => {
  it('Verifica se decode é uma função', () => {
    expect(typeof decode).toBe('function'); 
  });
  it('Verifica se decode recebendo como parâmetro (12345) retorna aeiou', () => {
    expect(decode('12345')).toBe('aeiou'); 
  });
  it('Verifica se os demais números não são convertidos para cada caso.', () => {
    expect(decode('678910')).toBe('6789a0'); 
  });
  it('Verifica se a string que é retornada pela função decode tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('678910').length).toBe(('6789a0'.length)); 
  });
});