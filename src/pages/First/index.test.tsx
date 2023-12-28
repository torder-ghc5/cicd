import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Controller from '../../components/First/Controller';

test('+ 버튼 클릭', async () => {
    let count = 0;
    const originCount = count;
    const setCount = () => {
        count += 1;
    };
    render(<Controller count={count} setCount={setCount} />);  

    const PlusButton = () => screen.getByText("+");
    const clickPlus = () => {
        userEvent.click(PlusButton());
    };

    clickPlus();  
    await waitFor(() => {
        expect(count).toEqual(originCount + 2);
    });
});

test('- 버튼 클릭', async () => {
    let count = 0;
    const originCount = count;
    const setCount = () => {
        count -= 1;
    };
    render(<Controller count={count} setCount={setCount} />);  

    const MinusButton = () => screen.getByText("-");
    const clickMinus = () => {
        userEvent.click(MinusButton());
    };

    clickMinus();  
    await waitFor(() => {
        expect(count).toEqual(originCount - 1);
    });
});
