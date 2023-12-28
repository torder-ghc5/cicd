import './Controller.css';

interface Props {
    count: number;
    setCount: (count: number) => void;
}

function Controller({ count, setCount }: Props) {
    const onClickMinus = () => {
        setCount(count - 1);
    };

    const onClickPlus = () => {
        setCount(count + 1);
    };

    return (
        <div className="Controller_Wrapper">
            <button className="Controller_Button" onClick={onClickMinus}>-</button>
            <div>{count}</div>
            <button className="Controller_Button" onClick={onClickPlus}>+</button>
        </div>
    )
};

export default Controller;