import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-testing-library"
import 'jest-dom/extend-expect'
import Carousel from './Carousel';

const images3 = ([
  {key: 0, image: "http://target.scene7.com/is/image/Target/GUEST_b10256c5-9a14-4777-b5a6-02b4c1f8a9cc"},
  {key: 1, image: "http://target.scene7.com/is/image/Target/GUEST_83705133-fb5e-4357-be37-94ae1392b915"},
  {key: 2, image: "http://target.scene7.com/is/image/Target/GUEST_40a6190c-d9e3-4ddf-b06d-6db6a13927f3"}
]);

const { getByText, getByTestId } = render(<Carousel images={images3} />);

it('test carousel 3 images', () => {
  var img = document.createElement("img");
  img.alt="previous preview";
  img.className="primary-image not-selected-image";
  img.setAttribute('data-id', images3[2].key);
  img.setAttribute('data-testid', "imagePrev");
  img.src=images3[2].image;
  expect(getByTestId("imagePrev")).toEqual(img);

  img.alt="product preview";
  img.className="primary-image selected-image";
  img.setAttribute('data-id', images3[0].key);
  img.setAttribute('data-testid', "imageNow");
  img.src=images3[0].image;
  expect(getByTestId("imageNow")).toEqual(img);

  img.alt="next preview";
  img.className="primary-image not-selected-image";
  img.setAttribute('data-id', images3[1].key);
  img.setAttribute('data-testid', "imageNext");
  img.src=images3[1].image;
  expect(getByTestId("imageNext")).toEqual(img);

  img.alt="product";
  img.className="primary-image";
  img.setAttribute('data-id', images3[0].key);
  img.setAttribute('data-testid', "primary");
  img.src=images3[0].image;
  expect(getByTestId("primary")).toEqual(img);
});
