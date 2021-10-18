import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';
import { extractFirstEvent } from '../api';

describe('<Event /> component', () => {
  //to do: figure out how many elements and what they are
  let EventWrapper, eventData;

  beforeAll(() => {
    eventData = extractFirstEvent(mockData);
    EventWrapper = shallow(<Event event={eventData} />);
  });

  test('render date time', () => {
    expect(EventWrapper.find('.event-date-time')).toHaveLength(1);
  });
  test('render event name', () => {
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
  });
  test('render event location', () => {
    expect(EventWrapper.find('.event-location')).toHaveLength(1);
  });
  test('render toggle details button', () => {
    expect(EventWrapper.find('.toggle-details-button')).toHaveLength(1);
  });
  test('details are hidden by default', () => {
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
  });
  test('details are toggled on when show details is clicked', () => {
    EventWrapper.setState({ detailsHidden: true });
    EventWrapper.find('.toggle-details-button').simulate('click');
    expect(EventWrapper.state('detailsHidden')).toBe(false);
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
  });
  test('details are toggled off when hide details is clicked', () => {
    EventWrapper.setState({ detailsHidden: false });
    EventWrapper.find('.toggle-details-button').simulate('click');
    expect(EventWrapper.state('detailsHidden')).toBe(true);
    expect(EventWrapper.find('.event-details')).toHaveLength(0);
    expect(EventWrapper.find('.event-description')).toHaveLength(0);
  });

  ///verify prop data is correct
  test('name event data is correct', () => {
    const nameText = EventWrapper.find('.event-name');
    expect(nameText.text()).toBe('Learn JavaScript');
  });
  test('date-time event data is correct', () => {
    const nameText = EventWrapper.find('.event-date-time');
    expect(nameText.text()).toBe('2020-05-19T16:00:00+02:00');
  });
  test('location event data is correct', () => {
    const nameText = EventWrapper.find('.event-location');
    expect(nameText.text()).toBe('London, UK');
  });
  test('description event data is correct', () => {
    EventWrapper.setState({ detailsHidden: false });
    const nameText = EventWrapper.find('.event-description');
    expect(nameText.text()).toBe(
      'Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.'
    );
  });
});
