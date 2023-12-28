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
        <div className="Wrapper">
            <button onClick={onClickMinus}>-</button>
            <div role="value">{count}</div>
            <button onClick={onClickPlus}>+</button>
        </div>
    )
};

export default Controller;