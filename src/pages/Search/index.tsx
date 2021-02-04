import React from 'react';
import ButtonDefault from '../../core/components/Button';
import './styles.css'

const Search = () => {
    return (
        <>
            <div className="search-container">
            </div>
            <div className="search-title">
                <h1>Encontre um perfil Github</h1>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Usuário Github"/>
            </div>
            <div className="search-button">
                <ButtonDefault value="Encontrar" />
            </div>
                
        </>
    );
}

export default Search;