import React, { MouseEvent } from "react";
import Gametile from './gametile';

let letters:string[] = [];

const handleKeyboardClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const button: HTMLButtonElement = e.currentTarget;

    let letter = button.getAttribute('data-key') || '';
    letters.push(letter);
    //setState(l);
};

type Props = {
    letters: string[] | [];
    //handleKeyboardClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Gamerow: React.FC<Props> = ({
    letters
}) => {
    console.log(letters);
    return (
        <div id="row">
            <Gametile letter={letters[0]} />
            <Gametile letter={letters[1]} />
            <Gametile letter={letters[2]} />
            <Gametile letter={letters[3]} />
            <Gametile letter={letters[4]} />
        </div>
    )
};

export default Gamerow;