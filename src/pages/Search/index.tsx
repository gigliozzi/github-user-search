import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonDefault from '../../core/components/Button';
// import ResultSearch from '../../core/components/ResultSearch';
import './styles.css'
import { UsersResponse } from '../../core/types/Users';

const Search = () => {

    const [user, setUser] = useState('gigliozzi');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    useEffect(() => {
        axios(`https://api.github.com/users/${user}`)
            .then(response => setUsersResponse(response.data));
    }, [user]);

    const [usersResponse, setUsersResponse] = useState<UsersResponse>();

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="search-container">
                </div>
                <div className="search-title">
                    <h1>Encontre um perfil Github</h1>
                </div>
                <div className="search-box">
                    <input type="text" id="userInput" value={usersResponse?.login} onChange={handleOnChange} placeholder="Usuário Github" required />
                </div>
                <div className="search-button">
                    <ButtonDefault value="Encontrar" type="submit" />
                </div>
            </form>
            
            <div className="search-result-container">
                <div className="box-image">
                    <img src={usersResponse?.avatar_url} alt="RESULT SEARCH" />
                </div>

                <a href={usersResponse?.html_url} target="blank">
                    <div className="button-container">
                        <ButtonDefault value="Ver perfil" />
                    </div>
                </a>
                <div className="result-info-container">
                    <div>Repositórios públicos: <span>{usersResponse?.public_repos}</span></div>
                    <div>Seguidores: <span>{usersResponse?.followers}</span></div>
                    <div>Seguindo: <span>{usersResponse?.following}</span></div>
                </div>

                <div className="result-personal-container">
                    <h5>Informações</h5>
                    <div>Empresa: <span>{usersResponse?.company}</span></div>
                    <div>Site: <span>{usersResponse?.blog}</span></div>
                    <div>Localidade: <span>{usersResponse?.location}</span></div>
                    <div>Membro desde: <span>{usersResponse?.created_at}</span></div>
                </div>
            </div>

        </>
    );
}

export default Search;