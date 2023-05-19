/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import PlaceContentCenter from './components/PlaceContentCenter.jsx';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/card.jsx';
function App(props) {
    const [users, setUser] = useState([]);

    useEffect(() => {
        async function getUser() {
          try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(response.data);
          }
            catch (error) {
            console.error('Something went wrong');

            }
        }
        getUser()
    }, []);
    return (
        <PlaceContentCenter>
           <Card>
                <Card.Title>Users :{users.length}</Card.Title>
                <Card.Body>
                    {users.length > 0 ? (
                     <ol>
                        {users.map((user)=> (
                            <li key={user.id}>{user.name}({user.username})</li>
                        ))}
                     </ol>
                    ):(
                    <div>There are no users.</div>
                    )}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
