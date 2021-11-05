import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { getEvents } from '../api';
import { loadFeature, defineFeature, waitFor } from 'jest-cucumber';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('that events have been listed', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.state.events = await getEvents();  
    });
    when('each event is first shown', () => {        
      AppWrapper.update();      
    });
    then('the event panel will hide additional details by being collapsed by default', async () => {        
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  });

  test('Users can expand an event to see its details', ({given,when,then,}) => {
    let AppWrapper;    
    given('that events have been listed and the event is collapsed', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.setState({events: await getEvents()});   
    });
    when('the user clicks on the “show details” button', () => { 
      AppWrapper.find('.toggle-details-button').at(0).simulate('click');  
    });
    then('the event should expand revealing the additional details', () => {  
      expect(AppWrapper.find('.event').at(0).find('.event-details')).toHaveLength(1);
    });
  });

  test('Users can collapse an event to hide its details', ({given, when, then, }) => {
    let AppWrapper;   
    given('that events have been listed and the event is expanded', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.setState({events: await getEvents()}); 
      AppWrapper.find(Event).at(0).setState({ detailsHidden: false });
      expect(AppWrapper.find('.event').at(0).find('.event-details')).toHaveLength(1);
    });
    when('the user clicks on the “hide details” button', () => {
      AppWrapper.find('.toggle-details-button').at(0).simulate('click');
    });
    then('the event should collapse hiding the additional details', () => {
      expect(AppWrapper.find('.event').at(0).find('.event-details')).toHaveLength(0);
    });
  });
});
