import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Item} from "./domain/Item";

const App = () => {
    const [stuff, setStuff] = useState<Item[]>([]);

    useEffect(() => {
            axios.get('/stuff')
                .then(res => {
                    const {data} = res;
                    setStuff(data);
                })
        },
        []
    )

    return (
        <div className="App">
            <header>Stuff</header>
            <ul>
                {stuff.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
};

export default App;
