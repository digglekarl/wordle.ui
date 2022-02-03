import React from 'react';

export type GameState = {
    rowIndex: number,
    currentIndex: number,
    row: any[],
    letters: string[]
}

export default class GameApp extends React.Component<GameState> {
    state: GameState = {
        rowIndex:0,
        row:[['','','','',''], ['','','','',''], ['','','','',''], ['','','','',''], ['','','','',''], ['','','','','']],
        currentIndex: 0,
        letters: ['','','','','']
    };

    getRowIndex = (): number => {
        return this.state.rowIndex;
    }

    getIndex = (): number => {
        return this.state.currentIndex;
    };

    setNextLetter = (e: { currentTarget: HTMLButtonElement; }): void => {
        
        const button: HTMLButtonElement = e.currentTarget;
        let letter = button.getAttribute('data-key') || '';

        if (letter === 'del'){
            if (this.state.currentIndex > 0)
            {
                this.state.letters[this.state.currentIndex-1] = '';
                this.setState(state => ({currentIndex: this.getIndex()-1}));
            } 
        }
        else if (letter === 'enter'){
            if (this.state.rowIndex < 6){
                this.setState(state => ({rowIndex: this.getRowIndex()+1, currentIndex: 0, letters: ['','','','','']}));
            }
        }
        else {
            if (this.state.currentIndex < 5)
            {
                this.state.letters[this.state.currentIndex] = letter;
                this.setState(state => ({currentIndex: this.getIndex()+1}));
                this.state.row[this.state.rowIndex] = this.state.letters;
            }
        }

        console.log(this.state);
    };

    render() {
        
        return <div id="game">
            <div id="board-container">
                <div id="board">
                    <div id="row">
                        <div id="tile" data-state="tbd">{this.state.row[0][0]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[0][1]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[0][2]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[0][3]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[0][4]}</div>
                    </div>
                    <div id="row">
                        <div id="tile" data-state="tbd">{this.state.row[1][0]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[1][1]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[1][2]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[1][3]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[1][4]}</div>
                    </div>
                    <div id="row">
                        <div id="tile" data-state="tbd">{this.state.row[2][0]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[2][1]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[2][2]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[2][3]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[2][4]}</div>
                    </div>
                    <div id="row">
                        <div id="tile" data-state="tbd">{this.state.row[3][0]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[3][1]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[3][2]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[3][3]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[3][4]}</div>
                    </div>
                    <div id="row">
                        <div id="tile" data-state="tbd">{this.state.row[4][0]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[4][1]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[4][2]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[4][3]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[4][4]}</div>
                    </div>
                    <div id="row">
                        <div id="tile" data-state="tbd">{this.state.row[5][0]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[5][1]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[5][2]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[5][3]}</div>
                        <div id="tile" data-state="tbd">{this.state.row[5][4]}</div>
                    </div>
                </div>
            </div>
            <div id="keyboard">
                <div id="keyboard-row">
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="q">q</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="w">w</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="e">e</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="r">r</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="t">t</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="y">y</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="u">u</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="i">i</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="o">o</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="p">p</button>
                </div>
                <div id="keyboard-row">
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="a">a</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="s">s</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="d">d</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="f">f</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="g">g</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="h">h</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="j">j</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="k">k</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="l">l</button>
                </div>
                <div id="keyboard-row">
                    <button className="keyboard-button one-and-half" onClick={this.setNextLetter} data-key="del">del</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="z">z</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="x">x</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="c">c</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="v">v</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="b">b</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="n">n</button>
                    <button className="keyboard-button" onClick={this.setNextLetter} data-key="m">m</button>
                    <button className="keyboard-button one-and-half" onClick={this.setNextLetter} data-key="enter">Enter</button>
                </div>
            </div>
        </div>

        // return <div className="App">
        //     <header className="App-header">
        //         <h3>Render Component with State and Props using TypeScript</h3>
        //     </header>
        //     <div style={{height: "5vh", padding: "1em", margin: "7em"}}>
        //         <h4>{quoteToDisplay}</h4>
        //     </div>
        //     <button onClick={this.getNextQuote}>NEXT QUOTE</button>
        // </div>
    }
}

// import React from 'react';
// type GameProps = {
//     letters: string[]
// }

// type GameState = {
//     currentIndex: number
// }

// export default class GameApp extends React.Component<GameProps, GameState> {
//     state: GameState = {
//         currentIndex: 0
//     };

//     // getIndex = (): number => {
//     //     return this.props.letters.length+1;
//     // };

//     // getNextQuote = (): void => this.setState(state => ({currentIndex: this.getIndex()}));

//     // setNextLetter = (e: { currentTarget: HTMLButtonElement; }): void => {
//     //     const button: HTMLButtonElement = e.currentTarget;
//     //     let letter = button.getAttribute('data-key') || '';

//     //     console.log(letter);

//     //     this.props.letters.push(letter);

//     //     this.setState(state => ({ currentIndex: this.getIndex() }));
//     // };
 
//     render() {
//         //const letterToDisplay = this.props.letters[this.state.currentIndex];

//         return
//             <div>Hello World</div>
//         // <div id="game">
//         //     <div id="board-container">
//         //         <div id="board">
//         //             <div id="row">
//         //                 <div id="tile" data-state="tbd">{letterToDisplay}</div>
//         //                 <div id="tile" data-state="tbd">{letterToDisplay}</div>
//         //                 <div id="tile" data-state="tbd">{letterToDisplay}</div>
//         //                 <div id="tile" data-state="tbd">{letterToDisplay}</div>
//         //                 <div id="tile" data-state="tbd">{letterToDisplay}</div>
//         //             </div>
//         //         </div>
//         //     </div>
//         //     <div id="keyboard">
//         //         <div id="keyboard-row">
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="q">q</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="w">w</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="e">e</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="r">r</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="t">t</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="y">y</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="u">u</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="i">i</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="o">o</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="p">p</button>
//         //         </div>
//         //         <div id="keyboard-row">
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="a">a</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="s">s</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="d">d</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="f">f</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="g">g</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="h">h</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="j">j</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="k">k</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="l">l</button>
//         //         </div>
//         //         <div id="keyboard-row">
//         //             <button className="keyboard-button one-and-half" onClick={this.setNextLetter} data-key="del">del</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="z">z</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="x">x</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="c">c</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="v">v</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="b">b</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="n">n</button>
//         //             <button className="keyboard-button" onClick={this.setNextLetter} data-key="m">m</button>
//         //             <button className="keyboard-button one-and-half" onClick={this.setNextLetter} data-key="enter">Enter</button>
//         //         </div>
//         //     </div>
//         // </div>
//     }
// }