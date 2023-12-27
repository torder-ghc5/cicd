import { useState } from "react";

import './index.css';

function FirstPage() {
    const [count, setCount] = useState(0);

    const onClickMinus = () => {
        setCount(prev => prev - 1);
    };

    const onClickPlus = () => {
        setCount(prev => prev + 1);
    };

    return (
        <div className="Wrapper">
            <button onClick={onClickMinus}>-</button>
            <div role="value">{count}</div>
            <button onClick={onClickPlus}>+</button>
        </div>
    )
};

export default FirstPage;