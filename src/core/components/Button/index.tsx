import React from 'react';
import './styles.css';

type Props = {
    value: string;
}

const ButtonDefault = ({value}: Props) => {
    return (
        <button>
            {value}
        </button>
    );
} 

export default ButtonDefault;