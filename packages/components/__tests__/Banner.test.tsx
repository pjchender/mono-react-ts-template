import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Banner } from '../src';

test('Banner should show correct text', async () => {
  const banner = render(<Banner text="foo" />);
  const component = await banner.findByTestId('banner');
  expect(component.innerHTML).toBe('Hello, foo');
});

test('Banner snapshot show be the same', () => {
  const tree = renderer.create(<Banner text="foo" />).toJSON();
  expect(tree).toMatchSnapshot();
});
