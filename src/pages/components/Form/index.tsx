import axios from 'axios';
import React, { useState } from 'react';
import { UsersResponse } from '../../../core/types/Users';
import MyLoader from '../Loader';
import './styles.css'

const Form = () => {

    const [userResponse, setUserResponse] = useState<UsersResponse>();

    const [user, setUser] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleOnClick = () => {
        setIsLoading(true)
        axios(`https://api.github.com/users/${user}`)
            .then(response => setUserResponse(response.data))
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <div className="search-container">
                <h1>Encontre um perfil Github</h1>
                <input
                    type="text"
                    onChange={handleOnChange}
                    value={user}
                    placeholder="username Github"
                />
                <div className="search-button">
                    <button
                        value="Encontrar"
                        type="submit"
                        onClick={handleOnClick}
                    >
                       Go
                    </button>
                </div>
            </div>

            <div className="search-result-container">
                <div className="box-image">
                    {isLoading ? <MyLoader /> : (
                        <img src={userResponse?.avatar_url} alt={userResponse?.login} />
                    )}
                </div>

                <a href={userResponse?.html_url} target="blank">
                    <div className="button-container">
                        <button>
                            Ver perfil
                         </button>
                    </div>
                </a>
                <div className="result-info-container">
                    <div>Repositórios públicos:
                        <span>
                            {userResponse?.public_repos}
                        </span>
                    </div>
                    <div>Seguidores:
                        <span>
                            {userResponse?.followers}
                        </span>
                    </div>
                    <div>Seguindo:
                        <span>
                            {userResponse?.following}
                        </span>
                    </div>
                </div>

                <div className="result-personal-container">
                    <h5>Informações</h5>
                    <div>Empresa: <span>{userResponse?.company}</span></div>
                    <div>Site: <span>{userResponse?.blog}</span></div>
                    <div>Localidade: <span>{userResponse?.location}</span></div>
                    <div>Membro desde: <span>{userResponse?.created_at}</span></div>
                </div>
            </div>
        </>
    )

}

export default Form