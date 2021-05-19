import React from 'react';
import { Link } from 'react-router-dom';
import ButtonDefault from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <h1>
            <img src="" alt="" />
            Github User Search <br />             
        </h1>
        <>
            <div className="paragraph-container">
                <p>Projeto para retornar dados da API do Github</p>
                <p>Construído com Typescript e ReactJS</p>
                <p>Usa o Client Axios Http baseado em promisses para comsumir a API</p>
                <p>Author: <a href="https://github.com/gigliozzi" target="blank">William Gigliozzi</a></p>
            </div>
            <Link to="/search">
                <ButtonDefault value="Começar" />
            </Link>
        </>
    </div>
);

export default Home;