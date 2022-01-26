import React, { KeyboardEvent, MouseEvent, MouseEventHandler } from "react";

type Props = {
    handleKeyboardClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Keyboard: React.FC<Props> = ({
    handleKeyboardClick
}) => {
    return (
        <div id="keyboard">
            <div id="keyboard-row">
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="q">q</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="w">w</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="e">e</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="r">r</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="t">t</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="y">y</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="u">u</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="i">i</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="o">o</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="p">p</button>
            </div>
            <div id="keyboard-row">
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="a">a</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="s">s</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="d">d</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="f">f</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="g">g</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="h">h</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="j">j</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="k">k</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="l">l</button>
            </div>
            <div id="keyboard-row">
                <button className="keyboard-button one-and-half" onClick={handleKeyboardClick} data-key="del">del</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="z">z</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="x">x</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="c">c</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="v">v</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="b">b</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="n">n</button>
                <button className="keyboard-button" onClick={handleKeyboardClick} data-key="m">m</button>
                <button className="keyboard-button one-and-half" onClick={handleKeyboardClick} data-key="enter">Enter</button>
            </div>
        </div>
    )
};

export default Keyboard;