import React from 'react';
import './styles.css';

type Props = {
    value: string;
    type?: string;
    onclick?: () => void;
}

const ButtonDefault = ({value, type, onclick}: Props) => {
    return (
        <button>
            {value}
        </button>
    );
} 

export default ButtonDefault;