import React, { useState } from "react";

export const Counter = () => {

    const [numberClicks, setNumberClicks] = useState<number>(0);
    const clickButtonPlus = () => {
        setNumberClicks(numberClicks + 1);
    }
    const clickButtonMinus = () => {
        setNumberClicks(numberClicks - 1);
    }

    return (
        <div>
            <div>
                Count: {numberClicks}
            </div>
            <div>
                <button onClick={clickButtonPlus}>+</button>
                <button onClick={clickButtonMinus}>-</button>
            </div>
        </div>
    )
}