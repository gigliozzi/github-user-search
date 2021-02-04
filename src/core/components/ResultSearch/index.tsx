import React from 'react';
import ButtonDefault from '../Button';
import './styles.css'

const ResultSearch = () => {

    return (
        <div className="search-result-container">
            <div className="box-image">
                <img src="link" alt="name"/>
            </div>
            <div className="button-container">
                <ButtonDefault value="Ver perfil"/>
            </div>

            <div className="result-info-container">
                <input type="text" value="Repositório publicos: {text}" className=""/>
                <input type="text" value="Seguidores: {text}" className=""/>
                <input type="text" value="Seguindo: {text}" className=""/>
            </div>
            
            <div className="result-personal-container">
                <h5>Informações</h5>
                <div>Empresa: <span>{"text"}</span></div> 
                <div>Website/Blog: <span>{}</span></div>
                <div>Localidade: <span>{}</span></div>
                <div>Membro desde: <span>{}</span></div>
            </div>
        </div>
    );
}

export default ResultSearch;