import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {

  let AppWrapper;
  beforeAll(() =>{
    AppWrapper = shallow(<App />);
  })

  //test events list
  test('render list of events', () => {    
    //expect there to be exactly one 'EventList' component within the app    
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  //test search text box
  test('render CitySearch', () => {
    //expect there to be exactly one 'CitySearch' component within the app     
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  //test for number of components input
  test('render event number input', () => {    
    //expect there to be exactly one 'NumberOfEvents' component within the app    
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});
