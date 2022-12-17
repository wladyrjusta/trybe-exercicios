const myRemove = require('./myRemove');

describe('Testa se a função myRemove', () => {
  it('Verifica se a chamada myRemove() retona o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se a chamada myRemove() não retona o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se a chamada myRemove() retona o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});