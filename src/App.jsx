import PlaceContentCenter from './components/PlaceContentCenter.jsx';
import Button from './components/button.jsx';
import Card from './components/card.jsx';
import Input from './components/input.jsx';
import { useRef } from 'react';

function App() {
    const inputReff = useRef(null);
    
    function handleClick () {
        // inputReff.current.focus();
       inputReff.current.focus();
    }
    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>UseRef Hooks</Card.Title>
                <Card.Body>
                    <div className='flex items-center gap-2'>
                    <Input placeholder={"Email"}  isFouced className={"border border-slate-500"}/><br/>
                    <Input placeholder={"Password"} isFocued className={"border border-slate-500"}/>
                    <Button onClick={handleClick}>Login</Button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    {/* Your click {ticker.current} times */}
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
