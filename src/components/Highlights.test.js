import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import Highlights from './Highlights';

const { getByText, getByTestId } = render(<Highlights />);

it('test Highlights loads', () => {
  expect(getByTestId('highlights1')).toHaveTextContent("Wattage Output: 1100 Watts");
  expect(getByTestId('highlights2')).toHaveTextContent("Number of Speeds: 3");
  expect(getByTestId('highlights3')).toHaveTextContent("Capacity (volume): 72.0 Oz.");
  expect(getByTestId('highlights4')).toHaveTextContent("Appliance Capabilities: Blends");
  expect(getByTestId('highlights5')).toHaveTextContent("Includes: Travel Lid");
  expect(getByTestId('highlights6')).toHaveTextContent("Material: Plastic");
  expect(getByTestId('highlights7')).toHaveTextContent("Finish: Painted");
  expect(getByTestId('highlights8')).toHaveTextContent("Metal Finish: Chrome");
  expect(getByTestId('highlights9')).toHaveTextContent("Safety and Security Features: Non-Slip Base");
  expect(getByTestId('highlights10')).toHaveTextContent("Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts");
});
