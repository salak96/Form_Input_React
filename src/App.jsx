/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import PlaceContentCenter from './components/PlaceContentCenter.jsx';
import Todo from './components/Todo.jsx';
import Button from './components/Button.jsx';
import React, { useEffect, useState } from 'react';

function App(props) {
    const [name, setName] = useState('');
    const [online, setOnline] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(window.scroll);



    // selalu dipanggil ketika ada perubahan
    useEffect(() => {
        // console.log('Alway rendered pertama');
    });
    // // dia direndered ketika first render
    useEffect(() => {
        // console.log('First rendered kedua');
    }, []);
    // dipanggil ketika ada perubahan pada name
    useEffect(() => {
        // console.log(`I am now ${online ? 'online' : 'offline'}`);
    }, [online]);
    function updateScrollPosition() {
        const windowsScrolling = window.scrollY;
        console.log(`Window scrolled position ${windowsScrolling} `)
        setScrollPosition(windowsScrolling)
        }

    //clean up useEffect
    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition);
    }, []);
    return (
        <div className={'h-[4000px]'}>
            <input
                className={
                    'p-2 text-black transition duration-300 w-full focus:outline-none focus:ring border-black focus:ring-red-600 focus:border-blue-400 text-blackshadow-sm rounded-lg'
                }
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            
            <Button onClick={()=>setOnline(online=>!online)}>Set Online</Button>
        </div>
    );
}

export default App;
