import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonDefault from '../Button';
import GithubLogo from '../../assets/github-icon.svg';
import '../../types/Users';
import './styles.css';
import { UsersResponse } from '../../types/Users';


const ResultSearch = () => {

    const [usersResponse, setUsersResponse] = useState<UsersResponse>();

    console.log(usersResponse?.company);
    console.log(usersResponse?.blog);
    console.log(usersResponse?.location);
    console.log(usersResponse?.created_at);
    console.log(usersResponse?.followers);
    console.log(usersResponse?.public_repos);
    console.log(usersResponse?.following);

    useEffect(() => {
        axios('https://api.github.com/users/gabrielsantos')
            .then(response => setUsersResponse(response.data));
    }, []);

    return (
        <div className="search-result-container">
            <div className="box-image">
                <img src={usersResponse?.avatar_url} alt="RESULT SEARCH" />
            </div>

            <a href="https://github.com/gabrielsantos" target="blank">
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
    );
}

export default ResultSearch;