import PlaceContentCenter from './components/PlaceContentCenter.jsx';
import Card from './components/card.jsx';
import Button from './components/Button.jsx';
import { IconBrandGithub } from '@tabler/icons-react';
import Label from './components/Label.jsx';
import Input from './components/Input.jsx';
import { useState } from 'react';
function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    // });

// function onChange(event) {
//     setForm({ ...form,[event.target.name]:event.target.value});
// }
function submit(event) {
    event.preventDefault();
    console.log({ name, email });
}
    return (
        <PlaceContentCenter>
            <Card>Sign up for new account</Card>
           <form onSubmit={submit}>
           <Card.Body>
                <p className={' mb-5 border rounded-lg p-4'}>
                    <p>Name : {name || '----'} </p>
                    <p>Email : {email || '----'} </p>
                </p>
                <div className='mb-6'>
                    <Label htmlFor='name' value={'Name'} />
                    <Input value={name} onChange={(event)=>setName(event.target.value)} id={'name'} name={'Name'} />
                </div>

                <div>
                    <Label htmlFor='email' value={'Email'} />
                    <Input value={email} onChange={(event)=>setEmail(event.target.value)} name={'Email'} />
                </div>
            </Card.Body>
           </form>
            <Card.Footer>
                <Button>
                    <IconBrandGithub />
                    Sign up with Github
                </Button>
            </Card.Footer>
        </PlaceContentCenter>
    );
}

export default App;
