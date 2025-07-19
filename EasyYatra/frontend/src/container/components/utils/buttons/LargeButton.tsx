import React, { ReactNode } from 'react';
import { ButtonProp } from '../../../../interfaces/button/ButtonProp';

const LargeButton: React.FC<ButtonProp> = ({id, children, disabled, onClick }) => {
    return (
        <button
            id={id}
            disabled={disabled}
            onClick={onClick}
            className='w-full border rounded-md py-2 px-4 flex items-center justify-center hover:bg-white bg-blue-500 text-white hover:text-blue-500'
        >
            {children}
        </button>
    );
}

export default LargeButton;
