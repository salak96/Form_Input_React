/* eslint-disable react/prop-types */
function Card({ children }) {
    return <div className={'bg-white p-4 text-black'}>{children}</div>;
}

function Title({ children }) {
    return (
        <div className='bg-white p-4 border-b'>
            <h1 className={'text-xl'}>{children}</h1>
        </div>
    );
}

function Footer({ children }) {
    return <div className='bg-white p-4'>{children}</div>;
}
function Body({ children }) {
    return <div className={'text-black bg-white gap-2 p-5'}>{children}</div>;
}

Card.Body = Body;
Card.Title = Title;
Card.Footer = Footer;

export default Card;
