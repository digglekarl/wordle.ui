import React, { useState, useEffect, useCallback, MouseEvent } from "react";
import Tile from '../gameboard/tile';
import Gamerow from '../gameboard/gamerow';
import Keyboard from '../keyboard/keyboard';

type FormEvent = React.FormEvent<HTMLFormElement>;

function Home() {
    const [data, setData] = useState<any>([]);
    const [mode, setMode] = useState('online')
    useEffect(() => {
        let url = "https://withered-dawn-8128.fly.dev/api/Wordle";
        fetch(url, {mode: "no-cors"}).then((response) => {
            console.log(response);
            response.text().then((result) => {
                console.warn(result);
                setData(result);
                localStorage.setItem("word", result);
            });
        }).catch(err => {
            setMode('offline');
            let collection = localStorage.getItem("word");
            setData(JSON.parse(collection || '{}'));
        });
    }, []);



    //const [state, setState] = useState<string>("");
    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        //console.log({ state });
    };

    type Game = {
        rowIndex: number,
        letters: string[]
    }
    
    const [gameState, setState] = useState<Game>();

    const handleKeyboardClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const button: HTMLButtonElement = e.currentTarget;

        let letter = button.getAttribute('data-key') || '';

        let gs: Game = gameState || { rowIndex: 0, letters: [] };
        gs.rowIndex = 0;
        if (gs.letters.length <= 4) {
            gs.letters.push(letter);
            setState(gs);
        }
    };

    return (
        <div id="game">
            <div id="board-container">
                <div id="board">
                    <Gamerow letters={gameState?.letters || []}></Gamerow>
                    <Gamerow letters={[]}></Gamerow>
                    <Gamerow letters={[]}></Gamerow>
                    <Gamerow letters={[]}></Gamerow>
                    <Gamerow letters={[]}></Gamerow>
                </div>

            </div>
            <Keyboard handleKeyboardClick={handleKeyboardClick} />
        </div>


    )
}

export default Home;