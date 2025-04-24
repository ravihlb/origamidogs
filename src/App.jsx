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

function coloreStatus(status) {
  return status ? { color: 'green' } : { color: 'red' };
}

function avisoDeGastoExcessivo(totalGasto) {
  if (totalGasto < 1000) return;
  return <p>Você está gastando muito.</p>;
}

const App = () => {
  const dados = mario;
  const totalGasto = somarTotalGasto(dados.compras);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={coloreStatus(dados.ativa)}>
          {dados.ativa ? ' Ativa' : ' Inativa'}
        </span>
      </p>
      <p>Total gasto: R$ {totalGasto}</p>
      {avisoDeGastoExcessivo(totalGasto)}
    </div>
  );
};

export default App;
