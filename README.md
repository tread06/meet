# MEET APP USER STORIES
**Feature 1: Filter events by city.**

As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities.
-Given the user hasn’t searched for any city,
-When the user opens the app,
-Then the user should see a list of all upcoming events.

Scenario 2: Users should see a list of suggestions when they search for a city.
-Given the main page is open,
-When the user starts typing in the city textbox,
-Then the user should see a list of cities (suggestions) that match what they’ve typed.

Scenario 3: Users can select a city from the suggested list.
-Given the user was typing “berlin” in the city textbox and the list of suggested cities is showing,
-When the user selects a city (e.g., “Berlin, Germany”) from the list,
-Then their city should be changed to that city (i.e.. “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

**Feature 2: Show/hide an event’s details.**

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

Scenario 1: An event element is collapsed by default.
-Given that events have been listed,
-When each event is first shown,
-Then the event panel will hide additional details by being collapsed by default.

Scenario 2: Users can expand an event to see its details.
-Given that events have been listed and the event is collapsed,
-When the user clicks on the “show details” button,
-Then the event should expand revealing the additional details.

Scenario 3: Users can collapse an event to hide its details.
-Given that events have been listed and the event is expanded,
-When the user clicks on the “hide details” button,
-Then the event should collapse hiding the additional details.


**Feature 3: Specify the number of events.**

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario 1: When a user hasn’t specified a number, 32 is the default number.
-Given that the user has not selected a number for the number of events shown,
-When the list of events is displayed,
-Then the number of event entries shown will be 32.

Scenario 2: Users can change the number of events they want to see.
-Given the event data exists,
-When the user enters a number in the number of events text box,
-Then the event list will show that number of events.

**Feature 4: Use the app when offline.**

As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

Scenario 1: Show the cached data when there’s no internet connection.
-Given that there is no internet connection available,
-When the list of events is displayed,
-Then the list will show the events that have been cached.

Scenario 2: Show error when user changes the settings (city, time range).
-Given that there is no internet connection available,
-When the user changes the settings, (city, time range, etc..),
-Then an error will be displayed signifying that an internet connection is required to retrieve additional event data.

**Feature 5: Data visualization.**

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city. 

Scenario 1: Show a chart with the number of upcoming events in each city.
-Given that the event data has been retrieved,
-When a city is selected,
-Then a chart showing the number of upcoming events in that city will be displayed.
