import React from 'react';
import { Link } from 'react-router-dom';
import ButtonDefault from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <h1>
            Desafio do Capítulo 3, <br />
             Bootcamp DevSuperior
        </h1>
        <>
            <div className="paragraph-container">
                <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                <p>Favor observar as instruções passadas no capítulo sobre a elaboração
                deste projeto.</p>
                <p>Este design foi adaptado a partir de Ant Design System for Figma, de
                Mateusz Wierzbicki: <a href="mailto">antforfigma@gmail.com</a></p>
            </div>
            <Link to="/search">
                <ButtonDefault value="Começar" />
            </Link>
        </>
    </div>
);

export default Home;