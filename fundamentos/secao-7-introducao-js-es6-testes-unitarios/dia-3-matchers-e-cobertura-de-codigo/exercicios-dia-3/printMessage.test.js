const { info, printMessage } = require('./printMessage');

describe('Tests the function printMessage', () => {
  it('Is a function', () => {
  expect(typeof printMessage).toBe('function'); 
  });
  it('Info has property: personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('printMessage(info) to returns: Boas vindas,', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
  });
  it('printMessage(info) to returns: ..., info.personagem', () => {
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it('printMessage(!Object) throws Error: invalid object', () => {
    expect(() => printMessage(['Margarida', 'Pato Donald', 'Namorada do personagem principal nos quadrinhos do Pato Donald'])).toThrow(new Error('Invalid Object'));
  });
  it('printMessage(!object.personagem) throws Error: invalid object', () => {
    expect(() => printMessage({ origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',}))
    .toThrow(new Error('Invalid Object'));
  });
});