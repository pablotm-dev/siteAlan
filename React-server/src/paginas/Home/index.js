import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';

const Home = (  ) => {
  return (
    <EstruturaPagina>
      <div className="home-apresentacao">
        <div className="limitar-container">
          <h1>Bem-vindo a o projeto PI do SENAI. Nos somos o grupo 2 composto por: <p><h1><span>Alan Silva, Alexandre Barbosa e Marcelo Jr.</span></h1></p></h1>
        </div>
      </div>

      <h2 className="titulo-sessao">Porque <b>calcular</b> a emissao de carbono ?</h2>

      <img className="img-porque-investir" src="assets/calculo-fixed.jpeg" title="Imagem porque investir"/>

      <ul className="lista-sobre-vantagens limitar-container">
        <li>
          <h3 className="centerText">Qual o principal beneficio ?</h3>
          <p className="centerText">Fizemos um programa na qual ajuda a companhia Y a fazer a pegada de carbono de suas frotas Tendo em mente que apos o cálculo ser feito definira quantas arvores a companhia Y deveria platar para compensar a emissao de carbono.</p>
        </li>
      </ul>      
      
      <div className="home-depoimentos">
        <h2 className="titulo-sessao">Veja aqui as <b>funcionalidades</b> do nosso sistema...</h2>

        <ul className="lista-depoimentos">
          <li>
            <img className="img-porque-investir" src="assets/calculo.jpeg" alt="Cliente Alberto" title="Cliente Alberto"/>
            <p>Calculo</p>
            <p>Aqui nós vemos a quantidade total de carbono emitido pela compania Y e quantas árvores deverão ser plantadas.</p>
          </li>

          <li>
            <img className="img-porque-investir" src="assets/veiculo.jpeg" alt="Cliente Eliana" title="Cliente Eliana"/>
            <p>Veiculo</p>
            <p>Nessa tela, adicionamos , editamos e removemos veículos da lista de veículos da compania Y </p>
          </li>

          <li>
            <img className="img-porque-investir" src="assets/chamado.jpeg" alt="Cliente Carla" title="Cliente Carla"/>
            <p>Chamada</p>
            <p>Na tela de chamada, será designado o destino, veículo e funcionário para cada corrida, sendo adicionado à quilometragem ao finalizar o chamado.</p>
          </li>

          <li>
            <img className="img-porque-investir" src="assets/funcionario.jpeg" alt="Cliente Carla" title="Cliente Carla"/>
            <p>Funcionario</p>
            <p>Na tela de funcionário, você consegue adicionar, editar e remover funcionários da compania, também dizendo que ele é hábil ou não a dirigir os veículos da empresa.</p>
          </li>
        </ul>
      </div>

      <div>
        <a href="https://github.com/Merkrow50/ProjetoIntegradorv1.git" className="btn-contato">Download</a>
      </div>
    </EstruturaPagina>
  );
}

export default Home;
