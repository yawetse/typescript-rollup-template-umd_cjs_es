import React from 'react';
import { expect, } from 'chai';
import { mount, shallow, render, configure, } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { ClassComponent, FuncComponent, } from './index';
configure({ adapter: new Adapter() });

describe('ClassComponent', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<ClassComponent bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});

describe('Function Component', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<FuncComponent bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});