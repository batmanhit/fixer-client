import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { NavLink } from 'reactstrap';

import { App } from './app';
// import { Route } from 'react-router';

describe('Whole Application', () => {

  const testElement: JSX.Element = <App/>;
  const wrapper: ShallowWrapper = shallow(testElement);

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('render NavLink correctly', () => {
    const navLink = wrapper.find(NavLink);
    expect(navLink.prop('href')).toEqual('/create');
  });
});