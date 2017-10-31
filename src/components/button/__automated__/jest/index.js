import React from 'react';
import renderer from 'react-test-renderer';

import { Component, title } from '../';

it(title, () => {
  const tree = renderer.create(<Component label="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
