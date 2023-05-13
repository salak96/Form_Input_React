/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export default function Input({ type: string = 'text', ...props }) {
    return (
        <input
            {...props}
            className={
                'transition duration-300 w-full focus:outline-none focus:ring border-black focus:ring-blue-200 focus:border-blue-400 text-blackshadow-sm rounded-lg'
            }
            type='text'
        />
    );
}
