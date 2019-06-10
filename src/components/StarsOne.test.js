import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import Stars from './Stars';

const { getByText, getByTestId } = render(<Stars option="1"/>);

it('test set 5 stars', () => {
  var span = document.createElement("span");
  span.className="reviewStars";
  span.setAttribute('data-id', 1);
  span.setAttribute('data-testid', "stars-numbers");
  var test = getByTestId("stars-numbers");
  while (test.hasChildNodes()) {
    test.removeChild(test.childNodes[0]);
  }
  expect(test).toEqual(span);
});
