/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useRef } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react/display-name
const Input = ({ isFocused = false ,type='text',...props}) => {
    const input = useRef(null);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            ref={input}
            {...props}
            className='transition duration-300 w-full focus:outline-none focus:ring border-black focus:ring-blue-200 focus:border-blue-400 text-blackshadow-sm rounded-lg'
            type={type}
        />
    );
};

export default Input;