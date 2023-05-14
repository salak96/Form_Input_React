/* eslint-disable react/prop-types */
import clsx from 'clsx';

export default function Button(props) {
    const { className = 'bg-black', children, text, type = 'submit' } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 font-medium inline-flex justify-center whitespace-nowrap items-center gap-x-2 text-sm text-white px-4 h-10 rounded'
            )}
        >
            {text || children}
        </button>
    );
}
