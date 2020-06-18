import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/25486388?s=460&u=b9bffd30c4bdf0adcfc73a8893ca204b81a77350&v=4"
            alt="jandersonp"
          />
          <div>
            <strong>jandersonp/gobarber-api</strong>
            <p>API REST da aplicação GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/25486388?s=460&u=b9bffd30c4bdf0adcfc73a8893ca204b81a77350&v=4"
            alt="jandersonp"
          />
          <div>
            <strong>jandersonp/gobarber-api</strong>
            <p>API REST da aplicação GoBarber</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
