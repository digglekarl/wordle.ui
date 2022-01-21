import React, { useState, useEffect } from "react";

function Home() {
    const [data, setData] = useState<any[]>([]);
    const [mode, setMode] = useState('online')
    useEffect(() => {
        let url = "http://localhost:12859/api/Wordle";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                setData(result);
                localStorage.setItem("word", JSON.stringify(result));
            });
        }).catch(err => {
            setMode('offline');
            let collection = localStorage.getItem("word");
            setData(JSON.parse(collection || '{}'));
        });
    }, []);


    return (
        <div>
            <h1>Wordle</h1>
        </div>
    )
}

export default Home;