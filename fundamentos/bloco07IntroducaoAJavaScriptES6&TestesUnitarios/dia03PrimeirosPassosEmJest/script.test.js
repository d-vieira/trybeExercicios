const {sum, myRemove, } = require('./script');

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

describe ('Função para remover item de um array', () => {
  it ('Verifica se a função retorna o array conforme esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  
  it ('Removeu o item "3" do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it ('Verifica se a função retorna o array conforme esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })

});