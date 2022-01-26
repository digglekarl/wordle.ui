import React from "react";

type Props = {
    letter: string
};

const Gametile: React.FC<Props> = ({
    letter
}) => {
    console.log(letter);
    return (
        <div id="tile" data-state="tbd">{letter}</div>
    )
};

export default Gametile;