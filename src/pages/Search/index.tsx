import React from 'react';
import ButtonDefault from '../../core/components/Button';
import ResultSearch from '../../core/components/ResultSearch';
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
                <input type="text" placeholder="User"/>
            </div>
            <div className="search-button">
                <ButtonDefault value="Encontrar" />
            </div>
            <ResultSearch />
                
        </>
    );
}

export default Search;