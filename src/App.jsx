import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

function somarTotalGasto(compras) {
  let soma = 0;

  for (const compra of compras) {
    const preco = Number.parseInt(compra.preco.replace('R$ ', ''));
    soma += preco;
  }

  return soma;
}

const App = () => {
  const dados = mario;
  const totalGasto = somarTotalGasto(dados.compras);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{color: dados.ativa ? 'green' : 'red'}}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total gasto: R$ {totalGasto}</p>
      <p>{totalGasto > 10000 && 'Você está gastando muito.'}</p>
    </div>
  );
};

export default App;
