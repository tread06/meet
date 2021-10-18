import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  
  let NumberOfEventsWrapper;

  beforeAll(() => {       
    NumberOfEventsWrapper = shallow(<NumberOfEvents  />);
  });

  test('render text input', () => {
    //check to see if there's an element with class ".number-input"
    expect(NumberOfEventsWrapper.find('.number-input')).toHaveLength(1);
  });

  test('renders number state correctly', () => {
    //get the numberOfEvents value from the component state
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    //expect the value of the text element with class ".number-input" to match the query state
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(numberOfEvents);
  });

  test('initial state is 32', () => {
    console.log(NumberOfEventsWrapper.state('numberOfEvents'));
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    expect(NumberOfEventsWrapper.find('.number-input').prop('value')).toBe(32);
  });


  test('change state when number input changes', () => {
    //initialize the query state to '0'
    NumberOfEventsWrapper.setState({
      numberOfEvents: '0',
    });
    // create an event to set the value of the text box to '20'
    const eventObject = { target: { value: 20 } };
    // simulate the change event
    NumberOfEventsWrapper.find('.number-input').simulate('change', eventObject);
    //expect the state to be updated to the new value -- '20'
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(20);
  });  
});