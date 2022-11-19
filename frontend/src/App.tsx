import React, {FormEvent, useEffect, useState} from 'react';
import axios from 'axios';
import {Item} from "./domain/Item";

const App = () => {
    const [stuff, setStuff] = useState<Item[]>([]);
    const [newItemName, setNewItemName] = useState<string>("");

    const getStuff = () => {
        axios.get('/stuff')
            .then(res => {
                const {data} = res;
                console.log(data)
                setStuff(data);
            })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post('/stuff', {name: newItemName})
            .then((res) => {
                console.log(res.data)
                setStuff([...stuff, res.data])
            });
    }

    useEffect(() => {
            getStuff()
        },
        []
    )

    return (
        <div className="App">
            <header>Stuff</header>
            <ul>
                {stuff.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>Item to Add
                    <input type='text' name='item' onChange={(event) => setNewItemName(event.target.value)}/>
                </label>
                <button type='submit'> Put in Closet</button>
            </form>
        </div>
    );
};

export default App;
