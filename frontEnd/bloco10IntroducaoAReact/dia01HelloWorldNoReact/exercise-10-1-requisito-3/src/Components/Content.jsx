import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
    return ( <div>
      <ul>
        {conteudos.map((element) => <li>{`O conteúdo é: ${element.conteudo}
        Status: ${element.status}
        Bloco: ${element.bloco}`}</li> )}
      </ul>
    </div> )
  }
}

export default Content;
