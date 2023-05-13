/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Label({ value, children, ...props }) {
    return (
        <label className={'text-black mb-1 block'} {...props}>
            {value || children}
        </label>
    );
}
