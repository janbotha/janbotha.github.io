import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import Quantity from './Quantity';

const { getByText, getByTestId } = render(<Quantity quantity="3" />);

it('test set quantity', () => {
  expect(getByTestId('quantity-number')).toHaveTextContent("3");
});
