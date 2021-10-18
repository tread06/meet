
//create a new array of only event.location names from an event list
export const extractLocations = (events) => {
  //create an array with all the names
  var extractLocations = events.map((event) => event.location);
  //create an array with duplicates removed using Set
  var locations = [...new Set(extractLocations)];
  return locations;
};

export const extractFirstEvent = (events) => {
  return events[0];
};