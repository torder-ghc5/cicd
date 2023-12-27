import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FirstPage from '.';

test('+ 버튼 클릭', async () => {
  const Value = () => screen.getByRole("value");
  const PlusButton = () => screen.getByText("+");
  const clickPlus = () => {
    userEvent.click(PlusButton());
  };

  render(<FirstPage />);

  expect(Value().textContent).toEqual("0");
  clickPlus();
  await waitFor(() => {
    expect(Value().textContent).toEqual("1");
  })  
});

test('- 버튼 클릭', async () => {
  const Value = () => screen.getByRole("value");
  const MinusButton = () => screen.getByText("-");
  const clickMinus = () => {
    userEvent.click(MinusButton());
  };

  render(<FirstPage />);

  expect(Value().textContent).toEqual("0");
  clickMinus();
  await waitFor(() => {
    expect(Value().textContent).toEqual("-1");
  })  
});
