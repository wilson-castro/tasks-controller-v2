import './Header.css';

import React from 'react';
import { FaBell } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Header = () => (
  <header className="Header">
    <div className="input-group"> 
      <input type="text"placeholder="Localizar atividade..."
       className="input-localizar-atividade" />
      <BiSearch size={15} color={'#222'} />
    </div>
    <div id="container-notificacao">
      <button className="botao-notificacao">
        <FaBell size={19} />
      </button>
    </div>
  </header>
);

export default  Header;