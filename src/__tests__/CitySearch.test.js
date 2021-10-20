import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
  let locations, CitySearchWrapper;
  beforeAll(() => {
    //get a superset of location names from mock data
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
  });

  test('render text input', () => {
    //check to see if there's an element with class "city"
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('renders a list of suggestions', () => {
    //check to see if there's an element with class "suggestions"
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    //get the query value from the component state
    const query = CitySearchWrapper.state('query');
    //expect the value of the text element with class "city" to match the query state
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    //initialize the query state to 'Munich'
    CitySearchWrapper.setState({
      query: 'Munich',
    });

    // create an event to set the value of the text box to 'Berlin'
    const eventObject = { target: { value: 'Berlin' } };
    // simulate the change event
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    //expect the state to be updated to the new value -- 'Berlin'
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    //set the state of suggestions
    CitySearchWrapper.setState({ suggestions: locations });
    //assign the suggestions state to a valiable
    const suggestions = CitySearchWrapper.state('suggestions');
    //expect that there are a number of elements that have the class "suggestions li" that is equal to the number of suggestions plus one
    //the extra entry will be an option to see all cities
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(
      suggestions.length + 1
    );
    //expect each element's text value to be the same as the suggestions found in the state
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(
        suggestions[i]
      );
    }
  });

  test('suggestion list match the query when changed', () => {
    //intialize component with no query or suggestions
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    //simulate the text value changing to "Berlin"
    CitySearchWrapper.find('.city').simulate('change', {
      target: { value: 'Berlin' },
    });
    //get the queary state. Should be "Berlin: because the text value was updated
    const query = CitySearchWrapper.state('query');
    //filter locations using the query
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    //expect the suggestions state to match the filtered locations (toEqual for complex data)
    expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
  });

  test("selecting a suggestion should change query state", () => {
    //set the state of the query to 'berlin'
    CitySearchWrapper.setState({
      query: 'Berlin'  });
    //get the suggestions from the state
    const suggestions = CitySearchWrapper.state('suggestions');
    //simulate a click on the first element with class "suggestions li"
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    //expect the state to be updated to match the suggestion
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });


  test("selecting CitySearch input reveals the suggestions list", () => {
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({ display: 'none' });
  });

  test("selecting a suggestion should hide the suggestions list", () => {
    CitySearchWrapper.setState({
      query: 'Berlin',
      showSuggestions: undefined
    });
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none' });
  });
});
