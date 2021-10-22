import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When a user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('that the user has not selected a number for the number of events shown', async () => {
      AppWrapper = await mount(<App />);      
    });
    when('the list of events is displayed', () => {
      //test if the number of events component is displayed
      AppWrapper.update();
      expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);  
    });
    then('the number of event entries shown will be 32', () => {   
      //test the default state of the number of events component     
      const numOfEvents = AppWrapper.find(NumberOfEvents);
      const numOfEventsState = numOfEvents.state('numberOfEvents');
      expect(numOfEventsState).toEqual(32);
    });
  });

  test('Users can change the number of events they want to see', ({given,when,then,}) => {
    let AppWrapper;    
    let numberOfEvents;
    given('the event data exists', async () => {
      //find number of events component and set its number of events state to 0
      AppWrapper = await mount(<App />);      
      numberOfEvents = AppWrapper.find(NumberOfEvents);
      numberOfEvents.setState({numberOfEvents: 0});
    });
    when('the user enters a number in the number of events text box', () => { 
      //simulate the change of the count in the number-input
      const eventObject = { target: { value: 20 } };      
      numberOfEvents.find('.number-input').simulate('change', eventObject);  
    });
    then('the event list will show that number of events', () => {  
      //expect the state to have changed to 20
      expect(numberOfEvents.state('numberOfEvents')).toBe(20);
    });
  });
});
