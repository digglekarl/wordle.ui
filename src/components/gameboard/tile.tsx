import { useCallback } from "react";
import React, { ChangeEvent, FormEvent } from "react";

type SubmitEvent = FormEvent<HTMLFormElement>;
type InputEvent = ChangeEvent<HTMLInputElement>;


// const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
//     (e) => {
//         if (e.key === "Enter") {
//             const inputs = Array.from(
//                 // Get table or tbody whatever that contains all inputs. The number of parentElements depends on the structure of your html
//                 e.currentTarget?.parentElement?.parentElement?.parentElement?.querySelectorAll(
//                     "input"
//                 ) ?? []
//             ).filter((e) => !e.disabled)
//             const index = inputs.indexOf(e.currentTarget)
//             inputs[index + 1]?.focus()
//             e.preventDefault()
//         }
//         if (e.key === "Backspace") {
//             const inputs = Array.from(
//                 // Get table or tbody whatever that contains all inputs. The number of parentElements depends on the structure of your html
//                 e.currentTarget?.parentElement?.parentElement?.parentElement?.querySelectorAll(
//                     "input"
//                 ) ?? []
//             ).filter((e) => !e.disabled)
//             const index = inputs.indexOf(e.currentTarget)
//             inputs[index - 1]?.focus()
//             e.preventDefault()
//         }
//     },
//     []
// )

type Props = {
    numTiles: number
    state: string;
    setState: (val: string) => void;
    handleOnSubmit: (e: SubmitEvent) => void;
    // placeholder: string;
};

const Tile: React.FC<Props> = ({
    state,
    setState,
    numTiles: number,
    handleOnSubmit
}) => {
    return (
        // Hidden for simplicity
        <div>
            <form onSubmit={handleOnSubmit}>
                {Array.from({ length: 5 }, (_, i) => <input key={i} type="text" onChange={(e: InputEvent) => setState(e.target.value)} maxLength={1} id="textbox" className="" />)}
            </form>

            {/* <input type="text" onKeyUp={onKeyPress} maxLength={1} id="textbox" className="" /> */}
        </div>
    );
};

export default Tile;