import React from 'react';
import './styles.css';

type Props = {
    value: string;
    type?: string;
    onClick?: any;
}

const ButtonDefault = ({value, type, onClick}: Props) => {
    return (
        <button>
            {value}
        </button>
    );
} 

export default ButtonDefault;