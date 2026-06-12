import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // 1. Renomeando Variáveis
  const curso = { id: 1, title: "JS" };
  const { title: tituloCurso } = curso;

  // 2. Formatação de Preços
  const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 30 },
  ];

  const produtosFormatados = produtos.map(
    (produto) => `O produto ${produto.nome} custa R$ ${produto.preco}`
  );

  // 3. Desestruturação em Parâmetros
  const usuario = {
    nome: "Gabriel",
    email: "gabriel@email.com",
  };

  function mostrarUsuario({ nome, email }) {
    return `Nome: ${nome} | Email: ${email}`;
  }

  // 4. Map e Objetos
  const numeros = [1, 2, 3, 4, 5];

  const numerosObjetos = numeros.map((n) => ({
    valor: n,
    par: n % 2 === 0,
  }));

  // 5. Aninhamento
  const carro = { motor: { cavalos: 150 } };
  const {
    motor: { cavalos },
  } = carro;

  // 6. Filtragem Manual no Map
  const idades = [12, 18, 25, 16, 30];

  const resultadoIdades = idades.map((idade) =>
    idade < 18 ? "Menor" : "Maior"
  );

  // 7. Desestruturação de Arrays Aninhados
  const arrayAninhado = [1, [2, 3], 4];
  const [, [num2, num3]] = arrayAninhado;

  // 8. Cálculo de Desconto
  const produtosComDesconto = produtos.map((produto) => ({
    ...produto,
    preco: produto.preco * 0.9,
  }));

  // 9. Extração de API Simulada
  const api = [
    { id: 1, nome: "Ana", idade: 22, cidade: "São Paulo" },
    { id: 2, nome: "Carlos", idade: 30, cidade: "Rio de Janeiro" },
    { id: 3, nome: "Maria", idade: 25, cidade: "Curitiba" },
  ];

  const dadosFiltrados = api.map(({ id, nome }) => ({
    id,
    nome,
  }));

  // 10. Map com Array Original
  const valores = [10, 20, 30, 40];

  const porcentagens = valores.map((numero, index, array) => {
    const totalItens = array.length;
    return `${numero} representa ${(100 / totalItens).toFixed(2)}% dos itens`;
  });

  return (
    <div>
      <h1>Exercícios React - Map e Desestruturação</h1>

      <h2>1. Renomeando Variáveis</h2>
      <p>Título do curso: {tituloCurso}</p>

      <h2>2. Formatação de Preços</h2>
      {produtosFormatados.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2>3. Desestruturação em Parâmetros</h2>
      <p>{mostrarUsuario(usuario)}</p>

      <h2>4. Map e Objetos</h2>
      {numerosObjetos.map((item, index) => (
        <p key={index}>
          Valor: {item.valor} | Par: {item.par ? "true" : "false"}
        </p>
      ))}

      <h2>5. Aninhamento</h2>
      <p>Cavalos: {cavalos}</p>

      <h2>6. Filtragem Manual no Map</h2>
      {resultadoIdades.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <h2>7. Desestruturação de Arrays Aninhados</h2>
      <p>Número 2: {num2}</p>
      <p>Número 3: {num3}</p>

      <h2>8. Cálculo de Desconto</h2>
      {produtosComDesconto.map((produto, index) => (
        <p key={index}>
          {produto.nome} - R$ {produto.preco.toFixed(2)}
        </p>
      ))}

      <h2>9. Extração de API Simulada</h2>
      {dadosFiltrados.map((item) => (
        <p key={item.id}>
          ID: {item.id} | Nome: {item.nome}
        </p>
      ))}

      <h2>10. Map com Array Original</h2>
      {porcentagens.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default App;