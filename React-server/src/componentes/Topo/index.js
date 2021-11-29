import React from 'react';
import { Link } from 'react-router-dom';

import './estilo.css';

const Topo = () => {
  return (
    <header className="topo">
      <div className="topo-conteudo">
          <p className="topo-nome-empresa">PROJETO PI</p>
      </div>
    </header>
  );
}

export default Topo;