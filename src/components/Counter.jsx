/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';
export default function Counter({ initialValues }) {
    const [count, setCount] = useState(initialValues);
    function handleClick() {
        setCount((x) => x + 1);
    }
    return (
        <div>
            <h1 className={'text-5xl font-bold'}>{count}</h1>
            <div className='mt-5 flex items-center gap-4'>
                <Button onClick={handleClick}>+1</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}
                >
                    +3
                </Button>
            </div>
        </div>
    );
}
