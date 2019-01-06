import * as React from 'react';
import * as renderer from "react-test-renderer";
import Layout from './Layout';

it('layout renders correctly', () => {
  const tree = renderer
  .create(<Layout/>)
  .toJSON();
expect(tree).toMatchSnapshot();
});
