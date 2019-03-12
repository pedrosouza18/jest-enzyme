import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Addition', () => {
  it('Knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('App component', () => {
  it('starts with count of 0', () => {
    const wrapper = shallow(<App/>);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });

  it('increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App/>);
    const incrementButton = wrapper.find('button.increment');
    incrementButton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  });

  it('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App/>);
    const decrementButtton = wrapper.find('button.decrement');
    decrementButtton.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: -1');
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});