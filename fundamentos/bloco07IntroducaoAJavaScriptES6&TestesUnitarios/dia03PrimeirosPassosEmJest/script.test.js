const {sum, } = require('./script');

describe('Função para somar dois parâmetros', () => {
  it ('Retorna 9 ao somar 4 e 5', () => {
    expect(sum(4,5)).toBe(9);
  })

  it ('Retorna 0 ao somar 0 e 0', () => {
    expect(sum(0,0)).toBe(0);
  })

  it ('Lança erro caso algum dos parâmetros não seja do tipo número', () => {
    expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
  })

});