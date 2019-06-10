import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import Reviews from './Reviews';

const proReview = ({
  title: "this title",
  review: "it was great",
  screenName: "iLikeIt",
});

const conReview = ({
  title: "title2",
  review: "it bad",
  screenName: "SuperMad",
});

const { getByText, getByTestId } = render(<Reviews proReview={proReview} conReview={conReview} />);

it('test review loads', () => {
  expect(getByTestId('review-overall')).toHaveTextContent("overall");
});

it('test set pro review', () => {

  expect(getByTestId('review-protitle')).toHaveTextContent(proReview.title);
  expect(getByTestId('review-proreview')).toHaveTextContent(proReview.review);
  expect(getByTestId('review-proname')).toHaveTextContent(proReview.screenName);
});

it('test set con review', () => {

  expect(getByTestId('review-contitle')).toHaveTextContent(conReview.title);
  expect(getByTestId('review-conreview')).toHaveTextContent(conReview.review);
  expect(getByTestId('review-conname')).toHaveTextContent(conReview.screenName);
});
