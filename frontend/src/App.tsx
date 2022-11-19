import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
    const [stuff, setStuff] = useState([]);

    useEffect(() => {
            axios.get('/stuff')
                .then(res => {
                    const {data} = res;
                    setStuff(data.stuff);
                })
        },
        []
    )

    return (
        <div className="App">
            <header>Stuff</header>
            <ul>
                {stuff.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
};

export default App;
